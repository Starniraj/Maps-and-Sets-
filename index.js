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
   
   or 
   
// var str = ["a","b","c","a","d","e","e","c","f","b"];
var str;
// console.log("enter string:");
str = prompt("enter a string:");

let a = new Set(str);
console.log(...a);

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


or   

var s="abcadeecfb";
function prCharWithFreq(s)
{
// Store all characters and
// their frequencies in dictionary
var d = new Map();

s.split('').forEach(element => {
 
    if(d.has(element))
    {
        d.set(element, d.get(element)+1);
    }
    else
        d.set(element, 1);
});

// Print characters and their
// frequencies in same order
// of their appearance

s.split('').forEach(element => {
// Print only if this
// character is not printed
// before
if(d.has(element) && d.get(element)!=0)
{
  document.write( element + d.get(element) + " ");
  d.set(element, 0);
}
});
}
prCharWithFreq(s);
