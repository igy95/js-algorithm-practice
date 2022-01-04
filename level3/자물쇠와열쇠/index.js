/**
 * key 배열
 * lock 배열을 0, 0부터 순회한다
 * lock 배열의 특정 좌표에서 KEY_LEN x KEY_LEN 루프를 돌아 0 개수와 일치하지 않으면 얼리 리턴
 * lock 배열 시작 좌표와 key 배열 0,0부터 시작해 비교를 시작한다
 * lock 배열이 1, key배열이 1이면 false / lock 배열이 0, key 배열이 0이면 false
 * lock 배열의 0과 key 배열의 1이 같은 좌표인지 확인한다 -> 카운트 누적
 * 카운트가 0 개수와 일치하면 리턴
 * 비교가 끝날 때마다 key 배열을 회전한다
 */

let LOCK_LEN, KEY_LEN;

function solution(key, lock) {
  LOCK_LEN = lock.length;
  KEY_LEN = key.length;

  const zeroCount = lock.reduce((count, row) => {
    return (count += row.filter(n => n === 0).length);
  }, 0);

  for (let r = -2; r < LOCK_LEN; r++) {
    for (let c = -2; c < LOCK_LEN; c++) {
      if (!isSameZeroCount(r, c, lock, zeroCount)) continue;

      for (let i = 0; i < 4; i++) {
        if (compare(r, c, lock, key, zeroCount)) return true;
        rotate(key);
      }
    }
  }

  return false;
}

function isSameZeroCount(r, c, lock, zeroCount) {
  let count = 0;

  for (let i = r; i < r + KEY_LEN; i++) {
    for (let j = c; j < c + KEY_LEN; j++) {
      if (!isValid(i, j) || lock[i][j] === 1) continue;

      count++;
    }
  }

  return count === zeroCount;
}

function isValid(r, c) {
  return Math.min(r, c) >= 0 && Math.max(r, c) < LOCK_LEN;
}

function rotate(arr) {
  const copy = new Array(arr.length).fill().map((_, i) => [...arr[i]]);

  for (let r = 0; r < KEY_LEN; r++) {
    for (let c = 0; c < KEY_LEN; c++) {
      arr[c][KEY_LEN - r - 1] = copy[r][c];
    }
  }
}

function compare(r, c, lock, key, zeroCount) {
  let count = 0;

  for (let i = 0; i < KEY_LEN; i++) {
    for (let j = 0; j < KEY_LEN; j++) {
      const lockR = i + r;
      const lockC = j + c;
      if (!isValid(lockR, lockC) || lock[lockR][lockC] === 1) continue;
      if (lock[lockR][lockC] === key[i][j]) return false;
      if (lock[lockR][lockC] === 0 && key[i][j] === 1) count++;
    }
  }

  return count === zeroCount;
}

console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
);
