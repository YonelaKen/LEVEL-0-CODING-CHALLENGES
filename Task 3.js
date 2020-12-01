//This fuction accepts to variables and checks the values to see if the values of the numbers is 65, OR if the sum of the numbers is 65 then it will return true. Otherwise it will return false.
function checkValue(a,b) {

    //This the declation of the sum variable as the sum variable is not global and also so we can get to check if the sum is equal to 65
    var sum = a + b;
    //This if statement checks if a OR b OR the sum of both numbers is equal to 65 and will print true
    if(a === 65 || b === 65 || sum === 65){
      return true;
    }
    //If the a OR b OR the sum of both numbers is not equal to 65 and will print out false
    return false; 
  
  }
  console.log(checkValue(10,10))
  