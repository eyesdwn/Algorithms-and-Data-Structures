function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let occurrence = {};
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    occurrence[char] = occurrence[char] ? (occurrence[char] += 1) : 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!occurrence[char]) {
      return false;
    } else {
      occurrence[char] -= 1;
    }
  }
  return true;
}