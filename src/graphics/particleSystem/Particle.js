class Particle {
  constructor(graphicObject) {
    this.GraphicObject = graphicObject;

    this.TimeToLive = 200;
  }

  get GraphicObject() {
    return this.graphicObject;
  }

  set GraphicObject(value) {
    this.graphicObject = value;
  }

  update() {
    this.GraphicObject.Point.X += 1;
    this.TimeToLive -= 1;
    if (this.TimeToLive <= 0) {
      this.Destroy = true;
    }
  }

  draw() {
    this.GraphicObject.draw();
  }
}
export default Particle;
