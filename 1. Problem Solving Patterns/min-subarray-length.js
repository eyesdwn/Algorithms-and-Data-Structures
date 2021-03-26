function minSubArrayLen(arr, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    // If current window doesn't add up to the given sum
    // then move the window to the right
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    }
    // If current window adds up to at least the sum given
    // then we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    }
    // Current total less than required total but we reach the end
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}