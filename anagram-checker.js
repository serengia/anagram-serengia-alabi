module.exports = function (strOne, strTwo) {
  // strip off no-alphanumeric
  // If length of str1 !== length of str2 return false
  // loop through str1 and check if it's chars are in str2
  // if char in str1 is not in str2 return false
  // return true

  const str1 = strOne.toLowerCase().replace(/[^0-9a-z]/gi, "");
  const str2 = strTwo.toLowerCase().replace(/[^0-9a-z]/gi, "");

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) {
      return false;
    }
  }

  return true;
};
