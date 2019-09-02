import GraphicObject from '../renderingEngine/GraphicObject';

class GraphicComponent extends GraphicObject {
  constructor(point) {
    super();
    this._point = point;
  }

  set point(value) {
    this._point = value;
  }

  get point() {
    return this._point;
  }
} export default GraphicComponent;
