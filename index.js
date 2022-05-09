//   1. "Problem:
//   You are given a string (STR) of length N, consisting of only the lower case English alphabet.
//   Your task is to remove all the duplicate occurrences of characters in the string.
  
//   Input:
//   abcadeecfb
  
//   Output:
//   abcdef"
let set = new Set();
set.add("a");
set.add("b");
set.add("c");
set.add("a");
set.add("d");
set.add("e");
set.add("e");
set.add("c");
set.add("b");
set.add("f");


console.log(set)

//Ques: 2 console.log(set.values());
// console.log(set.keys());

// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

uniqueCount = ["a","b","c","a","d","e","e","c","f","b"];
var count = {};
uniqueCount.forEach(function(x) { count[x] = (count[x]||0) + 1;});
console.log(count);