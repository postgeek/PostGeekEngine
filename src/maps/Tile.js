class Tile {
  constructor(map, config) {
    this.Map = map;
    this.GID = config.gid;
    this.TileSet = config.tileSet;
    this.Row = config.row;
    this.Colunm = config.col;
  }

  draw() {
    this.TileSet.drawTile(this.GID, this.Row, this.Colunm);
  }
}

export default Tile;