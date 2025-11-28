/*Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

    Sort numbers array in ascending order.
    If the function's argument is null, an empty array, or undefined; return an empty array.
    Return a new array of sorted numbers.
---------------------------------------------------------------------------------------------------

let numbers = [1,2,3,52,32,8,16,4265,252,-52,-1];

function sorter (input_array){
    if(input_array.length ===0 || input_array.typeof === NaN || input_array.typeof === null){
        return let = []; 
    }else{
        return input_array.sort((a, b) => a - b);
    }
    
};

sorter(numbers);

Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// for loop with if else(or elvis what is less line) in it so you check for all the type of the arrays objects if its not number ,and dont add it in a returning value
// using array filter give it so only return is its a number and || bigger then 0 *** 
let box = [1, 2, "aasf", "1", "123", 123];

only_positive = (input_arrey) => input_arrey.filter(value => typeof value === "number");


gpt say so :/ dont working to well it didnt xD now it do

const getNumbers = (input_arrey) => input_arrey.filter(item => typeof item === "number" && !isNaN(item));

 const getNumbers = arr =>
arr.filter(item => typeof item === "number" && !isNaN(item));

console.log(only_positive(box));

*/