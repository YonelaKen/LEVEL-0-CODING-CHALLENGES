//First we will have to prompt the end user to enter the values, that we will be using. And store the input values.
var num = prompt("Enter the first value:");
var num2 = prompt("Enter the second value:");
var num3 = prompt("Enter the third value:");

//This function compares all three numbers and finds the highest of the three using a nested if loop.
function getHighestNumber(a,b,c){
  if( a > b && a > c ){
    return "The first value is the highest of the three values being " + a;
  } else if( b > a && b > c ){
    return "The second value is the highest of the three values being " + b;
  } else{
    return "The third value is the highest of the three values being " + c;
  }

}
//This line calls the function and then prints out the highest number of the three. 
console.log(getHighestNumber(num,num2,num3));
