function solution(n, works) {
  const totalWork = works.reduce((total, work) => total + work);

  if (n >= totalWork) return 0;

  let maxWork = Math.max(...works);

  while (n > 0) {
    for (let i = 0; i < works.length; i++) {
      if (works[i] !== maxWork) continue;

      works[i]--;
      n--;

      if (n === 0) break;
    }

    maxWork--;
  }

  return works.reduce((total, work) => total + Math.pow(work, 2), 0);
}
