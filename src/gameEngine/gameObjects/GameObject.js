class GameObject {
  /**
  * Constructor for the GameObject
  * @param {Scene} scene The scene the game object is found in
  */
  constructor(scene) {
    this._scene = scene;
  }

  /**
  * Get the scene this object is part of.
  * @returns {Scene} The scene
  */
  get scene() {
    return this._scene;
  }

  /**
   * Get the graphics component
   * @returns {GraphicsComponent} The graphics component
   */
  get graphics() {
    return this._graphics;
  }

  /**
   * Set the graphics component
   * @param {GraphicsComponent} value The graphics component value
   */
  set graphics(value) {
    this._graphics = value;
  }

  /**
   * Get the physics component
   * @returns {PhysicsComponent} The physics component
   */
  get physics() {
    return this._physics;
  }

  /**
   * Set the physics component
   * @param {PhysicsComponent} value The physics component value
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
    if (this._physics && this._physics.update) {
      this._physics.update(this);
    }

    if (this._graphics && this._graphics.update) {
      this._graphics.update(this);
    }
  }

  /**
   * Draw the game object. This also calls draw on the graphics component.
   */
  draw() {
    if (this._graphics && this._graphics.draw) {
      this._graphics.draw();
    }
  }
}

export default GameObject;
