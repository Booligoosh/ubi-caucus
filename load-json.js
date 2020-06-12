require("dotenv").config();

const fs = require("fs");
const yaml = require("js-yaml");
const fetch = require("node-fetch");
const parse = require("csv-parse/lib/sync");
const endpoint = process.env.SPREADSHEET_CSV_ENDPOINT;

// loadJSONFromSheet();
loadJSONFromGitHub();

async function loadJSONFromGitHub() {
  const yamlText = await fetch(
    "https://raw.githubusercontent.com/OpenUBIProject/data/master/candidates.yaml"
  ).then(r => r.text());

  fs.writeFileSync(
    "./src/candidates.json",
    JSON.stringify(yaml.safeLoad(yamlText))
  );
}

async function loadJSONFromSheet() {
  const csv = await fetch(endpoint).then(r => r.text());
  const records = parse(csv, {
    columns: true,
    skip_empty_lines: true
  });
  const candidates = records.map(recordToCandidate);
  console.log(JSON.stringify(candidates, null, 2));

  fs.writeFileSync("./src/candidates.json", JSON.stringify(candidates));
}

function recordToCandidate(record) {
  const candidate = {};

  // name
  candidate.name = record["Best Name"]
    .split(", ")
    .reverse()
    .join(" ");

  // runningFor/state/district
  const distCell = record["Best DIST"];
  if (distCell === "President") {
    // President
    candidate.runningFor = "president";
  } else if (
    distCell
      .toLowerCase()
      .trim()
      .startsWith("local")
  ) {
    candidate.runningFor = distCell.trim().replace(/^local( *- *)?/i, "");
  } else if (distCell.includes("-")) {
    // House
    candidate.runningFor = "house";
    const split = distCell.split("-");
    candidate.state = split[0];
    candidate.district = Number(split[1]);
  } else {
    // Senate
    candidate.runningFor = "senate";
    candidate.state = distCell;
  }

  // twitterHandle
  if (record["Twitter"]) {
    candidate.twitterHandle = record["Twitter"].replace(/^@/, "");
  }

  const protocolRegEx = /^https?:\/\//;

  // websiteLink
  if (record["Best Website"]) {
    candidate.websiteLink = record["Best Website"];
    if (!protocolRegEx.test(candidate.websiteLink)) {
      candidate.websiteLink = `http://${candidate.websiteLink}`;
    }
  }

  // donationLink
  if (record["Best Donation Link"]) {
    candidate.donationLink = record["Best Donation Link"];
    if (!protocolRegEx.test(candidate.donationLink)) {
      candidate.donationLink = `http://${candidate.donationLink}`;
    }
  }

  return candidate;
}
