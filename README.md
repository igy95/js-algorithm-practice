### 약수 구하기

```js
for (let i = 1; i <= target; i++) {
  if (target % i === 0) {
    console.log(`${i}와 ${target / i}는 ${target}의 약수`);
  }
}
```

### 소수 판별하기

```js
function isPrime(n) {
  if (n === 2) return true;
  if (n < 2 || n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
```
