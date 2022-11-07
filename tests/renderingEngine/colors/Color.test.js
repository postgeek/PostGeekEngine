import Color from '../../../src/renderingEngine/colors/Color';
import HSLColor from '../../../src/renderingEngine/colors/HSLColor';
import HSLAColor from '../../../src/renderingEngine/colors/HSLAColor';
import RGBColor from '../../../src/renderingEngine/colors/RGBColor';
import RGBAColor from '../../../src/renderingEngine/colors/RGBAColor';

describe('predefined colors', () => {
  it('should properly construct the name', () => {
    // Arrange
    const name = 'blue';
    const color = new Color({ name });

    // Assert
    expect(color.name).not.toBe(null);
  });
  it('should properly construct the hex', () => {
    // Arrange
    const hex = '#000000';
    const color = new Color({ hex });

    // Assert
    expect(color.hex).not.toBe(null);
  });
  it('should properly construct the hslColor', () => {
    // Arrange
    const hslColor = new HSLColor(20, 30, 40);
    const color = new Color({ hslColor });

    // Assert
    expect(color.hslColor).not.toBe(null);
  });
  it('should properly construct the hslaColor', () => {
    // Arrange
    const hslaColor = new HSLAColor(20, 30, 40, 0.5);
    const color = new Color({ hslaColor });

    // Assert
    expect(color.hslaColor).not.toBe(null);
  });
  it('should properly construct the rgbColor', () => {
    // Arrange
    const rgbColor = new RGBColor(20, 30, 40);
    const color = new Color({ rgbColor });

    // Assert
    expect(color.rgbColor).not.toBe(null);
  });
  it('should properly construct the rgbaColor', () => {
    // Arrange
    const rgbaColor = new RGBAColor(20, 30, 40, 0.5);
    const color = new Color({ rgbaColor });

    // Assert
    expect(color.rgbaColor).not.toBe(null);
  });
  it('should properly set the alpha channel of an RGBAColor', () => {
    // Arrange
    const rgbaColor = new RGBAColor(20, 30, 50, 0.8);
    const color = new Color({ rgbaColor });
    const newAlpha = 0.2

    // Act
    color.alpha = newAlpha;

    // Assert
    expect(color.rgbaColor.alpha).toBe(newAlpha);
  });
  it('should properly set the alpha channel of an HSLAColor', () => {
    // Arrange
    const hslaColor = new HSLAColor(20, 30, 40, 0.5);
    const color = new Color({ hslaColor });
    const newAlpha = 0.2;

    // Act
    color.alpha = newAlpha;

    // Assert
    expect(color.hslaColor.alpha).toBe(newAlpha);
  })
  it('should properly set the alpha channel of the HSLAColor and the RGBAColor', () => {
    // Arrange
    const color = Color.GHOSTWHITE;
    const newAlpha = 0.2;

    // Act
    color.alpha = newAlpha;

    // Assert
    expect(color.hslaColor.alpha).toBe(newAlpha);
    expect(color.rgbaColor.alpha).toBe(newAlpha);
  });
  it('should properly get the alpha channel', () => {
    // Arrange
    const rgbaColor = new RGBAColor(20, 30, 40, 0.5);
    const color = new Color({ rgbaColor });

    // Assert
    expect(color.alpha).toBe(0.5);
  });
});
