class Container {
  constructor(point, width, height) {
    this.Point = point;
    this.Width = width;
    this.Height = height;
    this.components = [];
  }

  /**
   * The upper right corner of the container
   */
  set Point(value) {
    this.point = value;
  }

  get Point() {
    return this.point;
  }

  /**
  * The rectangle's width.
  */
  get Width() {
    return this.width;
  }

  set Width(value) {
    this.width = value;
  }

  /**
  * The rectangle's height.
  */
  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }

  /**
  * Gets the compontents for the given container
  */
  get Components() {
    return this.components;
  }

  /**
   * Adds a graphicobject to the container
   */
  add(graphicObject) {
    this.components.push(graphicObject);
  }

  /**
  * Draws the container to the current context.
  */
  draw() {
    for (let i = 0; i < this.Components.length; i += 1) {
      const component = this.Components[i];
      component.draw();
    }
  }
} export default Container;
