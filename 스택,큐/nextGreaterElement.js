const nextGreaterElement = (nums1, nums2) => {
  const answer = [];

  nums1.forEach(num1 => {
    const idx = nums2.findIndex(num2 => num2 === num1);
    let greater = -1;

    for (let i = idx + 1; i < nums2.length; i++) {
      if (num1 < nums2[i]) {
        greater = nums2[i];
        break;
      }
    }

    answer.push(greater);
  });

  return answer;
};
