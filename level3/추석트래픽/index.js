const SEC = 1000;

function solution(lines) {
  const logTimes = getLogTimes(lines);
  let maxProcessing = 0;

  for (let i = 0; i < logTimes.length; i++) {
    const [srt1, end1] = logTimes[i];
    let processing1 = 1;
    let processing2 = 1;

    for (let j = 0; j < logTimes.length; j++) {
      if (i === j) continue;
      const [srt2, end2] = logTimes[j];

      if (
        inProcessing(srt1, srt1 + SEC, srt2) ||
        inProcessing(srt1, srt1 + SEC, end2)
      ) {
        processing1++;
      }

      if (
        inProcessing(end1, end1 + SEC, srt2) ||
        inProcessing(end1, end1 + SEC, end2)
      ) {
        processing2++;
      }
    }

    maxProcessing = Math.max(maxProcessing, processing1, processing2);
  }

  return maxProcessing;
}

function getLogTimes(lines) {
  return lines.map(line => {
    const [date, time, interval] = line.split(' ');
    const end = new Date(`${date} ${time}`).getTime();
    const srt = end - Number(interval.replace('s', '')) * SEC + 1;

    return [srt, end];
  });
}

function inProcessing(min, max, compare) {
  return min <= compare && compare < max;
}

console.log(
  solution([
    '2016-09-15 20:59:57.421 0.351s',
    '2016-09-15 20:59:58.233 1.181s',
    '2016-09-15 20:59:58.299 0.8s',
    '2016-09-15 20:59:58.688 1.041s',
    '2016-09-15 20:59:59.591 1.412s',
    '2016-09-15 21:00:00.464 1.466s',
    '2016-09-15 21:00:00.741 1.581s',
    '2016-09-15 21:00:00.748 2.31s',
    '2016-09-15 21:00:00.966 0.381s',
    '2016-09-15 21:00:02.066 2.62s',
  ])
);
