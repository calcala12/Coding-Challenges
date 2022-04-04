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
