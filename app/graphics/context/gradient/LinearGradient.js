import Gradient from './Gradient';

export default class LinearGradient extends Gradient {
  constructor(context, x0, y0, x1, y1) {
    super(context);
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
  }

  BuildGradient() {
    const gradient = this.context.createLinearGradient(
      this.x0, this.y0, this.x1, this.y1,
    );
    for (let i = 0; i < this.colors.length; i += 1) {
      const offSet = this.colors[i].Offset;
      const color = this.colors[i].Color;
      gradient.addColorStop(offSet, color);
    }
    return gradient;
  }
}
