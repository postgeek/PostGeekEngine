class GameEntity {
  /**
  * Constructor for the GameEntity
  *
  * @param {Point} point game entities starting point
  * @param {number} width the width of the game entity
  * @param {number} height the height of the game entity
  */
  constructor(point, width, height) {
    this.Point = point;
    this.Width = width;
    this.Height = height;
  }

  /**
  * The game entities point.
  */
  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  /**
  * The game entities width.
  */
  get Width() {
    return this.width;
  }

  set Width(value) {
    this.width = value;
  }

  /**
  * The game entities height
  */
  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }
}
export default GameEntity;
