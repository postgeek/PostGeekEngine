import Tile from "./Tile";

class Layer {
  constructor(map, config) {
    this.Map = map;
    this.Id = config.id;
    this.Name = config.name;

    // TODO: Find the correct tile set
    this.Tiles = config.data.map((gid, index) => {
      const tileSet = map.TileSets[0];
      const row = Math.floor(index / map.ColumnCount);
      const col = index % map.ColumnCount;
      return new Tile(map, {gid, tileSet, row, col});
    });
  }

  draw () {
    this.Tiles.map(tile => tile.draw());
  }
}

export default Layer;