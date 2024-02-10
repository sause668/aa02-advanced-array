/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {

    let strArr = string.split("");
    let vowels = "aeiou".split("");
    let count = 0;
    let vowelsFound = false;

    strArr.forEach(letter => {
        let vowelIndex = vowels.indexOf(letter.toLowerCase())
        if (vowelIndex > -1) {
            count++;
            vowels.splice(vowelIndex, 1);
            if (count >= 3) {
                vowelsFound = true;
            }
        }
    })
    return vowelsFound;
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
