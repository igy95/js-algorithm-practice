/*
아이디어
- numbers 순회 -> 147 L 369 R -> L, R 값 저장
- 가운데 키패드가 나올 때 -> 방문배열 초기화 -> BFS 통해 거리 마크 -> L, R 좌표를 얻어 거리 비교
자료구조
3 x 3 키패드, 방문 배열
*/
const KEYPAD = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['*', 0, '#'],
];
const ROW = 4;
const COL = 3;
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const DISTANCE = new Array(ROW).fill().map(() => new Array(COL).fill(0));

function solution(numbers, hand) {
  let result = '';
  let L = '*';
  let R = '#';

  for (const n of numbers) {
    if (n === 1 || n === 4 || n === 7) {
      L = n;
      result += 'L';
      continue;
    }

    if (n === 3 || n === 6 || n === 9) {
      R = n;
      result += 'R';
      continue;
    }

    markDistance(n);

    const [lx, ly] = coordinate(L);
    const [rx, ry] = coordinate(R);
    const ld = DISTANCE[lx][ly];
    const rd = DISTANCE[rx][ry];

    if (ld < rd) {
      result += 'L';
      L = n;
      continue;
    }

    if (ld > rd) {
      result += 'R';
      R = n;
      continue;
    }

    if (hand === 'left') {
      result += 'L';
      L = n;
      continue;
    }

    result += 'R';
    R = n;
  }

  return result;
}

function markDistance(key) {
  const visited = new Array(ROW).fill().map(() => new Array(COL).fill(false));
  const q = [];

  q.push([...coordinate(key), 0]);

  while (q.length > 0) {
    const [x, y, d] = q.shift();

    visited[x][y] = true;
    DISTANCE[x][y] = d;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (isValid(nx, ny) && !visited[nx][ny]) {
        q.push([nx, ny, d + 1]);
      }
    }
  }
}

function isValid(nx, ny) {
  return Math.min(nx, ny) >= 0 && nx < ROW && ny < COL;
}

function coordinate(key) {
  for (let i = 0; i < KEYPAD.length; i++) {
    for (let j = 0; j < KEYPAD[i].length; j++) {
      if (key === KEYPAD[i][j]) return [i, j];
    }
  }
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
