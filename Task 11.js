count = 0;
i = 0;
word = "house";
word2 = "computers";
sameLetters = "";
if(word.length >= word2.length){
for (count =0; count < word.length; count++){
  for(i = 0; i < word.length; i++){
if (word.charAt(i) === word2.charAt(count)){
      sameLetters += word.charAt(i) + " ";
    }
  }
    
}

console.log(sameLetters);

} else{
  for (count =0; count < word2.length; count++){
  for(i = 0; i < word.length; i++){
if (word.charAt(i) === word2.charAt(count)){
      sameLetters += word.charAt(i) + " ";
    }
  }
    
}

console.log(sameLetters);
}

