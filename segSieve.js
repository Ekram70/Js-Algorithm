var segSieve = function (start, end) {
  let limit = Math.ceil(Math.sqrt(end));
  let arr = new Array(limit).fill(true);
  for (let i = 2; i * i <= end; i++) {
    if (arr[i] == true) {
      for (let j = i * i; j <= end - 1; j += i) {
        arr[j] = false;
      }
    }
  }

  let primes = [];
  for (let i = 2; i < limit; i++) {
    if (arr[i] == true) primes.push(i);
  }

  let target = new Array(end - start + 1).fill(true);
  for (let i = 0; primes[i] * primes[i] <= end; i++) {
    let startIndex = Math.floor(start / primes[i]) * primes[i];
    if (startIndex < start) startIndex += primes[i];
    for (let j = startIndex; j <= end; j += primes[i]) {
      target[j - start] = false;
    }
  }

  let result = [];
  for (let i = 0; i < target.length; i++) {
    if (target[i]) result.push(i + start);
  }

  return result;
};
