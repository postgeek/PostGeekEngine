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

    red /= 255;
    green /= 255;
    blue /= 255;

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
      hue = Math.round(((2.0 + (blue - red) / (max - min)) * 60));
    } else if (blue === max) {
      hue = Math.round((4.0 + (red - green) / (max - min) * 60));
    }
    if (hue < 0) hue += 360;

    return new HSLColor(hue, saturation, luminance);
  }

  static HSLtoRGB(hslColor) {
    const hue = hslColor.Hue;
    const saturation = hslColor.Saturation;
    const lightness = hslColor.Lightness;
    let red;
    let blue;
    let green;

    if (saturation === 0) {
      red = (lightness * 255) / 100;
      blue = (lightness * 255) / 100;
      green = (lightness * 255) / 100;
    }


    return new RGBColor(red, blue, green);
  }
} export default ColorConverter;
