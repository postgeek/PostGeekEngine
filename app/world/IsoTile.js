import Point from '../physics/Point';

class IsoTile {
  /**
  * Creates a new IsoTile object.
  *
  * @param x the x coordinate of the iso tile.
  * @param y the y coordinate of the iso tile.
  * @param z the z coordinate of the iso tile.
  * @param width the width of the iso tile.
  * @param height the height of the iso tile.
  */
  constructor(x, y, width, height) {
    this.points = [
      new Point(x, y),
      new Point(x, y - 1),
      new Point(x - 1, y - 1),
      new Point(x - 1, y),
    ];

    this.width = width;
    this.height = height;
  }

  /**
  * The width of the tile.
  */
  get Width() {
    return this.width;
  }

  set Width(value) {
    this.width = value;
  }

  /**
  * The height of the tile.
  */
  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }
}
export default IsoTile;
