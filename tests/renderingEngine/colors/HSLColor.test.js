import HSLColor from '../../../src/renderingEngine/colors/HSLColor';
import InvalidArguementError from '../../../src/core/errorHandling/errors/InvalidArguementError';

let hue = 23;
let saturation = 78;
let lightness = 45;

beforeEach(() => {
  hue = 23;
  saturation = 78;
  lightness = 45;
});

describe('HSLColor', () => {
  it('should create a HSLColor when provded with the right parameters', () => {
    // Act
    const hslColor = new HSLColor(hue, saturation, lightness);

    // Assert
    expect(hslColor).toBeDefined();
    expect(hslColor.hue).toBe(hue);
    expect(hslColor.lightness).toBe(lightness);
    expect(hslColor.saturation).toBe(saturation);
  });
  it('should throw an error when the hue level is below 0', () => {
    // Arrange
    hue = -1;

    // Assert
    expect(() => { new HSLColor(hue, saturation, lightness); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the hue level is above 360', () => {
    // Arrange
    hue = 466;

    // Assert
    expect(() => { new HSLColor(hue, saturation, lightness); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the saturation level is below 0', () => {
    // Arrange
    saturation = -2;

    // Assert
    expect(() => { new HSLColor(hue, saturation, lightness); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the saturation level is above 100', () => {
    // Arrange
    saturation = 127;

    // Assert
    expect(() => { new HSLColor(hue, saturation, lightness); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the lightness level is below 0', () => {
    // Arrange
    lightness = -66;

    // Assert
    expect(() => { new HSLColor(hue, saturation, lightness); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the lightness level is above 100', () => {
    // Arrange
    lightness = 666;

    // Assert
    expect(() => { new HSLColor(hue, saturation, lightness); }).toThrow(InvalidArguementError);
  });
  it('should create an HSLColor using a json file', () => {
    // Arrange
    const colorJson = '{"hue": 23, "saturation": 78, "lightness": 45}';

    // Act
    const hslColor = HSLColor.FromJSON(colorJson);

    // Assert
    expect(hslColor).toBeDefined();
    expect(hslColor.hue).toBe(hue);
    expect(hslColor.lightness).toBe(lightness);
    expect(hslColor.saturation).toBe(saturation);
  });
  it('should correctly format the string for the HSLColor class', () => {
    // Arrange
    const colorString = 'hsl(23,78%,45%)';

    // Act
    const hslColor = new HSLColor(hue, saturation, lightness);

    // Assert
    expect(hslColor.toString()).toBe(colorString);
  });
});
