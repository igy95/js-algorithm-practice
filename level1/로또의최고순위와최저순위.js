/*
알아볼 수 없음 - 0
최고: 당첨번호와 최대 일치
최저: 당첨번호와 최대 불일치

- 아이디어
1. 0이 아닌 숫자 중 win_nums에 속한 숫자 개수 구하기
2. 최고 순위 - win_nums 속한 숫자 + 0 개수
3. 최저 순위 - win_nums 속한 숫자
*/

function solution(lottos, win_nums) {
  const matchNumber = lottos.reduce((matchNumber, lottoNumber) => {
    return win_nums.includes(lottoNumber) ? matchNumber + 1 : matchNumber;
  }, 0);
  const zeroCount = lottos.reduce(
    (count, lottoNumber) => (lottoNumber === 0 ? count + 1 : count),
    0
  );

  return [getRank(matchNumber + zeroCount), getRank(matchNumber)];
}

function getRank(matchNumber) {
  return matchNumber < 2 ? 6 : 7 - matchNumber;
}
