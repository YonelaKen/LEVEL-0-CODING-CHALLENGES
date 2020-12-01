//This function converts hours to minutes
function hoursToMinutes(h){
    var minutes = h * 60;
    return minutes;
  }
  //This prints out the converted hours in minutes
  console.log(hoursToMinutes(133) + " minute(s)");
  
  //This funvtion converts minutes to hours
  function minutesToHours(m){
    var hours = m / 60;
  //here I round down the hours to the nearest integer. If we were to round up the number of hours would have changed
    var roundedHours = Math.floor(hours);
  //Here I calculate the remaining number of minutes 
    var minutes = (hours - roundedHours) * 60;
  //I then round off the number of minutes to the nearest integer
    var roundedMinutes = Math.round(minutes);
    //This is the converted hours which will be later printed out
    var convertedHours = roundedHours + "hour(s)" + roundedMinutes + "minute(s)";
    return convertedHours;
  }
  //This prints out the converted minutes in hours
  console.log(minutesToHours(71));