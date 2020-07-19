class GraphicsComponent {
  constructor() {
    this._graphicObjects = [];
  }

  get graphicObjects() {
    return this._graphicObjects;
  }

  set graphicObjects(value) {
    this._graphicObjects = value;
  }

  draw() {
    this._graphicObjects.forEach((obj) => obj.draw());
  }
}

export default GraphicsComponent;
