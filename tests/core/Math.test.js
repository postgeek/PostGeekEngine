import { isPowerOfTwo } from '../../src/core/utils/Math';

/**
  Tests for the Math class
*/
describe('isPowerOfTwo', () => {
  it('should return that the number provided is a power of two', () => {
    // Arange
    const numberToCheck = 8;

    // Act
    const result = isPowerOfTwo(numberToCheck);

    // Assert
    expect(result).toBe(true);
  });
  it('should return that the number provided is not a power of two', () => {
    // Arrange
    const numberToCheck = 3;

    // Act
    const result = isPowerOfTwo(numberToCheck);

    // Assert
    expect(result).toBe(false);
  });
  it('should return false with a provided number of 0', () => {
    // Arrange
    const numberToCheck = 0;

    // Act
    const result = isPowerOfTwo(numberToCheck);

    // Assert
    expect(result).toBe(false);
  });
  it('should return false with a negative number provided', () => {
    // Arrange
    const numberToCheck = -2;

    // Act
    const result = isPowerOfTwo(numberToCheck);

    // Assert
    expect(result).toBe(false);
  });
});
