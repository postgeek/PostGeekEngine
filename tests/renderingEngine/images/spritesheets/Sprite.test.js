import Sprite from '../../../../src/renderingEngine/images/spritesheets/Sprite';
import SpriteSheet from '../../../../src/renderingEngine/images/spritesheets/SpriteSheet';
import Point from '../../../../src/core/Point';

import ContextMock from '../../../mocks/ContextMock';
import SpriteConfigMock from '../../../mocks/SpriteConfigMock';

import ServiceLocator from '../../../../src/core/ServiceLocator';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new ContextMock());
});

describe('width', () => {
  it('should properly get the width', () => {
    // Arrange
    const sprite = new Sprite();
    const width = 20;

    // Act
    sprite.width = width;

    // Assert
    expect(sprite.width).toBe(width);
  });
});

describe('height', () => {
  it('should properly get the height', () => {
    // Arrange
    const sprite = new Sprite();
    const height = 20;

    // Act
    sprite.height = height;

    // Assert
    expect(sprite.height).toBe(height);
  });
});

describe('drawAtPoint', () => {
  it('should draw the sprite at the specified point', () => {
    // Arrange
    const spriteSheet = new SpriteSheet();
    const spriteConfig = new SpriteConfigMock();
    const sprite = new Sprite(spriteSheet, spriteConfig);
    const point = new Point(20, 10);
    const spriteSheetDrawImageWithMaskSpy = jest.spyOn(spriteSheet, 'drawImageWithMask');

    // Act
    sprite.drawAtPoint(point);

    // Assert
    expect(spriteSheetDrawImageWithMaskSpy).toHaveBeenCalledTimes(1);
  });
});
