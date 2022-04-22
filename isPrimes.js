function isPrime(x) {
  if (x <= 1) return false;
  if (x == 2) return true;
  if (x % 2 == 0) return false;
  for (let i = 3; i * i <= x; i += 2) {
    if (x % i == 0) return false;
  }
  return true;
}