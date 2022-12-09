function isPalindrome(word) {
  // Write your algorithm here
  var pali = word.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var wordCount = 0;

    if(pali === "") {
      console.log("Nothing found!");
      return false;
    }

    if ((pali.length) % 2 === 0) {
      wordCount = (pali.length) / 2;
    } else {

      if (pali.length === 1) {
        return true;
      } else {

        wordCount = (pali.length - 1) / 2;
      }
    }

    for (var v = 0; v < wordCount; v++) {

      if (pali[v] != pali.slice(-1-v)[0]) {

        return false;
      }
    }

    return true;

}

/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

"write a string word"
  "Check the length of the string(how may letters does the word have)"
  "check if the first and last letters are equal then going to the second and second to last letters and so on"
  "Test should come out true if the letters on both sides of the word are equal"
  "Test should come out false is the letters on both sides do not coinside with each other"

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


