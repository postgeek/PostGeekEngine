class GraphicObject {
  /**
  * Constructs a new GraphicObject.
  */
  constructor(context) {
    this.Context = context;
  }

  /**
  * The canvas's context.
  */
  get Context() {
    return this.context;
  }

  set Context(value) {
    this.context = value;
  }
}
export default GraphicObject;
