/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

//keeps track of where each unique number will be written it starts at 0 because thats where we write our first number 
    let indexCounter = 0; 

    //this will run until we've gone through all elements in nums 
    for (let i=0; i < nums.length; i++){

        // checking to see if our current element is different from the previous one if it is then this is a unique element
        // for nums[0] its a different case since is always unique since nums[-1] will be undefined 
        if(nums[i] != nums[i-1]){
            
            // since they are different the current element of nums will be placed on the position pointed by indexCounter
            nums[indexCounter] = nums[i]
            
            //we need to increase positon of indexCounter so the following unique element is placed in a new positon 
            indexCounter++; 
        }
    }

    //now we're returning the count all the unique elements 
    return indexCounter;
    
};

    

