export default class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get X() {
    return this.x;
  }

  set X(value) {
    this.x = value;
  }

  get Y() {
    return this.y;
  }

  set Y(value) {
    this.y = value;
  }

  get Width() {
    return this.width;
  }

  set Width(value) {
    this.width = value;
  }

  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }

  draw(context) {
    const myContext = context;
    myContext.beginPath();
    myContext.lineWidth = '6';
    myContext.strokeStyle = 'red';
    myContext.rect(this.x, this.y, this.width, this.height);
    myContext.stroke();
  }
}
