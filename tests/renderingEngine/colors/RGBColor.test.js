import RGBColor from '../../../src/renderingEngine/colors/RGBColor';
import InvalidArguementError from '../../../src/core/errorHandling/errors/InvalidArguementError';

describe('RGBColor', () => {
  it('should create a RGBColor when provded with the right parameters', () => {
    // Arrange
    const red = 23;
    const green = 78;
    const blue = 45;

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
    const green = 78;
    const blue = 45;

    // Assert
    expect(() => { new RGBColor(red, green, blue); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the red color is above 255', () => {
    // Arrange
    const red = 270;
    const green = 78;
    const blue = 45;

    // Assert
    expect(() => { new RGBColor(red, green, blue); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the green color is below 0', () => {
    // Arrange
    const red = 23;
    const green = -2;
    const blue = 45;

    // Assert
    expect(() => { new RGBColor(red, green, blue); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the green color is above 255', () => {
    // Arrange
    const red = 23;
    const green = 280;
    const blue = 45;

    // Assert
    expect(() => { new RGBColor(red, green, blue); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the blue color is below 0', () => {
    // Arrange
    const red = 23;
    const green = 80;
    const blue = -66;

    // Assert
    expect(() => { new RGBColor(red, green, blue); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the blue color is above 255', () => {
    // Arrange
    const red = 23;
    const green = 80;
    const blue = 666;

    // Assert
    expect(() => { new RGBColor(red, green, blue); }).toThrow(InvalidArguementError);
  });
  it('should create an RGBColor using a json file', () => {
    // Arrange
    const colorJson = '{"red": 45, "blue": 56, "green": 78}';
    const red = 45;
    const blue = 56;
    const green = 78;

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
    const colorString = 'rgb(45,78,56)';
    const red = 45;
    const green = 78;
    const blue = 56;

    // Act
    const rgbColor = new RGBColor(red, green, blue);

    // Assert
    expect(rgbColor.toString()).toBe(colorString);
  });
});
