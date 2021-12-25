// 우선순위 배열, 현재 대기목록 위치

function solution(priorities, location) {
  const waitings = priorities.map((p, i) => [p, i]);
  let printOrder = 0;

  while (true) {
    const [priority, idx] = waitings.shift();

    if (waitings.some(([p]) => p > priority)) {
      waitings.push([priority, idx]);
      continue;
    }

    printOrder++;

    if (idx === location) return printOrder;
  }
}
