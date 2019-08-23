import SpriteSheet from '../../../../src/renderingEngine/images/spritesheets/SpriteSheet';

describe('spriteSheetConfig', () => {
  it('should get the correct sprite sheet configuration', () => {
    // Arrange
    const testSpriteSheetConfig = 'id';
    const spriteSheet = new SpriteSheet(image, spriteSheetConfig);

    // Assert
    expect(spriteSheet.spriteSheetConfig).toBe(testSpriteSheetConfig);
  });
});

describe('draw', () => {
  it.skip('should properly draw on screen', () => {
    // Arrange

    // Act

    // Assert
  });
});
