import Point from '../physics/Point';

class Layer {
  constructor(map, config) {
    this.Map = map;
    this.Id = config.id;
    this.Name = config.name;
    this.Data = config.data;
  }

  draw () {
    this.Data.map((gid, index) => {
      // A gid of zero means that there is no data to show
      if (gid === 0) return;
      const tileset = this.Map.Tilesets.find(tileset => tileset.hasTile(gid));
      if (tileset !== undefined) {
        const row = Math.floor(index / this.Map.ColumnCount);
        const col = index % this.Map.ColumnCount;
        tileset.drawTile(gid, new Point(col * this.Map.TileWidth, row * this.Map.TileHeight));
      }
    });
  }
}

export default Layer;