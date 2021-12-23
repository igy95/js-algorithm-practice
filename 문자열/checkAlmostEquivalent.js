const checkAlmostEquivalent = (word1, word2) => {
  const dict1 = new Map();
  const dict2 = new Map();
  let result = true;

  [...word1].forEach(word => dict1.set(word, (dict1.get(word) || 0) + 1));
  [...word2].forEach(word => dict2.set(word, (dict2.get(word) || 0) + 1));

  new Set([...word1, ...word2]).forEach(word => {
    if (Math.abs((dict1.get(word) || 0) - (dict2.get(word) || 0)) > 3) {
      result = false;
    }
  });

  return result;
};
