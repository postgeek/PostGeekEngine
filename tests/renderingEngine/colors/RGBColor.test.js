import RGBColor from '../../../src/renderingEngine/colors/RGBColor';
import InvalidArguementError from '../../../src/core/errorHandling/errors/InvalidArguementError';

let red = 23;
let green = 78;
let blue = 45;

beforeEach(() => {
  red = 23;
  green = 78;
  blue = 45;
});

describe('RGBColor', () => {
  it('should create a RGBColor when provded with the right parameters', () => {
    // Act
    const rgbColor = new RGBColor(red, green, blue);

    // Assert
    expect(rgbColor).toBeDefined();
    expect(rgbColor.red).toBe(red);
    expect(rgbColor.blue).toBe(blue);
    expect(rgbColor.green).toBe(green);
  });
  it('should throw an error when the red color is below 0', () => {
    // Arrange
    const red = -1;

    // Assert
    expect(() => { new RGBColor(red, green, blue); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the red color is above 255', () => {
    // Arrange
    const red = 270;

    // Assert
    expect(() => { new RGBColor(red, green, blue); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the green color is below 0', () => {
    // Arrange
    const green = -2;

    // Assert
    expect(() => { new RGBColor(red, green, blue); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the green color is above 255', () => {
    // Arrange
    const green = 280;

    // Assert
    expect(() => { new RGBColor(red, green, blue); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the blue color is below 0', () => {
    // Arrange
    const blue = -66;

    // Assert
    expect(() => { new RGBColor(red, green, blue); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the blue color is above 255', () => {
    // Arrange
    const blue = 666;

    // Assert
    expect(() => { new RGBColor(red, green, blue); }).toThrow(InvalidArguementError);
  });
  it('should create an RGBColor using a json file', () => {
    // Arrange
    const colorJson = '{"red": 23, "green": 78, "blue": 45}';

    // Act
    const rgbColor = RGBColor.FromJSON(colorJson);

    // Assert
    expect(rgbColor).toBeDefined();
    expect(rgbColor.red).toBe(red);
    expect(rgbColor.blue).toBe(blue);
    expect(rgbColor.green).toBe(green);
  });
  it('should correctly format the string for the RGBColor class', () => {
    // Arrange
    const colorString = 'rgb(23,78,45)';

    // Act
    const rgbColor = new RGBColor(red, green, blue);

    // Assert
    expect(rgbColor.toString()).toBe(colorString);
  });
});
