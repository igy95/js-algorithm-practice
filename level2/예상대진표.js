/*
1 - N 배정
라운드가 끝나면 절반씩 감소한다
Math.ceil(참가자 번호 / 2) - 다음 라운드 번호
a < b && b - a === 1
*/

function solution(n, a, b) {
  let rounds = totalRound(n);
  let round = 1;

  for (let i = 0; i < rounds; i++) {
    console.log(a, b);
    if (Math.abs(a - b) === 1 && Math.max(a, b) % 2 === 0) return round;

    round++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
}

function totalRound(n) {
  let count = 0;

  while (n !== 1) {
    n /= 2;
    count++;
  }

  return count;
}

console.log(solution(8, 4, 7));
