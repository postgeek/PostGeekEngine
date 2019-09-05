import HSLAColor from '../../../src/renderingEngine/colors/HSLAColor';
import InvalidArguementError from '../../../src/core/errorHandling/errors/InvalidArguementError';

let hue = 23;
let saturation = 78;
let lightness = 45;
let alpha = 0.5;

beforeEach(() => {
  hue = 23;
  saturation = 78;
  lightness = 45;
  alpha = 0.5;
});

describe('HSLAColor', () => {
  it('should create a HSLAColor when provded with the right parameters', () => {
    // Act
    const hslaColor = new HSLAColor(hue, saturation, lightness, alpha);

    // Assert
    expect(hslaColor).toBeDefined();
    expect(hslaColor.hue).toBe(hue);
    expect(hslaColor.lightness).toBe(lightness);
    expect(hslaColor.saturation).toBe(saturation);
    expect(hslaColor.alpha).toBe(alpha);
  });
  it('should throw an error when the alpha level is below 0', () => {
    // Arrange
    alpha = -1;

    // Assert
    expect(() => { new HSLAColor(hue, saturation, lightness, alpha); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when the alpha level is above 1', () => {
    // Arrange
    alpha = 66;

    // Assert
    expect(() => { new HSLAColor(hue, saturation, lightness, alpha); }).toThrow(InvalidArguementError);
  });
  it('should create an HSLAColor using a json file', () => {
    // Arrange
    const colorJson = '{"hue": 23, "saturation": 78, "lightness": 45, "alpha": 0.5}';

    // Act
    const hslaColor = HSLAColor.FromJSON(colorJson);

    // Assert
    expect(hslaColor).toBeDefined();
    expect(hslaColor.hue).toBe(hue);
    expect(hslaColor.lightness).toBe(lightness);
    expect(hslaColor.saturation).toBe(saturation);
    expect(hslaColor.alpha).toBe(alpha);
  });
  it('should correctly format the string for the HSLAColor class', () => {
    // Arrange
    const colorString = 'hsla(23,78%,45%,0.5)';

    // Act
    const hslaColor = new HSLAColor(hue, saturation, lightness, alpha);

    // Assert
    expect(hslaColor.toString()).toBe(colorString);
  });
});
