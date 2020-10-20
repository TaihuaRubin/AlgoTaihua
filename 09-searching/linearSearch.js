function linearSearch(array, val) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) return i;
  }
  return -1;
}
