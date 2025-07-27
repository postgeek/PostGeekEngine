function isPowerOfTwo(numberToCheck) {
  return (numberToCheck !== 0)
  && ((numberToCheck & (numberToCheck - 1)) === 0);  
}

export { isPowerOfTwo };
