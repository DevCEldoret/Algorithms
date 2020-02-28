/*
This task requires you to use the code segment below to implement binary search

function binarySearch(arr, left, right, value)
    if right >= left
        mid = Math.floor((left + (right-1))/2);
        
        if arr[mid] == value
        return mid

        if arr[mid] > value
            //mid greater than value, hence mid-1 is the upper bound
            return binarySearch(arr, left, mid-1, value)
        else

            //mid smaller than x, hence mid+1 lower bound
            return binarySearch(arr, mid+1, right, value)

    return -1

    Rember to test this using sorted array 
    eg arr = [1,2,3,4,5,6,7,8,9,11,12,14];
        n = arr.length;
        left = 0;
        right = n-1;
        valueToSearch = 4;
*/
