import GraphicsJSONLoader from '../../src/renderingEngine/GraphicsJSONLoader'


describe('createCircle', () => {
  it('should create a circle with the configuration provided', () => {
    // Arange
    const expectedKey = 'somekey';

    // Act
    const circle = GraphicsJSONLoader.createCircle(config);

    // Assert
    expect(cache.assets[expectedKey]).not.toBe(null);
  });
