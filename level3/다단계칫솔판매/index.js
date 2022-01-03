/**
 *
 * @param {*} enroll - 판매원 배열
 * @param {*} referral - 추천인 배열
 * @param {*} seller - 판매량 집계 데이터의 판매원 이름
 * @param {*} amount - 판매량 집계 데이터의 판매 수량
 * @returns - 판매원이 득한 이익금을 나열한 배열(정수형으로 계산, enroll 순)
 */

const SELL_PRICE = 100;

function solution(enroll, referral, seller, amount) {
  const referBoard = enroll.reduce((board, e, i) => {
    board[e] = referral[i];

    return board;
  }, {});
  const profitBoard = enroll.reduce((board, e) => {
    board[e] = 0;

    return board;
  }, {});

  for (let i = 0; i < seller.length; i++) {
    let refer = seller[i];
    let profit = amount[i] * SELL_PRICE;

    while (refer !== '-' && profit !== 0) {
      profitBoard[refer] += Math.ceil(profit * 0.9);
      refer = referBoard[refer];
      profit = Math.floor(profit * 0.1);
    }
  }

  return Object.values(profitBoard);
}

console.log(
  solution(
    ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    ['young', 'john', 'tod', 'emily', 'mary'],
    [12, 4, 2, 5, 10]
  )
);
