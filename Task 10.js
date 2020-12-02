function getVowels(word1,word2){
    //Then when we convert the word into smaller case letters just in case it has capital letters
        
    let firstWord = word1.toLowerCase();
    let secondWord = word2.toLowerCase();
    firstWord = word1;
        secondWord = word2;
        if(/[aeiouy]/.test(firstWord)){
         console.log("The first word contain vowels")
      } else {
         console.log("The first word have no vowels.")
      }
        if(/[aeiouy]/.test(secondWord)){
         console.log("The second word contain vowels")
      } else {
         console.log("The second word have no vowels.")
      }
    
    }
    getVowels("c","d");