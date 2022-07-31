const maxSumArray = (nums, size) => {
    let current = 0;
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        current += nums[i];
        if (i >= size - 1) {
            maxLength = Math.max(current, maxLength);
            current -= nums[i - (size - 1)];
        }
    }
    return maxLength;
}
console.log(maxSumArray([1, 2, 3, 5, 7, 4, 5], 3))