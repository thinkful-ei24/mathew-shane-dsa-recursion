function counter(sheep) {
  if (sheep === 0) {
    return '';
  }

  console.log(sheep + ' - Another sheep jump over the fence');
  return counter(sheep - 1)
}

console.log(counter(3));