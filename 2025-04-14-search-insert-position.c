int searchInsert(int* nums, int numsSize, int target) 
{
    if(target < nums[0]) return 0; //checks if target must take 1st position
    if(target > nums[numsSize - 1]) return numsSize; //checks if target must take last position

    for(int i = 1; i < numsSize - 1; i++) {
        if(nums[i] == target) return i;   

        if(target > nums[i - 1] && target < nums[i + 1]) 
            return i;   
    }

    return 0;
}
