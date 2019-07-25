class GameObject {
  /**
  * Constructor for the GameObject
  * @param {Scene} scene The scene the game object is found in
  * @param {Point} point The game objects starting point in relation to the world
  * @param {number} width The width of the game object
  * @param {number} height The height of the game object
  */
  constructor(scene, point, width, height) {
    this._scene = scene;
    this._point = point;
    this._width = width;
    this._height = height;
  }

  /**
  * Get the scene this object is part of.
  * @returns {Scene} The scene
  */
  get scene() {
    return this._scene;
  }

  /**
  * Get the game objects point in relation to the world.
  * @returns {Point} The game objects point
  */
  get point() {
    return this._point;
  }

  /**
  * Set the game objects point in relation to the world.
  * @param {Point} value The point value
  */
  set point(value) {
    this._point = value;
  }

  /**
   * Get the X coordinate of the game object in relation to the world.
   * @returns {number} the X coordinate value
   */
  get x() {
    return this._point.X;
  }

  /**
   * Set the X coordinate of the game object in relation to the world.
   * @param {number} value The X coordinate value
   */
  set x(value) {
    this._point.X = value;
  }

  /**
  * Get the Y coordinate of the game object in relation to the world.
  * @returns {number} the Y coordinate value
  */
  get y() {
    return this._point.Y;
  }

  /**
   * Set the Y coordinate of the game object in relation to the world.
   * @param {number} value The Y coordinate value
   */
  set y(value) {
    this._point = value;
  }

  /**
  * The game objects width.
  * @returns {number} the width of the box
  */
  get width() {
    return this._width;
  }

  /**
   * Set the width of the game object.
   * @param {number} value The width value
   */
  set width(value) {
    this._width = value;
  }

  /**
  * The game objects height.
  * @returns {number} the height of the box
  */
  get height() {
    return this._height;
  }

  /**
   * Set the height of the game object.
   * @param {number} value The height value
   */
  set height(value) {
    this._height = value;
  }

  /**
   * Get the graphics component
   * @returns {GraphicObject} The graphics component
   */
  get graphics() {
    return this._graphics;
  }

  /**
   * Set the graphics component
   * @param {GraphicsObject} value The graphics component value
   */
  set graphics(value) {
    this._graphics = value;
  }

  /**
   * Get the physics component
   * @returns {PhysicsObject} The physics component
   */
  get physics() {
    return this._physics;
  }

  /**
   * Set the physics component
   * @param {PhysicsObject} value The physics component value
   */
  set physics(value) {
    this._physics = value;
  }

  /**
   * Gets an object from the GameObject's internal memory using the provided key.
   *
   * @param {string} key the key of the data to retrieve.
   */
  getData(key) {
    return this._data[key];
  }

  /**
  * Sets an object to the GameObject's internal memory
  *
  * @param {string} key the key of the data to store to the GameObject's internal memory.
  * @param {object} value the object to store into the GameObject's internal memory.
  */
  setData(key, value) {
    this._data[key] = value;
  }

  /**
   * Update the game object. This also calls update on the physics and graphics components.
   */
  update() {
    if (this._physics) {
      this._physics.update();
    }

    if (this._graphics) {
      this._graphics.update();
    }
  }

  /**
   * Draw the game object. This also calls draw on the graphics component.
   */
  draw() {
    if (this._graphics) {
      this._graphics.draw();
    }
  }
}

export default GameObject;