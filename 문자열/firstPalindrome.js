const firstPalindrome = words => {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let isPalindrome = true;

    for (let j = 0; j < word.length / 2; j++) {
      if (word[j] !== word[word.length - j - 1]) {
        isPalindrome = false;
      }
    }

    if (isPalindrome) return word;
  }

  return '';
};

firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']); // 'ada'
