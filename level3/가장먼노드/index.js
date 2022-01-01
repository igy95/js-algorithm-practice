function solution(n, vertex) {
  const graph = new Array(n).fill().map(() => []);
  const visits = new Array(n).fill(false);
  const dists = new Array(n).fill(0);
  const queue = [];

  vertex.forEach(([e1, e2]) => {
    graph[e1 - 1].push(e2 - 1);
    graph[e2 - 1].push(e1 - 1);
  });

  visits[0] = true;
  queue.push(0);

  while (queue.length > 0) {
    const edge = queue.shift();

    for (let i = 0; i < graph[edge].length; i++) {
      const adjacent = graph[edge][i];

      if (visits[adjacent]) continue;

      visits[adjacent] = true;
      dists[adjacent] = dists[edge] + 1;
      queue.push(adjacent);
    }
  }

  const max = Math.max(...dists);

  return dists.filter(dist => dist === max).length;
}

solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
