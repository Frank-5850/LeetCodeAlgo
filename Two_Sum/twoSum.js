// 1. Two Sum
// Easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// using brute force
// var twoSum = function (nums, target) {
//   for (i = 0; i < nums.length; i++) {
//     for (j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return index;
// };

// using Map()
// var twoSum = function (nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let num1 = nums[i];
//     let num2 = target - num1;
//     if (map.has(num2)) {
//       return [i, map.get(num2)];
//     }
//     map.set(num1, i);
//     console.log(map);
//   }
// };

// using object
// var twoSum = function (nums, target) {
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     obj[nums[i]] = i;
//   }
//   for (const key in obj) {
//     if (obj.hasOwnProperty(target - parseInt(key, 10))) {
//       return [obj[key], obj[target - parseInt(key, 10)]];
//     }
//   }
// };

// using object v2
const twoSum = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (another in map) {
      return [map[another], i];
    }
    map[nums[i]] = i;
    console.log(map);
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
