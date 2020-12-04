function getVowels(word1,word2){
    count = 0;
    done = "";

    //Then when we convert the word into smaller case letters just in case it has capital letters
    let firstWord = word1.toLowerCase();
    let secondWord = word2.toLowerCase();

    //These store the input words 
    firstWord = word1;
    secondWord = word2;

    //This loop validates if the words have vowels or not
    //If the first word has vowels it will run through this first part of the if loop and sort out the vowels
        if(/[aeiouy]/.test(firstWord)){
            
        //This line of code filters out any letter that is not a vowel
        for (count = 0; count <= word.length ; count++){
        if(word.charAt(count) === "a" || word.charAt(count) === "e" || word.charAt(count) === "i"
        || word.charAt(count) === "o" || word.charAt(count) === "u"){
        done += word.charAt(count);
        } 
    }
        //And here the vowels are printed out
         console.log("The first word contain vowels" + done);
      } else {
         console.log("The first word have no vowels.");
      }

    //If the second word has vowels it will run through this first part of the if loop and sort out the vowels
        if(/[aeiouy]/.test(secondWord)){

            //This line of code filters out any letter that is not a vowel
        for (count = 0; count <= word.length ; count++){
        if(word.charAt(count) === "a" || word.charAt(count) === "e" || word.charAt(count) === "i"
        || word.charAt(count) === "o" || word.charAt(count) === "u"){
        done += word.charAt(count);
        } 
    }
        //And here the vowels are printed out
         console.log("The second word contain vowels" + done)
      } else {
         console.log("The second word have no vowels.")
      }

    
    }

    getVowels("love","case");
