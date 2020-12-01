




C = (68 - 32) * 5/9
//console.log(C);

//This function converts Celsius to Fahrenheits
function convertDegreesToFahrenheits(C){
 F = C * 1.8 + 32;
 return F;
}

//Here we input Celsius so they can be converted Fahrenheits by calling the convertDegreesToFahrenheits(C) function.
console.log( "20 Degree Celcuis converted to Fahrenheits is " + convertDegreesToFahrenheits(50) + " Fahrenheits");

//This function coverts Fahrenheits to Celsius
function convertFahrenheitsToDegrees(F){
C = (F - 32) * 5/9
return C
}

//Here we input Fahrenheits so they can be converteed to Degrees by calling the convertFahrenheitsToDegrees(F) funtion.
console.log( "122 Fahrenheits converted to Degrees is " + convertFahrenheitsToDegrees(122) + " Degrees Celsius");
