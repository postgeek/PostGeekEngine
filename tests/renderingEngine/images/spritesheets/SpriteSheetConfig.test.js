import SpriteSheetConfig from '../../../../src/renderingEngine/images/spritesheets/SpriteSheetConfig';

afterEach(() => {
  jest.clearAllMocks();
});

describe('constructor', () => {
  it('should properly set the width when creating a new spritesheet configuration', () => {
    // Arrange
    const width = 32;
    const spriteSheetConfig = new SpriteSheetConfig({ width });

    // Assert
    expect(spriteSheetConfig.width).toBe(width);
  });
  it('should properly set the height when creating a new spritesheet configuration', () => {
    // Arrange
    const height = 32;
    const spriteSheetConfig = new SpriteSheetConfig({ height });

    // Assert
    expect(spriteSheetConfig.height).toBe(height);
  });
});

describe('width', () => {
  it('should properly set the width', () => {
    // Arrange
    const spriteSheetConfig = new SpriteSheetConfig();
    const newWidth = 32;

    // Act
    spriteSheetConfig.width = newWidth;

    // Assert
    expect(spriteSheetConfig.width).toBe(newWidth);
  });
  it('should show a warning if the width is not a power of 2', () => {
    // Arrange
    const spriteSheetConfig = new SpriteSheetConfig();
    const newWidth = 33;
    const consoleWarnSpy = jest.spyOn(console, 'warn');

    // Act
    spriteSheetConfig.width = newWidth;

    // Assert
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });
});

describe('height', () => {
  it('should properly set the height', () => {
    // Arrange
    const spriteSheetConfig = new SpriteSheetConfig();
    const newHeight = 32;

    // Act
    spriteSheetConfig.height = newHeight;

    // Assert
    expect(spriteSheetConfig.height).toBe(newHeight);
  });
  it('should show a warning if the height is not a power of 2', () => {
    // Arrange
    const spriteSheetConfig = new SpriteSheetConfig();
    const newHeight = 33;
    const consoleWarnSpy = jest.spyOn(console, 'warn');

    // Act
    spriteSheetConfig.height = newHeight;

    // Assert
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });
});
