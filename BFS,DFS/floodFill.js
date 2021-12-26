const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const isValid = (x, y, row, col) => Math.min(x, y) >= 0 && x < row && y < col;

const floodFill = (image, sr, sc, newColor) => {
  const row = image.length;
  const col = image[0].length;
  const visited = new Array(row).fill().map(() => new Array(col).fill(false));
  const queue = [];

  queue.push([sr, sc]);

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    visited[x][y] = true;
    image[x][y] = newColor;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        isValid(nx, ny, row, col) &&
        image[nx][ny] !== 0 &&
        !visited[nx][ny]
      ) {
        queue.push([nx, ny]);
      }
    }
  }

  return image;
};

console.log(floodFill(image, 1, 1, 2));
