function isPalindrome(word) {
  // Write your algorithm here
  for(let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if(word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  1. Check length of input string
  2. Iterate through half of the string
  3.  If the letter we're  iterating = last letter at the end of string
  4. If we reach the middle all the letters match
      return true
  5. Else if letters dont match 
      return false   
*/

/*
  Add written explanation of your solution here
  1. nstead of using `reverse` function i used a for loop to compare the characters in the word directly 
  2. the loop iterates over the first half of the characters in the word
  3. if the loop encounters a pair of characters that are not equal, it means that the word is not a palindrome and the functiom
        returns `false`
  4.Else if all pairs of characters are equal, the fuction 
        returns `true`     
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
