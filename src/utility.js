const alphabetizeArrayOfObjects = (array, key) => {
  return array.sort((a, b) => {
    return (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
  });
};

const capFirstCharInString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const uniqueArrayFromObjectValues = (array, filter) => {
  const originalData = array;
  const filteredData = originalData.map(item => item[filter]);
  const flattenedData = [].concat(...filteredData);
  const uniqueData = [...new Set(flattenedData)];
  const sortedData = uniqueData.sort();
  return sortedData;
};

export { alphabetizeArrayOfObjects, capFirstCharInString, uniqueArrayFromObjectValues };
