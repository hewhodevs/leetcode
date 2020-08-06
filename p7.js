// 7. Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = x.toString();
    let reverseStr = "";
    for(let i = str.length -1; i > -1; i--) {
      reverseStr += str.charAt(i);
    }

    if (reverseStr.charAt(0) === '0') {
      // remove 0 from first char if reverse if positive
      reverseStr = reverseStr.substring(1);
    }
    // if reverseStr last char is - sign, bring it to the front of the string
    if (reverseStr.charAt(reverseStr.length-1) === '-') {
      reverseStr = "-" + reverseStr.substring(0, reverseStr.length - 1);
    }
    let reversedInt = parseFloat(reverseStr);
    if (reversedInt > Math.pow(-2,31) && reversedInt < (Math.pow(2,31) -1) ) {
      return reversedInt
    }
    return 0;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(0);