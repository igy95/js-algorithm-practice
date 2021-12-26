function solution(brown, yellow) {
  for (let i = 1; i * i <= yellow; i++) {
    if (yellow % i !== 0) continue;

    if ((yellow / i) * 2 + i * 2 + 4 === brown) return [yellow / i + 2, i + 2];
  }
}

console.log(solution(24, 24));

// 1. yellow의 약수를 구한다.
// 2. 약수1 * 2 + 약수2 * 2 + 4 = brown이면 반환
