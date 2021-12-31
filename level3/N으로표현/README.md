## N으로 표현

- [출처](https://programmers.co.kr/learn/courses/30/lessons/42895)

### 입력

- N - 사용할 숫자
- number - 만들어야 하는 수

### 출력

- N과 수식을 조합했을 때 number를 만들 수 있는 최소 N 개수

### 아이디어

- DP\[MAX_N_COUNT\] - 2차원 배열
- DP의 각 인덱스를 N 사용 횟수로 보고 DP\[i\]에 수식 적용 값 누적
- 점화식
  - `DP[i].push(DP[i - 2]와 N * 10 + N의 연산값);`
  - `DP[i].push(DP[i - 1]와 N의 연산값);`
