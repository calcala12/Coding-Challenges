//Multiply
function multiply(a,b){
 return a * b;
}

//Convert a String to a Number!
var stringToNumber = function(str){
  //convert to Integer via parseInt
  return parseInt(str);
}

//Square and Sum Numbers
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

//Convert a Number to a String!
function numberToString(num) {
  return num.toString();
}

//Convert boolean values to to strings Yes or No
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
   var i, j;
   str = str.toLowerCase();
   for(i = 0; i < str.length; ++i) {
     for(j = i + 1; j < str.length; ++j) {
       if(str[i] === str[j]) {
         return false;
       }
     }
   }
   return true;
}

// Return Negative Solution
function makeNegative(num) {
  return -Math.abs(num);
}

// Return a greeting string
function greet(name) {
  return "Hello, " + name + " how are you doing today?";
}

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
 let sum = 0
 for (let i = 0; i <= num; i++) {
   sum += i
 }
 return sum
}

//Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
  return number * -1
}

//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
/* Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not. */

function check(a,x){
  if (a.includes(x)){
  return true}
  else
  return false
}

/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F */

function abbrevName(name){
  const newArray = name.split(" ")
  return (newArray[0][0] + "." + newArray[1][0]).toUpperCase()
}

/* Simple, remove the spaces from the string, then return the resultant string. */

function noSpace(x){
  return x.replace(/\s/g, '');
  }

  /* Return the number (count) of vowels in the given string.
  We will consider a, e, i, o, u as vowels for this Kata (but not y).
  The input string will only consist of lower case letters and/or spaces. */

  function getCount(str) {
    var m = 0;
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  }
    
   