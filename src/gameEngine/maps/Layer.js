import Vec2D from '../../core/Vec2D';

class Layer {
  constructor(map, config) {
    this.Map = map;
    this.Id = config.id;
    this.Name = config.name;
    this.Data = config.data;
  }

  draw() {
    this.Data.forEach((gid, index) => {
      // A gid of zero means that there is no data to show
      if (gid !== 0) {
        const tileset = this.Map.Tilesets.find((ts) => ts.hasTile(gid));
        if (tileset !== undefined) {
          const row = Math.floor(index / this.Map.ColumnCount);
          const col = index % this.Map.ColumnCount;
          tileset.drawTile(gid, new Vec2D(col * this.Map.TileWidth, row * this.Map.TileHeight));
        }
      }
    });
  }
}

export default Layer;
