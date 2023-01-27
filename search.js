// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. if the value is not found return -1.

//Naive Way
//This function time complexity is O(N)
//This function represents a linear search
function search(array, n) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === n){
            return i 
        }
        
    }
    return -1
}

// console.log(search([1,2,5], 4))


//Refactored Way
//This function has a time complexity of Log(N) 
//This is function is a binary search 
//usually binary search are used on more complex sorting algorithms but this is simplistic example to understand how it works
//Binary search lets you simplify the search. instead of checking each index in the array for the value that we are trying to find, we find the middle of the array and check if the value is smaller or bigger then the middle. if it is smaller then we go on the smaller side of the middle and split that side up. We keep doing that until we find the number that we are trying to find. Or if we don't find it then we return a -1

function binarySearch(array, val) {
    //first we create a min variable and set it to the first index(which is the smallest value because the array is sorted)
    let min = 0
    //then we create a max value and set it to the last index in the array(which is the biggest value in the array because the array is sorted)
    let max = array.length - 1

    //While min is smaller or equal to max the while loop will keep going 
    while( min <= max){
        //in the while loop we create the middle value(we put it in the while loop so that when the while loop reiterates it will reset the middle value so that the next middle value can be decided)
        let middle = Math.floor((min + max) / 2)
        let currentElement = array[middle]

        //if the target value we are trying to find is bigger then the middle value then we set the min value to be the middle value + 1. this is cutting of half of the array we don't need to look through
        if(array[middle] < val){
            min = middle + 1
        //if the targeted value is smaller then then the middle value then we set the max value to be the middle -1.  this is cutting of half of the array we don't need to look through
        }else if(array[middle] > val){
            max = middle - 1
        //if we get to a single value then we do this conditional which checks if that last value is the targeted value. 
        }else{
            return middle
        }
    }
    //if the targets value isn't in the array we return -1
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10]), 5)