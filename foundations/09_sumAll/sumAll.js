function sumAll(a, b) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  let total = 0;

  for (let i = start; i <= end; i++) {
    total += i;
  }

  return total;
}

// Do not edit below this line
module.exports = sumAll;
