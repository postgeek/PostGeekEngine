import Sprite from '../../renderingEngine/images/spritesheets/Sprite';
import Point from '../../core/Point';

class Tile extends Sprite {
  constructor(tileset, config) {
    super(tileset, {
      id: config.gid,
      point: new Point(config.col * tileset.TileWidth, config.row * tileset.TileHeight),
      width: tileset.TileWidth,
      height: tileset.TileHeight,
    });

    this.GID = config.gid;
  }
}

export default Tile;
