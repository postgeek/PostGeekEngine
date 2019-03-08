export default class IsoMap {
  constructor(rows, cols, tileWidth, tileHeight) {
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;

    this.tileWidthHalf = this.tileWidth / 2;
    this.tileHeightHalf = this.tileHeight / 2;

    this.offsetX = 0;
    this.offsetY = 0;

    this.rows = rows;
    this.cols = cols;

    this.tiles = new Array(this.rows);
    for (let i = 0; i < this.tiles.length; i += 1) {
      this.tiles[i] = new Array(this.cols);
    }
  }

  // TODO: Confirm that this is true
  GetTile(x, y) {
    return this.tiles[x][y];
  }

  // Returns the x,y coordinates of the tile on the map
  ScreenToMap(screenX, screenY) {
    const x = ((screenX / this.tileWidthHalf) + (screenY / this.tileHeightHalf)) / 2;
    const y = ((screenY / this.tileHeightHalf) + (screenX / this.tileWidthHalf)) / 2;
    return { x, y };
  }

  // Returns the position of the cursor on the screen
  MapToScreen(mapX, mapY) {
    const x = (mapX - mapY) * this.tileWidthHalf;
    const y = (mapX + mapY) * this.tileHeightHalf;
    return { x, y };
  }
}
