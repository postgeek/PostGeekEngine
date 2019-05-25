import Shape from './Shape';

/**
 * Defines a graphical ellipse
 */
class Ellipse extends Shape {
  /**
  * Builds a new ellipse shape for drawing on the canvas
  *
  * @param {CanvasRenderingContext2D} context the canvas' 2D context.
  * @param {Point} startingPoint the starting point for the Ellipse.
  * @param {number} radiusX the x's radius.
  * @param {number} radiusY the y's radius.
  * @param {number} rotation the rotation.
  */
  constructor(context, startingPoint, radiusX, radiusY, rotation) {
    super(context);
    this.StartingPoint = startingPoint;
    this.RadiusX = radiusX;
    this.RadiusY = radiusY;
    this.Rotation = rotation;
  }

  /**
   * Gets the ellipse's starting point
   *
   * @return {Point} the starting point of the ellipse
   */
  get StartingPoint() {
    return this.startingPoint;
  }

  /**
   * Sets the ellipse's starting point
   *
   * @param  {Point} value the ellipse's new starting point
   * @return {undefined}       description
   */
  set StartingPoint(value) {
    /** @private */
    this.startingPoint = value;
  }

  /**
   * Gets the x coordinate of the starting point of the ellipse.
   *
   * @return {float} The starting point's x coordinate
   */
  get X() {
    return this.StartingPoint.X;
  }

  /**
   * Specifies the x coordinate of the starting point of the ellipse.
   *
   * @param  {float} value the new x coordinate of the starting point of the ellipse.
   * @return {undefined}
   */
  set X(value) {
    this.StartingPoint.X = value;
  }

  /**
   * Gets the y coordinate of the starting point of the ellipse.
   *
   * @return {float} The starting point's y coordinate
   */
  get Y() {
    return this.StartingPoint.Y;
  }

  /**
   * Specifies the y coordinate of the starting point of the ellipse.
   *
   * @param  {float} value the new y coordinate of the starting point of the ellipse.
   * @return {undefined}
   */
  set Y(value) {
    this.StartingPoint.Y = value;
  }

  /**
   * Gets the x radius for the ellipse.
   *
   * @return {float} the x radius for the ellipse.
   */
  get RadiusX() {
    return this.radiusX;
  }

  /**
   * Specifies the x radius for the ellipse.
   *
   * @param  {float} value the new x radius for the ellipse.
   * @return {undefined}
   */
  set RadiusX(value) {
    /** @private */
    this.radiusX = value;
  }

  /**
   * Gets the y radius for the ellipse.
   *
   * @return {float} the y radius for the ellipse.
   */
  get RadiusY() {
    return this.radiusY;
  }

  /**
   * Specifies the y radius for the ellipse.
   *
   * @param  {float} value the new y radius for the ellipse.
   * @return {undefined}
   */
  set RadiusY(value) {
    /** @private */
    this.radiusY = value;
  }

  /**
   * Gets the ellipse's rotation
   *
   * @return {float} the ellipse's rotation
   */
  get Rotation() {
    return this.rotation;
  }

  /**
   * Specifies the ellipse's rotation
   *
   * @param  {float} value the new ellipse's rotation
   * @return {undefined}
   */
  set Rotation(value) {
    /** @private */
    this.rotation = value;
  }

  /**
  * Draws the ellipse to the current context.
  * @return {undefined}
  */
  draw() {
    this.Context.beginPath();
    this.Context.ellipse(
      this.Point.X,
      this.Point.Y,
      this.RadiusX,
      this.RadiusY,
      this.Rotation,
      0,
      2 * Math.PI,
    );
    this.Context.fill();
    this.Context.stroke();
    this.Context.closePath();
  }
}
export default Ellipse;
