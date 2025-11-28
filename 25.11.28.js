//Given a word, write a function that returns the first index and the last index of a character. fraised it wierdly but you put a word in and a latter and it gives you where are they 

const charIndex = (text,your_latter) => {
    if(text.includes(your_latter) === false){
        console.log("We dont have any letters you looking for in the word you provided.");
    }else{
        const first = text.indexOf(your_latter);
        const last = text.lastIndexOf(your_latter);
        return {first,last};
    }
};


console.log(charIndex("circumlocution", "c"));

