// Given an interger, return an interger in reverse


// create a function called reverseInt that take in a number
function reverseInt(n) {
  // create a variable called reverse, takes the number to string , split to substrings in an array, reverse, join to turn back into a string
  const reversed = n.toString().split('').reverse().join('');
  // return string to a number then if number is less than 0, return reversed as a negitive number 
  if (n < 0) {
    return parseInt(reversed) * -1;
  }

  //change string back into interger
  return parseInt(reversed);

}


// using Math.sign(), method returns +/- number
function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}