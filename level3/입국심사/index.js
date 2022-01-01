function solution(n, times) {
  let l = 1;
  let h = Math.max(...times) * n;
  let m;

  while (h - l > 1) {
    m = Math.ceil((l + h) / 2);

    const passengers = pass(times, m);

    if (passengers === n) {
      while (pass(times, m - 1) === n) m--;

      return m;
    }

    if (passengers > n) {
      h = m;
    } else {
      l = m;
    }
  }

  return m;
}

function pass(times, wait) {
  return times.reduce((total, time) => total + Math.floor(wait / time), 0);
}
