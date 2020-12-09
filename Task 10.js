function getVowels(word1,word2){
    count = 0;
    done = "";

    let firstWord = word1.toLowerCase();
    let secondWord = word2.toLowerCase();

    //These store the input words 
    firstWord = word1;
    secondWord = word2;

        if(/[aeiouy]/.test(firstWord)){

        for (count = 0; count <= word.length ; count++){
        if(word.charAt(count) === "a" || word.charAt(count) === "e" || word.charAt(count) === "i"
        || word.charAt(count) === "o" || word.charAt(count) === "u"){
        done += word.charAt(count);
        } 
    }
       
         console.log("The first word contain vowels" + done);
      } else {
         console.log("The first word have no vowels.");
      }

    
        if(/[aeiouy]/.test(secondWord)){

        for (count = 0; count <= word.length ; count++){
        if(word.charAt(count) === "a" || word.charAt(count) === "e" || word.charAt(count) === "i"
        || word.charAt(count) === "o" || word.charAt(count) === "u"){
        done += word.charAt(count);
        } 
    }
        
         console.log("The second word contain vowels" + done)
      } else {
         console.log("The second word have no vowels.")
      }

    
    }

    getVowels("love","case");
