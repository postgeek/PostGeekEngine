import Tile from "../../../src/gameEngine/maps/Tile";

describe('constructor', () => {
  it('should have the point set for the pixel location of the tile in the tileset', () => {
    // Arrange
    const tileset = { TileWidth: 32, TileHeight: 32 };
    const tileConfig = { col: 3, row: 2 };
    
    // Act
    const tile = new Tile(tileset, tileConfig);

    // Assert
    expect(tile.spriteConfig.point.x).toBe(96);
    expect(tile.spriteConfig.point.y).toBe(64);
  });
});