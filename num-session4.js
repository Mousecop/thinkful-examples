/*
Write a function numToWords(N)
 that takes in a number N, and returns the word equivalent for each DIGIT that makes up that number.

 e.g.
 numToWords(230) => "two three zero"
*/


function numToWords(N) {
  // One way I am thinking is to have N put in an array
  // and then have it read over each number to get the word eqiv.

  // convert the number a string
  var Ns = N.toString(); // N + ''
  var res = '';
  var map = 'zero one two three four five six seven eight nine'.split(' '); // ['zero', 'one', ..]

  for (var i = 0; i < Ns.length; i++) {
    res += map[parseInt(Ns[i])] + ' ';
  }
  return res;
}

function numWords(N) {
  var map = 'zero one two three four five six seven eight nine'.split(' ');
  return N.toString().split('')
    .map(function (digit) { return map[parseInt(digit)]})
    .join(' ');
}


// test
console.log(numToWords(3456));
// x = 30
// x += 20 // 50 (x = x + 20)

console.log(numWords(560));