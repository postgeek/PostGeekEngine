class RenderingContext2D {
  constructor(context) {
      this.Context = context;
  }

  get Context() {
    return this.context;
  }

  set Context(value) {
    this.context = value;
  }
} export default RenderingContext2D;