// Remove all given values from array

function removeFromArray(array, ...remove) {
  const result = [];

  // Iterate through each item in the original array
  array.forEach((item) => {
    if (!remove.includes(item)) {
      result.push(item);
    }
  });

  return result;
}

// Do not edit below this line
module.exports = removeFromArray;
