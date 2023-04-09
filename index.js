function isPalindrome(word) {
  // Write your algorithm here
}
function isPalindrome(str) {
  // Convert the string to lowercase and remove non-letter characters
  str = str.toLowerCase().replace(/[^a-z]/g, '');

  // Compare the string to its reverse and return true if they're equal
  return str === str.split('').reverse().join('');
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
