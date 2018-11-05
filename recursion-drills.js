function counter(sheep) {
  if (sheep === 0) {
    return '';
  }

  console.log(sheep + ' - Another sheep jump over the fence');
  return counter(sheep - 1)
}

console.log(counter(3));

function doubleArray(arr) {
  if(arr.length === 0) {
    return '';
  }
  return [arr[0] * 2, ...doubleArray(arr.slice(1))]
}

console.log(doubleArray([1,2,3]))
