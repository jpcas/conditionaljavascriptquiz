/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
const answer1 = 'string, number, undefined, null, boolean and symbol';
const answer2 = 'netscape';
const answer3 = 'strict operator';
const answer4 = 'True';
const answer5 = 'False';

// 2. Store the rank of a player


// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const questionOne = prompt('A symbol is a javacript data type: True or False? ');
    if (questionOne.toUpperCase === 'TRUE') {
        alert('You are correct!')
    } else alert('Wrong answer!');
const questionTwo = prompt('Which company developed netscape?');
    if (questionTwo.toUpperCase === 'NETSCAPE') {
        alert('You are correct!')
    } else alert('Wrong Answer!');
const questionThree = prompt('What is this === operator called?');
    if (questionThree.toUpperCase === 'STRICT OPERATOR') {
        alert('You are right!');
    } else alert('Wront Answer!')
const questionFour = prompt('Prompts and alerts pop up boxes? True or False');
if (questionFour.toUpperCase === 'TRUE') {
    alert('You are right!');
} else alert('WRONG!')
const questionFive = prompt('Java and Javascript are the same. True or False');
    if (questionFive.toUpperCase === 'TRUE') {
        alert('You are right!')
    } else alert('Wrong again!');




/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


// 6. Output results to the <main> element