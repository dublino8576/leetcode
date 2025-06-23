/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /*const result = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }*/
    //initiate an empty hash map (object) where we are going to add the key value pairs of values and their respective indexes
    const hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (complement in hashMap) {
            //checks if key matches complement as it gets stored in map object
            return [hashMap[complement], i]
        }
        hashMap[nums[i]] = i
    }
    //return empty array if solution not found
    return []
};