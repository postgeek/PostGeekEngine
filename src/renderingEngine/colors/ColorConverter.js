import HSLColor from './HSLColor';
import RGBColor from './RGBColor';
/**
 * Defines a color converter used to convert colors from one form to another.
 * If Red is max, then Hue = (G-B)/(max-min)
If Green is max, then Hue = 2.0 + (B-R)/(max-min)
If Blue is max, then Hue = 4.0 + (R-G)/(max-min)
 */
class ColorConverter {
  static RGBToHSL(rgbColor) {
    let red = rgbColor.Red;
    let green = rgbColor.Green;
    let blue = rgbColor.Blue;
    const maxValue = 255;

    red /= maxValue;
    green /= maxValue;
    blue /= maxValue;

    const min = Math.min(red, green, blue);
    const max = Math.max(red, green, blue);

    const luminance = Math.Ciel(100 * ((min + max) / 2));
    let saturation = 0;
    let hue = 0;

    if (luminance < 0.5) {
      saturation = Math.round((max - min) / (max + min));
    } else if (luminance > 0.5) {
      saturation = Math.round((max - min) / (2.0 - max - min));
    }

    if (red === max) {
      hue = Math.round(((green - blue) / (max - min)) * 60);
    } else if (green === max) {
      hue = Math.round((2.0 + (blue - red) / (max - min)) * 60);
    } else if (blue === max) {
      hue = Math.round((4.0 + (red - green) / (max - min)) * 60);
    }
    if (hue < 0) hue += 360;

    return new HSLColor(hue, saturation, luminance);
  }

  /**
   * Wiki: https://en.wikipedia.org/wiki/HSL_and_HSV
   * Proof: https://jsfiddle.net/Lamik/reuk63ay
   * Assumes h, s, and l are contained in the set [0, 1] and
   * returns r, g, and b in the set [0, 255].
   *
   * @param   {HSLColor}  hslColor  The HSL representation
   * @return  {RGBColor}            The RGB representation
   */
  static HSLtoRGB(hslColor) {
    const { hue, saturation, lightness } = hslColor;

    const a = saturation * Math.min(lightness, lightness - 1);
    const func = (n, k = (n + hue / 30) % 12) => lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    const red = func(0);
    const green = func(8);
    const blue = func(4);

    return new RGBColor(red, green, blue);
  }
} export default ColorConverter;
