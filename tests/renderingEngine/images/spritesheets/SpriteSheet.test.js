import SpriteSheet from '../../../../src/renderingEngine/images/spritesheets/SpriteSheet';

import ContextMock from '../../../mocks/ContextMock';

import ServiceLocator from '../../../../src/core/ServiceLocator';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new ContextMock());
});

describe('spriteSheetConfig', () => {
  it('should get the correct sprite sheet configuration', () => {
    // Arrange
    const testSpriteSheetConfig = 'id';
    const spriteSheet = new SpriteSheet('', testSpriteSheetConfig);

    // Assert
    expect(spriteSheet.spriteSheetConfig).toBe(testSpriteSheetConfig);
  });
});

describe('draw', () => {
  it('should properly draw on screen', () => {
    // Arrange
    const spriteSheet = new SpriteSheet('', '');
    const context = ServiceLocator.instance.locate('context');
    const contextDrawSpy = jest.spyOn(context, 'drawImage');

    // Act
    spriteSheet.draw();

    // Assert
    expect(contextDrawSpy).toBeCalledTimes(1);
  });
});
