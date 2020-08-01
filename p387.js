// 387. First Unique Character in a String

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // use a set to create an array of distinct characters in the string;
    let distinctChars = [...new Set(s.split(""))];
  
    for (let i = 0; i < distinctChars.length; i++) {
      let matches = 0;
      let index = 0;
      for (let j = 0; j < s.length; j++) {
        if (s[j] === distinctChars[i]) {
          matches++;
          index = j;
        }
        if (matches > 1) {
          break;
        }
      }
      if (matches === 1) {
        // get index of unique character here
        return index;
      }
    }
    return -1;
  };