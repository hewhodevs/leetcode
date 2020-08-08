// p13 Roman to Int
// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romvals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let romchar = s.charAt(i);
    let romval = romvals[romchar];
    let substr = romchar + s.charAt(i + 1);
    if (["IV", "IX", "XL", "XC", "CD", "CM"].includes(substr)) {
      total -= romval;
    } else {
      total += romval;
    }
  }

  return total;
};

console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("III")); // 3
console.log(romanToInt("IX")); // 9
console.log(romanToInt("IV")); // 4
console.log(romanToInt("MMMCMXCIX")); // 3999
