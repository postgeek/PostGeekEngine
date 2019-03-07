export default class GraphicObject {
  constructor(context) {
    this.Context = context;
  }

  get Context() {
    return this.context;
  }

  set Context(value) {
    this.context = value;
  }
}
