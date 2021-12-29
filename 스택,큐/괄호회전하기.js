function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const newS = rotate(s, i);

    if (isCorrectParenthesis(newS)) answer++;
  }

  return answer;
}

function rotate(str, n) {
  const arr = str.split('');

  for (let i = 0; i < n; i++) {
    arr.push(arr.shift());
  }

  return arr.join('');
}

function isCorrectParenthesis(str) {
  const hash = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      stack.push(str[i]);
      continue;
    }

    const p = stack[stack.length - 1];

    if (hash[p] !== str[i]) return false;

    stack.pop();
  }

  return stack.length === 0;
}
