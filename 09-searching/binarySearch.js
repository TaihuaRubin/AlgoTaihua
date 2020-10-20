const binarySearch = (array, targetValue) => {
  var min = 0;
  var max = array.length - 1;
  var guess;

  while (min <= max) {
    guess = Math.floor((max + min) / 2);

    if (array[guess] === targetValue) {
      return guess;
    } else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};
