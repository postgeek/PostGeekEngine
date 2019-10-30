import Sprite from '../../renderingEngine/images/spritesheets/Sprite';
import Vec2D from '../../core/Vec2D';

class Tile extends Sprite {
  constructor(tileset, config) {
    super(tileset, {
      id: config.gid,
      point: new Vec2D(config.col * tileset.TileWidth, config.row * tileset.TileHeight),
      width: tileset.TileWidth,
      height: tileset.TileHeight,
    });

    this.GID = config.gid;
  }
}

export default Tile;
