const palindromes = function (string) {
  // Convert to lowercase and remove all non-letter characters
  const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the cleaned string
  const reversedString = cleanedString.split("").reverse().join("");

  // Compare original cleaned string with reversed version
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
