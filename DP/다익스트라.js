// TODO: 다익스트라 알고리즘 우선순위 큐로 구현해보기

function solution(N, road, K) {
  /**
   * 정점과 간선을 기록할 그래프를 만든다.
   * 그래프에 지도 정보를 입력한다.
   * 다익스트라 알고리즘을 통해 최단거리 배열을 반환하여 제한시간 이하의 요소 수 반환.
   */
  const graph = new Array(N).fill().map(() => new Array(N).fill(Infinity));

  for (let i = 0; i < N; i++) {
    graph[i][i] = 0;
  }

  road.forEach(([v1, v2, e], i) => {
    graph[v1 - 1][v2 - 1] = Math.min(graph[v1 - 1][v2 - 1], e);
    graph[v2 - 1][v1 - 1] = Math.min(graph[v2 - 1][v1 - 1], e);
  });

  return dijkstra(0, graph).filter(e => e <= K).length;
}

function dijkstra(start, graph) {
  /**
   * 거리배열을 그래프의 시작정점 배열로 초기화
   * 방문배열에 시작정점 방문 처리
   * 거리배열의 요소 중 방문 X && 가장 작은 요소 선택
   * 가장 작은 노드 방문 처리
   * 가장 작은 노드 배열을 순회하여 방문 X 요소 거리 + 거리배열의 가장 작은 요소 구하기
   * 위의 값과 거리배열의 요소를 비교하여 작으면 갱신
   */
  const visited = new Array(graph.length).fill(false);
  const distance = [...graph[start]];

  visited[start] = true;

  for (let i = 0; i < graph.length - 1; i++) {
    let current = Infinity;

    for (let j = 0; j < distance.length; j++) {
      if (visited[j]) continue;

      current = Math.min(current, distance[j]);
    }

    visited[current] = true;

    for (let k = 0; k < graph[current].length; k++) {
      if (visited[k]) continue;

      const temp = graph[current][k] + distance[current];

      distance[k] = Math.min(temp, distance[k]);
    }
  }

  return distance;
}

solution(
  6,
  [
    [1, 2, 1],
    [1, 3, 2],
    [2, 3, 2],
    [3, 4, 3],
    [3, 5, 2],
    [3, 5, 3],
    [5, 6, 1],
  ],
  4
);
