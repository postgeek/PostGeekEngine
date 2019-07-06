import SpriteSheet from '../graphics/images/spritesheets/SpriteSheet';
import Tile from './Tile';

class Tileset extends SpriteSheet {
  constructor(map, config, image) {
    super(map.Game.renderingContext.Context, image, { width: config.width, height: config.height });

    this.Map = map;
    this.ColumnCount = config.columnCount;
    this.FirstGid = config.firstGid;
    this.ImagePath = config.imagePath;
    this.ImageHeight = config.imageHeight;
    this.ImageWidth = config.imageWidth;
    this.Name = config.name;
    this.TileCount = config.tileCount;
    this.TileHeight = config.tileHeight; 
    this.TileWidth = config.tileWidth;

    this.Tiles = this.createTiles(this.TileCount, this.ColumnCount, this.FirstGid);
  }

  hasTile(gid) {
    const lastGid = this.FirstGid + this.TileCount;
    return gid >= this.FirstGid && gid < lastGid;
  }

  createTiles(tileCount, columnCount, firstGid) {
    const tiles = [];
    for (let index = 0; index < tileCount; index++) {
      // Row and column position in sprite sheet
      const row = Math.floor(index / columnCount);
      const col = index % columnCount;
      const gid = firstGid + index;
      tiles.push([gid, new Tile(this, {gid, row, col})]);
    }

    return new Map(tiles);
  }

  drawTile(gid, drawPoint) {
    const tile = this.Tiles.get(gid);
    if (tile !== undefined) {
      tile.drawAtPoint(drawPoint);
    }
  }
}

export default Tileset;