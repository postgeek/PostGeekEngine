export default class Sprite {
  constructor(x, y, width, height, spriteSheet) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.spriteSheet = spriteSheet;
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

  get SpriteSheet() {
    return this.spriteSheet;
  }

  set SpriteSheet(value) {
    this.spriteSheet = value;
  }

  Render(context) {
    context.drawImage(this.spriteSheet, this.x, this.y, this.width, this.height);
  }
}
