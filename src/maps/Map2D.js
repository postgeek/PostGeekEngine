import Layer from "./Layer";
import Tileset from "./Tileset";

class Map2D {
  constructor(config) {
    this.RowCount = config.rowCount;
    this.ColumnCount = config.columnCount;
    this.TileHeight = config.tileHeight;
    this.TileWidth = config.tileWidth;
    this.Layers = config.layers.map(layer => new Layer(this, layer));
    this.TileSets = config.tilesets.map(tileset => new Tileset(this, tileset));
  }
}

export default Map2D;