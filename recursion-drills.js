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


// function stringSplitter(myString, seperator) {
//   if(myString.length <= 0) {
//     return '';
//   }
//   // push letters into arr until seperator, then move to next word
//   // var = [This, is, a, string];
//   let wordArr = stringSplitter(myString[0], seperator);
//   console.log(wordArr)
//   return []
// }

// stringSplitter('this is a string', ' ');

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

 console.log(factorial(5))//

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
//console.log(fibonacci(8))

function anagram(string) {
  const results = {}
  function buildCombos(combos, letters) {
    if(!letters.length) {
      return results[combos] = '';
    }
    for (var i = 0; i < letters.length; i++) {
      buildCombos(combos + letters.charAt(i), letters.slice(0, i) + letters.slice(i + 1));
    }
}
  buildCombos('', string);
  return Object.keys(results);

}
//console.log(anagram('cat'));

const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
]

function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent).forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;
}

//console.log(traverse(animalHierarchy, null));

const hierarchy = [
  {id: 'Zuckerberg', parent: null},
  {id: 'Schroepfer', parent: 'Zuckerberg'},
  {id: 'Bosworth', parent: 'Schroepfer'},
  {id: 'Zhao', parent: 'Schroepfer'},
  {id: 'Steve', parent: 'Bosworth'},
  {id: 'Kyle', parent: 'Bosworth'},
  {id: 'Andra', parent: 'Bosworth'},
  {id: 'Richie', parent: 'Zhao'},
  {id: 'Sofia', parent: 'Zhao'},
  {id: 'Jen', parent: 'Zhao'},
  {id: 'Schrage', parent: 'Zuckerberg'},
  {id: 'VanDyck', parent: 'Schrage'},
  {id: 'Swain', parent: 'Schrage'},
  {id: 'Sabrina', parent: 'VanDyck'},
  {id: 'Michelle', parent: 'VanDyck'},
  {id: 'Josh', parent: 'VanDyck'},
  {id: 'Blanch', parent: 'Swain'},
  {id: 'Tom', parent: 'Swain'},
  {id: 'Joe', parent: 'Swain'},
  {id: 'Ana', parent: 'Kelley'},
  {id: 'Wes', parent: 'Kelley'},
  {id: 'Eric', parent: 'Kelley'},
  {id: 'Kelley', parent: 'Sandberg'},
  {id: 'Vinni', parent: 'Moissinac'},
  {id: 'Chuck', parent: 'Moissinac'},
  {id: 'Amy', parent: 'Moissinac'},
  {id: 'Moissinac', parent: 'Sandberg'},
  {id: 'Morgan', parent: 'Hernandez'},
  {id: 'Inga', parent: 'Hernandez'},
  {id: 'Rowi', parent: 'Hernandez'},
  {id: 'Hernandez', parent: 'Sandberg'},
  {id: 'Goler', parent: 'Sandberg'},
  {id: 'Annie', parent: 'Goler'},
  {id: 'Julie', parent: 'Goler'},
  {id: 'Eddie', parent: 'Goler'}
];

function bossTraverse(hierarchy, parent) {
  function traverseTree(hierarchy, parent) {
    let node = {};
    hierarchy.filter(item => item.parent === parent).forEach(item => node[item.id] = traverseTree(hierarchy, item.id));
    return node;
  }
  const tree = traverseTree(hierarchy, parent);
  function showTree(tree, parent) {
    console.log(tree['Zuckerberg']);
  }
  return showTree(tree);
}

console.log(bossTraverse(hierarchy, null));