### 약수 구하기

```js
for (let i = 1; i <= target; i++) {
  if (target % i === 0) {
    console.log(`${i}와 ${target / i}는 ${target}의 약수`);
  }
}
```
