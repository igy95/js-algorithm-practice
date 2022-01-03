/*
- 1. tickets 정렬 (출발지, 도착지 순)
- 2. 재귀 탐색(current, travelRoute, tickets, visits)
  - tickets를 순회하여 [0] 요소가 current와 일치하는지 확인
  - [1] 요소가 tickets의 [0]과 일치하는 게 있는지 확인
*/

let answer;

function solution(tickets) {
  const visits = new Array(tickets.length).fill(false);

  tickets.sort(([srt1, arr1], [srt2, arr2]) => {
    if (srt1.charCodeAt() === srt2.charCodeAt())
      return arr1.charCodeAt() - arr2.charCodeAt();

    return srt1.charCodeAt() - srt2.charCodeAt();
  });

  checkTravelRoute('ICN', [], tickets, visits);

  return answer;
}

function checkTravelRoute(current, travelRoute, tickets, visits) {
  travelRoute.push(current);

  if (visits.every(visit => visit)) {
    if (!answer && travelRoute.length === tickets.length + 1) {
      answer = travelRoute;
    }

    return;
  }

  for (let i = 0; i < tickets.length; i++) {
    const [srt, arr] = tickets[i];

    if (visits[i] || srt !== current) continue;

    visits[i] = true;
    checkTravelRoute(arr, [...travelRoute], tickets, visits);
    visits[i] = false;
  }
}

console.log(
  solution([
    ['ICN', 'SFO'],
    ['SFO', 'ICN'],
    ['ICN', 'SFO'],
    ['SFO', 'QRE'],
  ])
);
