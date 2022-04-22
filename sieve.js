function primes(n) {
  let arr = new Array(n).fill(true);
  for (let i = 2; i * i <= n; i++) {
    if (arr[i] == true) {
      for (let j = i * i; j <= n - 1; j += i) {
        arr[j] = false;
      }
    }
  }

  let primes = [];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] == true) primes.push(i);
  }

  return primes;
}