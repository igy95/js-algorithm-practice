// 필요한 정보: 총 재생 횟수별로 정렬된 장르 / key: 장르, value: [고유번호, 재생횟수] 배열
// 정렬된 장르를 순회하면서 -> 장르 key로 value 탐색 -> value sort 후 고유 번호 2개씩 push

function solution(genres, plays) {
  const answer = [];
  const songs = songsOfGenre(genres, plays);

  genreRanks(genres, plays).forEach(genre => {
    songs[genre].sort(([, plays1], [, plays2]) => plays2 - plays1);

    answer.push(songs[genre][0][0]);
    answer.push(songs[genre][1][0]);
  });

  return answer;
}

// 장르 정렬
function genreRanks(genres, plays) {
  return Object.entries(totalPlays(genres, plays))
    .sort(([, plays1], [, plays2]) => plays2 - plays1)
    .map(([genre]) => genre);
}

// 플레이 수 합산
function totalPlays(genres, plays) {
  return genres.reduce((totalPlays, genre, idx) => {
    totalPlays[genre] = (totalPlays[genre] ?? 0) + plays[idx];

    return totalPlays;
  }, {});
}

function songsOfGenre(genres, plays) {
  return genres.reduce((songs, genre, idx) => {
    songs[genre] = [...(songs[genre] ?? []), [idx, plays[idx]]];

    return songs;
  }, {});
}

const result = solution(
  ['classic', 'pop', 'classic', 'classic', 'pop'],
  [500, 600, 150, 800, 2500]
);

console.log(result);

// genres = 문자열 배열
// plays = 노래 별 재생 횟수
// 앨범에 들어갈 고유 번호 반환
// 우선 순위 - 1. 장르의 재생 횟수 2. 한 장르 내 재생 횟수 3. 재생 횟수가 같다면 고유 번호 낮은 순
// 두 개씩
