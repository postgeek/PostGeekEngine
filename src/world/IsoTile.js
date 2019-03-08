import IsoPoint from './IsoPoint';

export default class IsoTile {
  constructor(x, y, z, width, height) {
    this.points = [
      new IsoPoint(x, y, z),
      new IsoPoint(x, y - 1, z),
      new IsoPoint(x - 1, y - 1, z),
      new IsoPoint(x - 1, y, z),
    ];

    this.width = width;
    this.height = height;
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
}
