/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    // start with the assumption that the first string is the smallest
    const arr = [...A];
    let smallestString = arr[0];
    let index = 0;
    // find the smallest string
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        if (str.length < smallestString.length) {
            // set new smallest string
            smallestString = str;
            index = i;
        }
    }
    // remove smallest string from array of strings to check against
    arr.splice(index, 1);
    // create an array of distinct chars of the smallest string to check for
    let smallestStringDistinctChars = [...(new Set(smallestString))];
    // find the common chars
    let common = [];
    // get first character to check for from the smallest string distinct chard
    for (let i = 0; i < smallestStringDistinctChars.length; i++) {
        const charToCheck = smallestStringDistinctChars[i];
        let isCommonChar = true;
        for (let j = 0; j < arr.length; j++) {
            const stringToCheck = arr[j];
            if (stringToCheck.includes(charToCheck) === false) {
                isCommonChar = false;
                break;
            }
        }
        // only check all arrays for the character frequency if we first know its common to them all
        if (isCommonChar) {
            let lowestFrequency = 0;
            // get the char count in the smallest string to compare against
            for (let i = 0; i < smallestString.length; i++) {
                const char = smallestString[i];
                if (char === charToCheck) {
                    lowestFrequency++;
                }
            }
            // check if the character occurs less in subsequent strings
            for (let i = 0; i < arr.length; i++) {
                let charCount = 0;
                const stringToCheck = arr[i];
                for (let j = 0; j < stringToCheck.length; j++) {
                    const element = stringToCheck[j];
                    if (element === charToCheck) {
                        charCount++;
                    }
                }
                if (charCount < lowestFrequency) {
                    // record the new loswest frequency in one of the strings for this char
                    lowestFrequency = charCount;
                }
            }
            // push the character into the common array by the lowest frequency amount it occurs in all strings
            for (let i = 0; i < lowestFrequency; i++) {
                common.push(charToCheck);
            }
        }
    }
    return common.sort();
};

console.log(commonChars(["bella", "label", "roller"])); // should return ["e","l","l"]
console.log(commonChars(["cool", "lock", "cook"])); // should return ["c","o"]