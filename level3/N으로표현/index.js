const MAX_N_COUNT = 8;
const DP = new Array(MAX_N_COUNT + 1).fill().map(() => []);

function solution(N, number) {
  DP[1].push(N);
  DP[2].push(nonOperation(N, 2), ...operation(N, N));

  if (N === number) return 1;
  if (DP[2].includes(number)) return 2;

  for (let i = 3; i <= MAX_N_COUNT; i++) {
    DP[i].push(nonOperation(N, i));

    for (const num of DP[i - 2]) {
      DP[i].push(...operation(num, N * 10 + N));
    }

    for (const num of DP[i - 1]) {
      DP[i].push(...operation(num, N));
    }

    if (DP[i].includes(number)) return i;
  }

  return -1;
}

function nonOperation(N, digit) {
  let n = 0;

  for (let i = 0; i < digit; i++) {
    n = n * 10 + N;
  }

  return n;
}

function operation(num1, num2) {
  return [num1 + num2, num1 - num2, num1 * num2, num1 / num2];
}
