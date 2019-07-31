import RGBAColor from '../../../src/renderingEngine/colors/RGBAColor';
import InvalidArguementError from '../../../src/core/errorHandling/errors/InvalidArguementError';

describe('RGBAColor', () => {
  it('should create a RGBAColor when provded with the right parameters', () => {
    // Arrange
    const red = 23;
    const green = 78;
    const blue = 45;
    const alpha = 0.5;

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
    const red = 20;
    const green = 78;
    const blue = 45;
    const alpha = -1;

    // Assert
    expect(() => { new RGBAColor(red, green, blue, alpha); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the alpha of the color is above 1', () => {
    // Arrange
    const red = 50;
    const green = 78;
    const blue = 45;
    const alpha = 66;

    // Assert
    expect(() => { new RGBAColor(red, green, blue, alpha); }).toThrow(InvalidArguementError);
  });
  it('should create an RGBAColor using a json file', () => {
    // Arrange
    const colorJson = '{"red": 45, "blue": 56, "green": 78, "alpha": 0.5}';
    const red = 45;
    const blue = 56;
    const green = 78;
    const alpha = 0.5;

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
    const colorString = 'rgba(45,78,56,0.5)';
    const red = 45;
    const green = 78;
    const blue = 56;
    const alpha = 0.5;

    // Act
    const rgbaColor = new RGBAColor(red, green, blue, alpha);

    // Assert
    expect(rgbaColor.toString()).toBe(colorString);
  });
});
