function solution(array, commands) {
  const answer = [];

  commands.forEach(([start, end, location]) => {
    answer.push(array.slice(start - 1, end).sort()[location - 1]);
  });

  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);

// commands.forEach
// start, end, location
// start - end까지 split -> 정렬 -> location - 1 번째 찾기
