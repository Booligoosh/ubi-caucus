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
