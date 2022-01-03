## 야근지수

- [출처](https://programmers.co.kr/learn/courses/30/lessons/17676)

### 입력

- lines - 로그 배열

### 출력

- 1초 최대 처리량

### 아이디어

- 1초당 처리량이 달라지는 시점은 각 로그의 시작과 끝
- lines를 로그 [시작시간, 종료시간]\[\]로 변환하여 2중 loop을 돌아 비교
