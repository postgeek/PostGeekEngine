import Frame from '../graphics/images/spritesheets/Frame';
import Point from '../physics/Point';

class Tile extends Frame {
  constructor(tileset, config) {
    super(tileset, { 
      id: config.gid,
      Point: new Point(config.col * tileset.TileWidth, config.row * tileset.TileHeight),
      Width: tileset.TileWidth, 
      Height: tileset.TileHeight 
    });

    this.GID = config.gid;
  }
}

export default Tile;