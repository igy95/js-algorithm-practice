## 여행경로

- [출처](https://programmers.co.kr/learn/courses/30/lessons/43164)

### 입력

- tickets - 항공권 2차원 배열

### 출력

- 여행경로 배열

### 아이디어

1. 항공권 배열을 1. 출발지, 2. 도착지 순으로 정렬
2. dfs를 통해 가능한 경로를 모두 만들어본 뒤, 가장 빠르게 만들어진 ticket.length + 1 길이의 경로 배열을 반환
