var twoSum = function(nums, target) {
  let diff;
  let indxArr = [];
  let temp = [...nums];
  temp.sort((a, b) => a - b);
  temp.every((each, indx) => {
    diff = target - each;
    if (nums.includes(diff)) {
      indxArr.push(each);
      temp[indx] = 0;
      return false;
    }
    return true;
  });
  temp.every((each, indx) => {
    if (each === diff) {
      indxArr.push(each);
      return false;
    }
    return true;
  })
  return indxArr.map((each, indx) => {
    let numIndx = nums.indexOf(each);
    nums[numIndx] = 0;
    return numIndx;
  })
};

console.log(twoSum([3, 2, 4], 6));