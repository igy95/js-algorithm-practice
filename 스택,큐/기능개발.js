// progresses - 먼저 배포되어야 하는 순서, speeds - 각 작업의 개발 속도
// 각 배포마다 몇개의 기능이 배포되는지
// [7, 3, 9], [5, 10, 1, 1, 20, 1]
// 남은 기간 배열 구하기

function solution(progresses, speeds) {
  const answer = [];
  const remainingDays = progresses.map((progress, idx) => {
    return Math.ceil((100 - progress) / speeds[idx]);
  });
  let maxDay = remainingDays[0];
  let features = 1;

  for (let i = 1; i < remainingDays.length; i++) {
    if (remainingDays[i] > maxDay) {
      maxDay = remainingDays[i];
      answer.push(features);
      features = 1;
    } else {
      features++;
    }
  }

  if (features > 0) answer.push(features);

  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
