import HSLAColor from './HSLColor';
import RGBAColor from './RGBColor';
/**
 * Defines a color converter used to convert colors from one form to another.
 * If Red is max, then Hue = (G-B)/(max-min)
If Green is max, then Hue = 2.0 + (B-R)/(max-min)
If Blue is max, then Hue = 4.0 + (R-G)/(max-min)
 */
class ColorConverter {
  static RGBToHSL(rgbColor) {
    let {
      red, green, blue,
    } = rgbColor;
    const {
      alpha,
    } = rgbColor;
    const maxValue = 255;

    red /= maxValue;
    green /= maxValue;
    blue /= maxValue;

    const min = Math.min(red, green, blue);
    const max = Math.max(red, green, blue);
    const delta = max - min;

    let lightness = (min + max) / 2;
    let saturation = 0;
    let hue = 0;

    if (delta !== 0) {
      if (lightness > 0.5) {
        saturation = (delta / (2.0 - delta));
      } else {
        saturation = (delta / (max + min));
      }

      if (red === max) {
        hue = ((green - blue) / delta) + (green < blue ? 6 : 0);
      } else if (green === max) {
        hue = (blue - red) / delta + 2;
      } else if (blue === max) {
        hue = (red - green) / delta + 4;
      }
    }

    hue /= 6;

    hue *= 360;
    saturation *= 100;
    lightness *= 100;

    return new HSLAColor(hue, saturation, lightness, alpha);
  }

  /**
   * Wiki: https://en.wikipedia.org/wiki/HSL_and_HSV
   * Proof: https://jsfiddle.net/Lamik/reuk63ay
   * Assumes h is in the set [0 ,360]
   * s, and l are contained in the set [0, 1] and
   * returns r, g, and b in the set [0, 255].
   *
   * @param   {HSLColor}  hslColor  The HSL representation
   * @return  {RGBColor}            The RGB representation
   */
  static HSLToRGB(hslColor) {
    let {
      saturation, lightness,
    } = hslColor;
    const {
      hue, alpha,
    } = hslColor;

    saturation /= 100;
    lightness /= 100;

    const a = saturation * Math.min(lightness, 1 - lightness);
    const func = (n, k = (n + hue / 30) % 12) => lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    const red = Math.round(func(0) * 255);
    const green = Math.round(func(8) * 255);
    const blue = Math.round(func(4) * 255);

    return new RGBAColor(red, green, blue, alpha);
  }
} export default ColorConverter;
