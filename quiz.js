
let correct = 0;


let rank;


const main = document.querySelector(main);


const questionOne = prompt('A symbol is a javacript data type: True or False? ');
    if (questionOne.toUpperCase() === 'TRUE') {
       correct += 1;
    } 
const questionTwo = prompt('Which company developed netscape?');
    if (questionTwo.toUpperCase() === 'NETSCAPE') {
        correct += 1;
    } 
const questionThree = prompt('What is this === operator called?');
    if (questionThree.toUpperCase() === 'STRICT OPERATOR') {
        correct += 1;
    } 
const questionFour = prompt('Prompts and alerts pop up boxes? True or False');
if (questionFour.toUpperCase() === 'TRUE') {
    correct += 1;
} 
const questionFive = prompt('Java and Javascript are the same. True or False');
    if (questionFive.toUpperCase() === 'TRUE') {
        correct += 1;
    }





if ( correct === 5) {
    rank="gold"
} else if ( correct >= 3 ) {
    rank="silver"
} else if ( correct >= 2 ) {
    rank="bronze"
} else {
    rank = "No crown for you";
}


main.innerHTML = <h2>You got ${correct} out of 5 questions correct. </h2>
<p> Medal earned: <strong>${rank}</strong></p>