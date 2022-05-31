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

  //Create a function called greeting that returns 'hello world!'

  function greeting(){
    return ('hello world!');
  }
  
/*   Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
 */

function doubleChar(str) {
  return str.replace(/./g, '$&$&');
}

//Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

//Examples (input -> output)
//'! !'                 -> '! !'
//'123456789'           -> ''
//'This looks5 grea8t!' -> 'This looks great!'

//Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s){
  const noNumbers = s.replace(/[0-9]/g,'')
  return noNumbers
}

// 7Kyu - Testing 1-2-3 Solutions:

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number = function(array){
  return array.map(function(line,index){
    return(index + 1) + ":" + line;
  });
}

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  return arr.filter((_, idx) => idx % 2 === 0);
}

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if( number % 2 === 0 ){
    return 'Even';
  } else {
    return 'Odd';
  }
}

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
 findSmallestInt(args) {
    const min = Math.min(...args);
    return min;
  }
}