/*
This task requires you to use the pseudocode below to implement selection sort
PSEUDOCODE
procedure selection sort 
   arr  : array of items
   n     : size of arr
   temp  : temporary var to be used for swaping

   for i = 0 to n 
        //set current element as minimum
        min = i    
        
        //check the element to be minimum 

        for j = i+1 to n 
            if arr[min] > arr[j] then
                min = j;

                //swap the minimum element with the current element

                temp = arr[i]
                arr[i] = arr[min]
                arr[min] = temp

            end if
        end for
    end for
 
end procedure

You can test your solution using  [64, 25, 12, 22, 11]
*/