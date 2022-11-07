import Sprite from '../../renderingEngine/images/spritesheets/Sprite';
import Vec2D from '../../core/Vec2D';

class Tile extends Sprite {
  /**
   * Create a tile that can be displayed as part of a map.
   * @param {Tileset} tileset The tileset this tile is found in.
   * @param {object} config The configuration for this Tile
   */
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
