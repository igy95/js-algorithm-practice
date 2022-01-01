function solution(n, computers) {
  const visits = new Array(n).fill(false);
  let network = 0;

  for (let i = 0; i < n; i++) {
    if (visits[i]) continue;

    network++;
    checkNetwork(i, computers, visits);
  }

  return network;
}

function checkNetwork(computer, computers, visits) {
  visits[computer] = true;

  for (let i = 0; i < computers[computer].length; i++) {
    if (i === computer || visits[i] || computers[computer][i] === 0) continue;

    checkNetwork(i, computers, visits);
  }
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
