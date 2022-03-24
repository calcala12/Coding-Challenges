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
