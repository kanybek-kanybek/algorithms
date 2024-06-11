/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let charCount = new Array(26).fill(0);
    
    for (let char of s) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    for (let char of t) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        if (charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
            return char;
        }
    }
};

console.log(findTheDifference("abcd", "abcde")); 
console.log(findTheDifference("", "y")); 