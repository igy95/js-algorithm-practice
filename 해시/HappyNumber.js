const isHappy = n => {
  const seen = {};
  let number = n;

  seen[number] = true;

  while (true) {
    const newNumber = number
      .toString()
      .split('')
      .map(digit => Number(digit))
      .reduce((total, digit) => total + digit * digit, 0);

    if (newNumber === 1) return true;
    if (seen[newNumber]) return false;

    seen[newNumber] = true;
    number = newNumber;
  }
};

console.log(isHappy(19));
