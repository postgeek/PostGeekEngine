import Layer from './Layer';
import Tileset from './Tileset';
import AssetCache from '../../core/managers/AssetCache';

function addImageAsync(assetUrl) {
  return new Promise((resolve) => {
    const tilesetImg = new Image();
    tilesetImg.src = window.URL.createObjectURL(assetUrl);
    tilesetImg.onload = () => {
      resolve(tilesetImg);
    };
  });
}

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

    this.Layers = this.Config.layers.map((layer) => new Layer(this, layer));
  }

  async loadTileset(tileset) {
    const tileSetId = `${tileset.name}.TilesetImg`;

    this.cache.registerAsset(tileSetId, tileset.imagePath);
    await this.cache.loadAsset(tileSetId);
    return addImageAsync(await this.cache.getAssetAsync(tileSetId));
  }

  draw() {
    this.Layers.map((layer) => layer.draw());
  }
}

export default Map2D;
