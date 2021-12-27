/*
1. begin -> target 변환하는 가장 짧은 변환 과정 반환
2. 한 번에 한 개의 알파벳 + words에 있는 단어로만 변환
- 아이디어
1. words 안에 target이 없으면 0 얼리 리턴
2. dfs 사용
    - dfs(begin, target, words);
    - for문 루프 -> 방문처리, 현재 단어와 하나만 차이가 나는지 확인 -> 재귀로 target 탐색
    - 재귀 탈출 시 최소값 비교로 리턴값 받기
- 자료구조
    - answer - 경우의 수
    
*/

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  const visited = new Array(begin.length).fill(false);
  const answer = findTarget(begin, target) - 1;

  function findTarget(begin, target) {
    if (begin === target) return 1;

    let result = Infinity;

    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && isDiff(words[i], begin)) {
        visited[i] = true;
        let temp = findTarget(words[i], target, words);
        result = Math.min(result, temp === Infinity ? temp : temp + 1);
        visited[i] = false;
      }
    }

    return result;
  }

  return answer === Infinity ? 0 : answer;
}

function isDiff(str1, str2) {
  let diff = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) diff++;
  }

  return diff === 1;
}
