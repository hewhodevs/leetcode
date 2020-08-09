/**
 * 20. Valid Parentheses
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // return true for emtpy string
  if (s.length < 1) {
    return true;
  }
  // return false if the string length is an uneven number
  if (s.length % 2 !== 0) {
    return false;
  }

  let counterpart = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  // Use an array to implement the Stack data structure approach
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (['(', '{', '['].includes(char)) {
      // Only add open parentheses to our stack
      stack.push(char);
    } else {
      if (stack.length === 0) return false; // i.e. if the string starts with a closed parentheses
      let youngestOpenParen = stack.pop();
      if (char !== counterpart[youngestOpenParen]) return false;
    }
  }
  if (stack.length === 0) {
    // Made it to the end of the string with no invalid matches remaining
    return true;
  } else {
    // Made it to the end of the string but with unmatched open parentheses remaning.
    return false;
  }
};

console.log(`1. ${isValid("") === true}`);
console.log(`2. ${isValid("{{}}}") === false}`);
console.log(`3. ${isValid("[[]]") === true}`);
console.log(`4. ${isValid("()") === true}`);
console.log(`5. ${isValid("(]") === false}`);
console.log(`6. ${isValid("{[]}") === true}`);
console.log(`7. ${isValid("([)]") === false}`);
console.log(`8. ${isValid("{[()]}") === true}`);
console.log(`9. ${isValid("()[]{}") === true}`);
console.log(`10. ${isValid("(([]){})") === true}`);
console.log(`11. ${isValid("(()(") === false}`);
console.log(`12. ${isValid("[(({})}]") === false}`);
console.log(`13. ${isValid("[({(())}[()])]") === true}`);
console.log(`14. ${isValid("[([]])") === false}`);