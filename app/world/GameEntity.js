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

  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  get Width() {
    return this.width;
  }

  set Width(value) {
    this.width = value;
  }

  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }
}
export default GameEntity;
