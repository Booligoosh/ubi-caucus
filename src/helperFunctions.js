export function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function removeDuplicates(array) {
  // Best widely-supported technique from https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array/9229821#9229821
  return Array.from(new Set(array));
}

export function flattenArray(array) {
  return array.reduce((soFar, current) => soFar.concat(current), []); // Only works on 2d arrays
}

export function listStrings(stringsArray = []) {
  if (stringsArray.length === 0) {
    return ``;
  } else if (stringsArray.length === 1) {
    return stringsArray[0];
  } else {
    return `${stringsArray.slice(0, stringsArray.length - 1).join(`, `)} and ${
      stringsArray[stringsArray.length - 1]
    }`;
  }
}

// Specific

export function getCellContentInRow(rowArray, colNumber) {
  const cell = rowArray.find(cell => cell.col === colNumber);
  if (cell && cell.content) {
    return cell.content.trim();
  } else {
    return null;
  }
}
