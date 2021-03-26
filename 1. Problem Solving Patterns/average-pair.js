function averagePair(arr, avg) {
  if (arr.length === 0) {
    return false;
  }
  let min = 0;
  let max = arr.length - 1;
  while (min < max) {
    let tempAvg = (arr[min] + arr[max]) / 2;
    if (tempAvg > avg) {
      max--;
    } else if (tempAvg < avg) {
      min++;
    } else if (tempAvg === avg) {
      return true;
    }
  }
  return false;
}