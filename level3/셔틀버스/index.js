/**
 * 셔틀 - 09:00부터 총 n회 t분 간격으로 역에 도착 (최대 m명의 승객 탑승 가능)
 * 도착했을 때 도착한 순간에 대기열에 선 크루까지 태우고 출발
 * 사무실로 갈 수 있는 도착 시각 중 제일 늦은 시각 구하기
 */

/**
 * 정차시각을 9시부터 t분 간격으로 설정하여 n회 루프를 돌린다
 * 정차시각보다 작은 요소를 m개 만큼 뺸다
 * 마지막 정차시각이 되었을 때 timetable을 확인한다
 * timetable 수가 m보다 크면 마지막 요소보다 - 1 혹은 정차시각, 작으면 정차시각
 */

function solution(n, t, p, timetable) {
  const busStop = [9, 0];
  const waitings = timetable
    .map(time => time.split(':').map(Number))
    .sort(([h1, m1], [h2, m2]) => {
      if (h1 === h2) return m1 - m2;

      return h1 - h2;
    });

  for (let i = 1; i <= n; i++) {
    // 마지막 정차시각
    if (i === n) {
      if (waitings.length < p) return formatTime(...busStop);

      const [h, m] = waitings[p - 1];

      if (h * 60 + m > busStop[0] * 60 + busStop[1])
        return formatTime(...busStop);

      return formatTime(m === 0 ? h - 1 : h, m === 0 ? 59 : m - 1);
    }

    // 정차시각에 사람들을 태운다
    for (let person = 1; person <= p && timetable.length; person++) {
      const [h, m] = waitings[0];

      if (h * 60 + m > busStop[0] * 60 + busStop[1]) break;

      waitings.shift();
    }

    // 버스 시간을 올린다
    busStop[1] += t;

    if (busStop[1] >= 60) {
      busStop[0] += 1;
      busStop[1] -= 60;
    }
  }
}

function formatTime(h, m) {
  return `${h > 10 ? h : '0' + h}:${m > 10 ? m : '0' + m}`;
}

console.log(
  solution(10, 60, 45, [
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
  ])
);
