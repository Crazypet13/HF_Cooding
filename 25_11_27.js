/*Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

    Sort numbers array in ascending order.
    If the function's argument is null, an empty array, or undefined; return an empty array.
    Return a new array of sorted numbers.
*/

let numbers = [1,2,3,52,32,8,16,4265,252,-52,-1];

function sorter (input_array){
    if(input_array.length ===0 || input_array.typeof === NaN || input_array.typeof === null){
        return let = []; 
    }else{
        return input_array.sort((a, b) => a - b);
    }
    
};

sorter(numbers);