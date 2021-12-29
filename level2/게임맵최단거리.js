const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;
  const visits = board(row, col, false);
  const routes = board(row, col, Infinity);
  const queue = [[0, 0, 1]];

  while (queue.length > 0) {
    const [x, y, d] = queue.shift();

    routes[x][y] = Math.min(routes[x][y], d);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (isValid(nx, ny, row, col) && !visits[nx][ny] && maps[nx][ny] === 1) {
        //중복을 줄이기 위해 방문체크는 큐에 넣을 때
        visits[nx][ny] = true;
        queue.push([nx, ny, d + 1]);
      }
    }
  }

  return routes[row - 1][col - 1] === Infinity ? -1 : routes[row - 1][col - 1];
}

function board(row, col, elem) {
  return new Array(row).fill().map(() => new Array(col).fill(elem));
}

function isValid(x, y, row, col) {
  return Math.min(x, y) >= 0 && x < row && y < col;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
