//This fuction accepts to variables and checks the values to see if the values of the numbers is 65, OR if the sum of the numbers is 65 then it will return true. Otherwise it will return false.
function checkValue(a,b) {

    
    var sum = a + b;
    //This if statement checks if a OR b OR the sum of both numbers is equal to 65 and will print true
    if(a === 65 || b === 65 || sum === 65){
      return true;
    }
    
    return false; 
  
  }
  //Here I check to see if this will printout true but will not printout true because the values are neither equal to 65 nor is the sum equal to 65
  console.log(checkValue(10,10));
  //Here it will out true as one of the values if equal to 65
  console.log(checkValue(10,65));
  //It will also printout true here as the sum of the two is equal to 65
  console.log(checkValue(10,55));
