function solution(n) {
  const tiles = [];

  tiles[1] = 1;
  tiles[2] = 2;

  for (let i = 3; i <= n; i++) {
    tiles[i] = (tiles[i - 1] + tiles[i - 2]) % (1e9 + 7);
  }

  return tiles[n] % (1e9 + 7);
}
