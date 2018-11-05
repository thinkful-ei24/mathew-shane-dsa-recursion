'use strict';

// function counter(sheep) {
//   if (sheep === 0) {
//     return '';
//   }

//   console.log(sheep + ' - Another sheep jump over the fence');
//   return counter(sheep - 1)
// }

// // console.log(counter(3));

// function doubleArray(arr) {
//   if(arr.length === 0) {
//     return '';
//   }
//   return [arr[0] * 2, ...doubleArray(arr.slice(1))]
// }

// console.log(doubleArray([1,2,3]))

function reverseString(myStr) {
  if (myStr.length === 0) {
    return '';
  }

  return myStr[myStr.length-1] + reverseString(myStr.slice(0, myStr.length-1));
}

// console.log(reverseString('This is a string'))

function nthTriangularNumber(number) {
  if (number === 0) {
    return 0;
  }

  return number + nthTriangularNumber(number - 1);
}

// console.log(nthTriangularNumber(5));

// function stringSplitter(myString, seperator) {
//   console.log(myString)
//   if(myString.endsWith(seperator)){
//     return '';
//   }
//   console.log(myString);
//   return [myString[0], ...stringSplitter(myString.slice(1), seperator)].join('');
// }

// console.log(stringSplitter('This is a string', ' '));

function binaryRep(input) {
  if(input <= 0) {
    return '0'
  }
  return binaryRep(Math.floor(input/2)) + Math.floor(input%2);
}

//  console.log(binaryRep(10));


function factorial(input) {
  if(input <= 0) {
    return 1;
  }
  return input * factorial(input - 1);
}

// console.log(factorial(5))

// function fibonacci(input, array = []) {
//   if (input <= 2) { 
//     return 1;
//   }
//   const fibNumber = fibonacci(input - 1) + fibonacci(input - 2);
//   // console.log(fibonacci(input - 1))
  
//   return fibNumber, [...array, fibonacci(input - 1)];
// }
function fibonacci(input, array = []) {
  if (input <= 0) {
    throw new Error('Not valid');
  }

  if (input === 1 ) {
    return [1, []];
  } else {
    const [current, sequence] = fibonacci(input-1);
    return [current + sequence[sequence.length - 1 ] || 1, [...sequence, current]] 
  }
}

//1 1 2 3 5 8 13 21 34
console.log(fibonacci(8))

function anagram() {

}