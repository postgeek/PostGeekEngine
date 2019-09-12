import GameObject from "../../../src/gameEngine/gameObjects/GameObject";

describe('constructor', () => {
  it('should create a game object with provided scene', () => {
    // Arrange
    const fakeScene = {};

    // Act
    const gameObject = new GameObject(fakeScene);

    // Assert
    expect(gameObject.scene).toBe(fakeScene);
  });
});

describe('update', () => {
  it('should update physics if physics is set', () => {
    // Arrange
    const physics = { update: () => {} }
    const physicsUpdateSpy = jest.spyOn(physics, 'update');
    const gameObject = new GameObject({});
    gameObject.physics = physics;

    // Act
    gameObject.update();

    // Assert
    expect(physicsUpdateSpy).toHaveBeenCalledTimes(1);
  });
  it('should update graphics if graphics is set', () => {
    // Arrange
    const graphics = { update: () => {} }
    const graphicsUpdateSpy = jest.spyOn(graphics, 'update');
    const gameObject = new GameObject({});
    gameObject.graphics = graphics;

    // Act
    gameObject.update();

    // Assert
    expect(graphicsUpdateSpy).toHaveBeenCalledTimes(1);
  })
});

describe('draw', () => {
  it('should draw graphics if graphics is set', () => {
    // Arrange
    const graphics = { draw: () => {} }
    const graphicsDrawSpy = jest.spyOn(graphics, 'draw');
    const gameObject = new GameObject({});
    gameObject.graphics = graphics;

    // Act
    gameObject.draw();

    // Assert
    expect(graphicsDrawSpy).toHaveBeenCalledTimes(1);
  })
});