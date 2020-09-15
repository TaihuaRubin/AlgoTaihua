module.exports = function palindromeCheck(str) {
  str = str.toLowerCase();
  if (str.length <= 1) {
    return true;
  } else if (str[0] === str[str.length - 1]) {
    str = str.slice(1, str.length - 1);
    return palindromeCheck(str);
  } else {
    return false;
  }
};
