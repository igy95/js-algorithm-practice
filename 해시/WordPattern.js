const wordPattern = (pattern, s) => {
  const dict = new Map();
  const words = s.split(' ');

  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!dict.has(pattern[i])) {
      dict.set(pattern[i], words[i]);
      continue;
    }

    if (dict.get(pattern[i]) !== words[i]) return false;
  }

  return new Set(dict.values()).size === dict.size;
};
