function solution(citations) {
  let hIndex = citations.length;

  while (hIndex > 0) {
    const count = citations.filter(citation => citation >= hIndex).length;

    if (count >= hIndex) return hIndex;

    hIndex--;
  }

  return 0;
}

console.log(solution([3, 0, 6, 1, 5], 3));
