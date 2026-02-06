const leapYears = function (year) {
  // If the year is divisible by 400, it's a leap year
  if (year % 400 === 0) {
    return true;
  }

  // If the year is divisible by 100, it's NOT a leap year
  if (year % 100 === 0) {
    return false;
  }

  // If the year is divisible by 4, it's a leap year
  if (year % 4 === 0) {
    return true;
  }

  // Otherwise, not a leap year
  return false;
};

// Do not edit below this line
module.exports = leapYears;
