function divisors(x) {
  let result = [];
  let limit = Math.sqrt(x);
  for (let i = 1; i <= limit; i++) {
    if (i == limit) result.push(i);
    else if (x % i == 0) result.push(i, x / i);
  }
  return result;
}
