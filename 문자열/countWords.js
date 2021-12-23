const countWords = (words1, words2) => {
  const dict1 = new Map();
  const dict2 = new Map();
  let result = 0;

  words1.forEach(word => {
    dict1.set(word, (dict1.get(word) || 0) + 1);
  });

  words2.forEach(word => {
    dict2.set(word, (dict2.get(word) || 0) + 1);
  });

  words1.forEach(word => {
    if (dict1.get(word) === 1 && dict2.get(word) === 1) result++;
  });

  return result;
};

countWords(
  ['leetcode', 'is', 'amazing', 'as', 'is'],
  ['amazing', 'leetcode', 'is']
);
