class IsoMap {
  /**
  * Creates a new IsoMap object.
  *
  * @param {number} rows the number of rows the map contains.
  * @param {number} cols the number of cols the map contains.
  * @param {number} tileWidth the width of the tiles.
  * @param {number} tileHeight the height of the tiles.
  */
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
  /**
  * Gets the tile associated to the provided x and y coordinate.
  *
  * @param {number} x the x coordinate of the tile array.
  * @param {number} y the y coordinate of the tile array.
  */
  GetTile(x, y) {
    return this.tiles[x][y];
  }

  /**
  * Returns the x and y coordinates of the tile on the map.
  *
  * @param {number} screenX the screen's x coordinate.
  * @param {number} screenY the screen's y coordinate.
  */
  ScreenToMap(screenX, screenY) {
    const x = ((screenX / this.tileWidthHalf) + (screenY / this.tileHeightHalf)) / 2;
    const y = ((screenY / this.tileHeightHalf) + (screenX / this.tileWidthHalf)) / 2;
    return { x, y };
  }

  /**
  *  Returns the position of the cursor on the screen
  *
  * @param {number} mapX the map's x coordinate.
  * @param {number} mapY the map's y coordinate.
  */
  MapToScreen(mapX, mapY) {
    const x = (mapX - mapY) * this.tileWidthHalf;
    const y = (mapX + mapY) * this.tileHeightHalf;
    return { x, y };
  }
}
export default IsoMap;
