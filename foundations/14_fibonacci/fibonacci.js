const fibonacci = function (n) {
  // Convert input to a number (tests sometimes pass strings)
  n = Number(n);

  // Handle negative numbers
  if (n < 0) {
    return "OOPS";
  }

  // Base case for 0
  if (n === 0) {
    return 0;
  }

  // Base cases for 1 and 2
  if (n === 1 || n === 2) {
    return 1;
  }

  // Iterative Fibonacci for n >= 3
  let prev = 1;
  let curr = 1;

  for (let i = 3; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
