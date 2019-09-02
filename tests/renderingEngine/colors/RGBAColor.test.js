import RGBAColor from '../../../src/renderingEngine/colors/RGBAColor';
import InvalidArguementError from '../../../src/core/errorHandling/errors/InvalidArguementError';

let red = 23;
let green = 78;
let blue = 45;
let alpha = 0.5;

beforeEach(() => {
  red = 23;
  green = 78;
  blue = 45;
  alpha = 0.5;
});

describe('RGBAColor', () => {
  it('should create a RGBAColor when provded with the right parameters', () => {
    // Act
    const rgbaColor = new RGBAColor(red, green, blue, alpha);

    // Assert
    expect(rgbaColor).toBeDefined();
    expect(rgbaColor.red).toBe(red);
    expect(rgbaColor.blue).toBe(blue);
    expect(rgbaColor.green).toBe(green);
    expect(rgbaColor.alpha).toBe(alpha);
  });
  it('should throw an error when the alpha of the color is below 0', () => {
    // Arrange
    const alpha = -1;

    // Assert
    expect(() => { new RGBAColor(red, green, blue, alpha); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the alpha of the color is above 1', () => {
    // Arrange
    const alpha = 66;

    // Assert
    expect(() => { new RGBAColor(red, green, blue, alpha); }).toThrow(InvalidArguementError);
  });
  it('should create an RGBAColor using a json file', () => {
    // Arrange
    const colorJson = '{"red": 23, "green": 78, "blue": 45, "alpha": 0.5}';

    // Act
    const rgbaColor = RGBAColor.FromJSON(colorJson);

    // Assert
    expect(rgbaColor).toBeDefined();
    expect(rgbaColor.red).toBe(red);
    expect(rgbaColor.blue).toBe(blue);
    expect(rgbaColor.green).toBe(green);
    expect(rgbaColor.alpha).toBe(alpha);
  });
  it('should correctly format the string for the RGBAColor class', () => {
    // Arrange
    const colorString = 'rgba(23,78,45,0.5)';

    // Act
    const rgbaColor = new RGBAColor(red, green, blue, alpha);

    // Assert
    expect(rgbaColor.toString()).toBe(colorString);
  });
});
