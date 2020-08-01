// 389. Find the Difference

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sChars = s.split('');
    for(let i = 0; i < t.length; i++) {
        if(sChars.includes(t.charAt(i))) {
            // remove 1st instance of the common character from sChars
            sChars.splice(sChars.indexOf(t.charAt(i)), 1);
        } else {
            return t.charAt(i);
        }
    }
};

console.log(findTheDifference("abcd", "abcdd"));
console.log(findTheDifference("abcd", "abcde"));