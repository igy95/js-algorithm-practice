const WORD_DIFF = 1;

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const visits = new Array(begin.length).fill(false);
  const answer = findTarget(begin, target, words, visits);

  return answer === Infinity ? 0 : answer;
}

function findTarget(begin, target, words, visits) {
  if (begin === target) return 0;

  let result = Infinity;

  for (let i = 0; i < words.length; i++) {
    if (!visits[i] && isDiff(begin, words[i], WORD_DIFF)) {
      visits[i] = true;

      result = Math.min(result, findTarget(words[i], target, words, visits));

      visits[i] = false;
    }
  }

  return result + 1;
}

function isDiff(str1, str2, range) {
  let diff = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) diff++;
  }

  return diff === range;
}
