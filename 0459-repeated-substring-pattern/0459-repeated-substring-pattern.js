/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const len = s.length;
    
    for (let i = 1; i <= Math.floor(len / 2); i++) {
        if (len % i === 0) { 
            const substring = s.substring(0, i);
            let repeatedString = '';
            
            for (let j = 0; j < len / i; j++) {
                repeatedString += substring;
            }
            
            if (repeatedString === s) {
                return true;
            }
        }
    }
    
    return false;
};

console.log(repeatedSubstringPattern("abab")); 
console.log(repeatedSubstringPattern("aba")); 
console.log(repeatedSubstringPattern("abcabcabcabc")); 
