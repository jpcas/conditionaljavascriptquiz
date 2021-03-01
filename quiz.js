/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct = 0;

// 2. Store the rank of a player

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




/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

let fiveScore = gold 
let threeFour = Bronze
let oneTwo = Bronze
let zero = noCrown 


// 6. Output results to the <main> element