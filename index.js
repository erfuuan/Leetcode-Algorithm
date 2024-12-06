//https://leetcode.com/problems/score-of-a-string/description/
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let count = 0;
    for (let i = 0; i < s.length - 1; i++) {  // Adjust loop limit
        count += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return count;
};

const result = scoreOfString('hello');
console.log(result);  // Output: 13


// https://leetcode.com/problems/concatenation-of-array
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var getConcatenation = function(nums) {
//     let newArray=nums
//     newArray=newArray.concat(newArray)
//     return newArray
// };
// const result=getConcatenation([1,2,3])
// console.log(result)

















