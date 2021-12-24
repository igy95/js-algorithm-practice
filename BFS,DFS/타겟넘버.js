function solution(numbers, target) {
  let answer = 0;

  function findTarget(acc, idx) {
    if (idx === numbers.length) {
      if (acc === target) answer++;

      return;
    }

    findTarget(acc + numbers[idx], idx + 1);
    findTarget(acc - numbers[idx], idx + 1);
  }

  findTarget(0, 0);

  return answer;
}

solution([1, 1, 1, 1, 1], 3); //5
