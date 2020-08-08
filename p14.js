// 14. Longest Common Prefix
// Write a function to find the longest common prefix
// string amongst an array of strings.
// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // return "" if we are provided an empty array
  if (strs.length < 1) {
    return "";
  }
  // if we are not provided more than one string, return "";
  if (strs.length < 2) {
    return strs[0];
  }
  // find the shortest string, longest prefix cant be longer than the shortest string
  // assume the first string is the shortest
  let indexOfShortestStr = 0;
  let shortestLength = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    // if any of the arrays contents are not a string, return ""
    if (typeof strs[i] !== "string") {
      return "";
    }
    // check for a shorter string in the array provided
    let strLengh = strs[i].length;
    if (strLengh < shortestLength) {
      shortestLength = strLengh;
      indexOfShortestStr = i;
    }
  }
  // get the smallest string
  let smallestString = strs[indexOfShortestStr];
  // if the smallest string is an empty string, return ""
  if (smallestString.length === 0) {
    return "";
  }

  // assume there is no longest prefix to begin with
  let longestPrefix = "";

  for (let i = 0; i < smallestString.length; i++) {
    // check if the other strings contain the character of the smallest string
    let char = smallestString.charAt(i);
    for (let j = 0; j < strs.length; j++) {
      const char2 = strs[j].charAt(i);
      if (char2 !== char) {
        // return as soon as we find a mismatch
        return longestPrefix;
      }
    }
    // else append the character to the longest prefix should all strings have it at that same index
    longestPrefix = longestPrefix + char;
  }
  // return here if all strings are identical
  return longestPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix([""])); // ""
console.log(longestCommonPrefix([0, 1, 2])); // ""
console.log(longestCommonPrefix(["a"])); // "a"
console.log(longestCommonPrefix([])); // ""
console.log(longestCommonPrefix(["", ""])); // ""
console.log(longestCommonPrefix(["c", "c"]));
