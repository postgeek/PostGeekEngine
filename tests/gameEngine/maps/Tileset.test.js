import Tile from '../../../src/gameEngine/maps/Tile';
import Tileset from '../../../src/gameEngine/maps/Tileset';
import SpriteSheet from '../../../src/renderingEngine/images/spritesheets/SpriteSheet';

jest.mock('../../../src/gameEngine/maps/Tile');
jest.mock('../../../src/renderingEngine/images/spritesheets/SpriteSheet');

beforeEach(() => {
  Tile.mockClear();
  SpriteSheet.mockClear();
});

describe('constructor', () => {
  it('should create an empty array of tiles when tile count is zero', () => {
    // Arrange
    const tileCount = 0;

    // Act
    const tileset = new Tileset({tileCount}, {});

    // Assert
    expect(tileset).toBeDefined();
    expect(tileset.Tiles.size).toBe(0);
  });

  it('should create tile collection with the correct values', () => {
    // Arrange
    const tileCount = 10;
    const columnCount = 3;
    const firstGid = 2;

    // Act
    const tileset = new Tileset({tileCount, columnCount, firstGid}, {});

    // Assert
    expect(tileset).toBeDefined();
    expect(tileset.Tiles.size).toBe(10);

    expect(Tile.mock.calls[0][1].gid).toBe(2);
    expect(Tile.mock.calls[0][1].row).toBe(0);
    expect(Tile.mock.calls[0][1].col).toBe(0);
    
    expect(Tile.mock.calls[5][1].gid).toBe(7);
    expect(Tile.mock.calls[5][1].row).toBe(1);
    expect(Tile.mock.calls[5][1].col).toBe(2);

    expect(Tile.mock.calls[9][1].gid).toBe(11);
    expect(Tile.mock.calls[9][1].row).toBe(3);
    expect(Tile.mock.calls[9][1].col).toBe(0);
  });
});

describe('drawTile', () => {
  it('should not draw the tile when given a non valid gid', () => {
    // Arrange
    const tileCount = 10;
    const columnCount = 3;
    const firstGid = 2;
    const tileset = new Tileset({tileCount, columnCount, firstGid}, {});

    // Act
    tileset.drawTile(1, {});

    // Assert
    expect(Tile.mock.instances[0].drawAtPoint).toHaveBeenCalledTimes(0);
  });

  it('should draw the tile when given valid gid', () => {
    // Arrange
    const tileCount = 10;
    const columnCount = 3;
    const firstGid = 2;
    const tileset = new Tileset({tileCount, columnCount, firstGid}, {});

    // Act
    tileset.drawTile(2, {});

    // Assert
    expect(Tile.mock.instances[0].drawAtPoint).toHaveBeenCalledTimes(1);
  });
});

describe('hasTile', () => {
  it('should be truthy when given a gid that is in the tileset.', () => {
    // Arrange
    const tileCount = 10;
    const columnCount = 3;
    const firstGid = 2;
    const tileset = new Tileset({tileCount, columnCount, firstGid}, {});

    // Act
    const hasTile = tileset.hasTile(2);

    // Assert
    expect(hasTile).toBeTruthy();
  });

  it('should be falsy when given a gid that is before the tileset range.', () => {
    // Arrange
    const tileCount = 10;
    const columnCount = 3;
    const firstGid = 2;
    const tileset = new Tileset({tileCount, columnCount, firstGid}, {});

    // Act
    const hasTile = tileset.hasTile(1);

    // Assert
    expect(hasTile).toBeFalsy();
  });

  it('should be falsy when given a gid that is after the tileset gid range.', () => {
    // Arrange
    const tileCount = 10;
    const columnCount = 3;
    const firstGid = 2;
    const tileset = new Tileset({tileCount, columnCount, firstGid}, {});

    // Act
    const hasTile = tileset.hasTile(12);

    // Assert
    expect(hasTile).toBeFalsy();
  });
});