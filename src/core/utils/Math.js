function isPowerOfTwo(numberToCheck) {
  return (numberToCheck !== 0)
  && ((numberToCheck & (numberToCheck - 1)) === 0); // eslint-disable-line no-bitwise
}

export { isPowerOfTwo }; // eslint-disable-line import/prefer-default-export
