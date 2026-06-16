

//function to reverse a string
function reverseString(str) {
  var reversed = "";
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    reversed = char + reversed; 
  }
  return reversed;
}
console.log(reverseString("Hello World!")); 

