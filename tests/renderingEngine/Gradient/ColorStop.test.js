import InvalidArguementError from '../../../src/core/errorHandling/errors/IndexSizeError';
import ColorStop from '../../../src/renderingEngine/colors/gradient/ColorStop';

describe('ColorStop', () => {
  it('should throw an error when a value under 0 is poassed to the offset', () => {
    // Arrange
    const lessThanZeroOffset = -0.1;
    const biggerThanOneOffset = 1.01;

    // Act
    const colorStop = new ColorStop();

    // Assert
    expect(() => { colorStop.offset = lessThanZeroOffset; }).toThrow(InvalidArguementError);
    expect(() => { colorStop.offset = biggerThanOneOffset; }).toThrow(InvalidArguementError);
  });
  // TODO: Appropriate it statement
  it('should get the right parameters when ', () => {
    // Arrange
    const offset = 0.4;
    const color = 'red';
    const colorStop = new ColorStop(offset, color);

    // Act
    expect(colorStop.offset).toBe(offset);
    expect(colorStop.color).toBe(color);
  });
});
