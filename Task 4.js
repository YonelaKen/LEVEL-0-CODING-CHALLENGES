//This fuction accepts to variables and checks the values to see if the values of the numbers is 3, OR if the sum of the numbers is 3 then it will return true. Otherwise it will return false.
function checkValue(a,b) {

    //This the declation of the sum variable as the sum variable is not global and also so we can get to check if the sum is equal to 3
    var sum = a + b;
    //This if statement checks if a OR b OR the sum of both numbers is equal to 65 and will print true
    if(a === 3 || b === 3 || sum === 3){
      return true;
    }
    //If the a OR b OR the sum of both numbers is not equal to 3 and will print out false
    return false; 
  
  }
    //Here I check to see if this will printout true but will not printout true because the values are neither equal to 3 nor is the sum equal to 3 and will instead printout false
    console.log(checkValue(10,10))
    //Here it will printout true as one of the values if equal to 3
    console.log(checkValue(10,3));
    //It will also printout true here as the sum of the two is equal to 3
    console.log(checkValue(1,2));