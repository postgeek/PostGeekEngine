import Layer from "./Layer";
import Tileset from "./Tileset";

class Map2D {
  constructor(game, config) {
    this.Game = game;
    this.RowCount = config.rowCount;
    this.ColumnCount = config.columnCount;
    this.TileHeight = config.tileHeight;
    this.TileWidth = config.tileWidth;
    this.TileSets = config.tilesets.map(tileset => new Tileset(this, tileset));
    this.Layers = config.layers.map(layer => new Layer(this, layer));
  }

  draw() {
    this.Layers.map(layer => layer.draw());
  }
}

export default Map2D;