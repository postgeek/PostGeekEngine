class Tileset {
  constructor(map, config) {
    this.Map = map;
    this.ColumnCount = config.columnCount;
    this.FirstGid = config.firstGid;
    this.ImagePath = config.imagePath;
    this.ImageHeight = config.imageHeight;
    this.ImageWidth = config.imageWidth;
    this.Name = config.name;
    this.TileCount = config.tileCount;
    this.TileHeight = config.tileHeight; 
    this.TileWidth = config.tileWidth;
  }
}

export default Tileset;