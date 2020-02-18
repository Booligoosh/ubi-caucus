require("dotenv").config();
const fs = require("fs");
console.log("ENV URL:", process.env.URL);
if (process.env.URL === `https://support.us.openubiproject.org`) {
  fs.writeFileSync(
    "./public/index.html",
    fs.readFileSync("./public/index-support.html")
  );
} else {
  fs.writeFileSync(
    "./public/index.html",
    fs.readFileSync("./public/index-splash.html")
  );
}
