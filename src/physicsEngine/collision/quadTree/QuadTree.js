import QuadTreeBox from './QuadTreeBox';

export default class QuadTree {
  // constructor(x,y,width,height) {
  constructor() {
    this._quadTreeBoxes = [];
  }

  get quadTreeBoxes() {
    return this._quadTreeBoxes;
  }

  draw() {
    this.quadTreeBoxes.forEach((quadTreeBoxes) => quadTreeBoxes.draw());
  }

  createQuadTreeBox(x, y, width, height, color) {
    const quadTreeBox = new QuadTreeBox(x, y, width, height, color);
    this._quadTreeBoxes.push(quadTreeBox);
  }
}
