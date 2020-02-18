import stateNames from "@/states.json";

export function padWithZeroes(number, desiredLength) {
  number = number.toString();
  while (number.length < desiredLength) {
    number = `0${number}`;
  }
  return number;
}

export function stateNameFromAbbreviation(abbreviation) {
  return stateNames[abbreviation];
}

// Based on https://stackoverflow.com/a/12646864/5374560
export function shuffleArray(array) {
  array = [].concat(array);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getHost() {
  if (window.location.hash === `#splash`) {
    return `us.openubiproject.org`;
  } else {
    if (
      [`us.openubiproject.org`, `support.us.openubiproject.org`].includes(
        window.location.host
      )
    ) {
      return window.location.host;
    } else {
      return `support.us.openubiproject.org`;
    }
  }
}
