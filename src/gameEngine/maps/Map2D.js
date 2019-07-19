import Layer from './Layer';
import Tileset from './Tileset';
import AssetCache from '../../core/managers/AssetCache';

class Map2D {
  constructor(config) {
    this.Config = config;
    this.RowCount = config.rowCount;
    this.ColumnCount = config.columnCount;
    this.TileHeight = config.tileHeight;
    this.TileWidth = config.tileWidth;
    this.Tilesets = [];
    this.Layers = [];
    this.cache = new AssetCache();
  }

  async load() {
    this.Tilesets = await Promise.all(this.Config.tilesets.map(async (tileset) => {
      const img = await this.loadTileset(tileset);
      return new Tileset(tileset, img);
    }));

    this.Layers = this.Config.layers.map(layer => new Layer(this, layer));
  }

  loadTileset(tileset) {
    return new Promise(async (resolve) => {
      const tileSetId = `${tileset.name}.TilesetImg`;

      this.cache.registerAsset(tileSetId, tileset.imagePath);
      await this.cache.loadAsset(tileSetId);

      const tilesetImg = new Image();
      tilesetImg.src = window.URL.createObjectURL(this.cache.getAsset(tileSetId));
      tilesetImg.onload = () => {
        resolve(tilesetImg);
      };
    });
  }

  draw() {
    this.Layers.map(layer => layer.draw());
  }
}

export default Map2D;
