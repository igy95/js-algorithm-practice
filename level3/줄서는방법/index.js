let count = 0;

function solution(n, k) {
  const visits = new Array(n).fill(false);

  return lineUp([], n, visits, k);
}

function lineUp(line, n, visits, target) {
  if (count === target) return;

  if (line.length === n) {
    count++;

    return count === target ? line : null;
  }

  for (let i = 1; i <= n; i++) {
    if (visits[i - 1]) continue;

    visits[i - 1] = true;

    const temp = lineUp([...line, i], n, visits, target);

    if (temp) return temp;

    visits[i - 1] = false;
  }
}

solution(20, 5);
