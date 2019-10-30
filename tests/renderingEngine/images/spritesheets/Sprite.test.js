import Sprite from '../../../../src/renderingEngine/images/spritesheets/Sprite';
import SpriteSheet from '../../../../src/renderingEngine/images/spritesheets/SpriteSheet';
import Vec2D from '../../../../src/core/Vec2D';

import ContextMock from '../../../mocks/ContextMock';
import SpriteConfigMock from '../../../mocks/SpriteConfigMock';

import ServiceLocator from '../../../../src/core/ServiceLocator';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new ContextMock());
});

describe('x', () => {
  it('should properly get the width', () => {
    // Arrange
    const sprite = new Sprite();
    const x = 20;

    // Act
    sprite.x = x;

    // Assert
    expect(sprite.x).toBe(x);
  });
});

describe('y', () => {
  it('should properly get the height', () => {
    // Arrange
    const sprite = new Sprite();
    const y = 20;

    // Act
    sprite.y = y;

    // Assert
    expect(sprite.y).toBe(y);
  });
});

describe('drawAtPoint', () => {
  it('should draw the sprite at the specified point', () => {
    // Arrange
    const spriteSheet = new SpriteSheet();
    const spriteConfig = new SpriteConfigMock();
    const sprite = new Sprite(spriteSheet, spriteConfig);
    const point = new Vec2D(20, 10);
    const spriteSheetDrawImageWithMaskSpy = jest.spyOn(spriteSheet, 'drawImageWithMask');

    // Act
    sprite.drawAtPoint(point);

    // Assert
    expect(spriteSheetDrawImageWithMaskSpy).toHaveBeenCalledTimes(1);
  });
});
