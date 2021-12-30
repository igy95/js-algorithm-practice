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

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
```

### 배열의 최댓값 구하기

```js
const arr = [1, 2, 3, 4, 5];
const max = Math.max(...arr);
```

### 2차원 배열 만들기

```js
const 2dArray = new Array(5).fill().map(() => new Array(1).fill(0));
// [[0], [0], [0], [0], [0]]
```
