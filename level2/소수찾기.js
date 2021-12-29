const primes = [];

function solution(numbers) {
  for (let i = 1; i <= numbers.length; i++) {
    recursive(numbers, '', [], i);
  }

  return primes.length;
}

function recursive(numbers, str, idxs, deps) {
  if (str.length === deps) {
    const compare = Number(str);

    if (!primes.includes(compare) && isPrime(compare)) primes.push(compare);

    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (idxs.includes(i)) continue;

    recursive(numbers, str + numbers[i], [...idxs, i], deps);
  }
}

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
