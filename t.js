function getSecondLargest(nums) {
    // Complete the function
    const descending = nums.sort((x, y) => y - x);
    
    const largest = descending[0];
    const secondLargest = descending.find(num => num < largest);
    
    return secondLargest;
}

console.log(getSecondLargest([2, 3, 4, 6, 6, 5]));