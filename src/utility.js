const alphabetizeArrayOfObjects = (array, key) => {
  return array.sort((a, b) => a[key] - b[key]);
};

const capFirstCharInString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const uniqueArrayFromObjectValues = (array, filter) => {
  return [...new Set([].concat(...array.map(item => item[filter])).sort())];
};

export { alphabetizeArrayOfObjects, capFirstCharInString, uniqueArrayFromObjectValues };
