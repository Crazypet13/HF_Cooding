/*Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

    Sort numbers array in ascending order.
    If the function's argument is null, an empty array, or undefined; return an empty array.
    Return a new array of sorted numbers.
*/

let numbers = Array [1,2,3,52,32,8,16,4265,252];

function sorter (input_array){
    if(input_array.length()===0 || input_array.type() === NaN || input_array.type() === null){
        return let = []; 
    }else{
        console.log(input_array.sort());
    }
    
};
sajt

sorter(numbers);