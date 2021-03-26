function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; i++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}