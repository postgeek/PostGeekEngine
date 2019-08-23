import Sprite from '../../renderingEngine/images/spritesheets/Sprite';
import Point from '../../core/Point';

class Tile extends Sprite {
  constructor(tileset, config) {
    super(tileset, {
      id: config.gid,
      Point: new Point(config.col * tileset.TileWidth, config.row * tileset.TileHeight),
      Width: tileset.TileWidth,
      Height: tileset.TileHeight,
    });

    this.GID = config.gid;
  }
}

export default Tile;
