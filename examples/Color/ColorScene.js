import Point from 'core/Point';
import Scene from 'gameEngine/scene/Scene';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import TextStyle from 'renderingEngine/text/TextStyle';
import Color from 'renderingEngine/colors/Color';
import ColorConverter from 'renderingEngine/colors/ColorConverter';
import KeyboardKey from 'inputEngine/KeyboardKey';
import Keyboard from 'inputEngine/KeyboardKey';
import Input from 'HUDEngine/components/Input';
import LinearGradient from 'renderingEngine/colors/gradient/LinearGradient';

import NumberRangeValidator from 'HUDEngine/validators/NumberRangeValidator';
import TextLengthValidator from 'HUDEngine/validators/TextLengthValidator';

export default class ColorDemoScene extends Scene {
  create() {
    const textStyle = new TextStyle({
      font: '14px Rockwell',
      fillStyle: Color.WHITE,
    });

    const rgbNumberValidator = new NumberRangeValidator(0, 255);
    const lsValidator = new NumberRangeValidator(0, 100);
    const hueValidator = new NumberRangeValidator(0, 360);
    const textLengthValidator = new TextLengthValidator(3);

    const rectangleColor = Color.GOLDENROD;

    this.rgbColor = rectangleColor.rgbaColor;
    this.hslColor = rectangleColor.hslaColor;

    this.textGraphic = new TextGraphic(new Point(100, 300), 'Test');
    this.textGraphic.textStyle = textStyle;

    this.rectangle = new Rectangle(new Point(5, 5), 150, 150);
    this.rectangle.geometryStyle.fillStyle = this.rgbColor;

    const linearGradientRed = new LinearGradient(new Point(160, 20), new Point(415, 20));
    linearGradientRed.addColorStop(0, Color.WHITE);
    linearGradientRed.addColorStop(1, Color.RED);
    this.rectangleRed = new Rectangle(new Point(160, 5), 255, 30);
    this.rectangleRed.geometryStyle.fillStyle = linearGradientRed.buildGradient();

    const rectangleRedSelectorGeometryStyle = new GeometryStyle({
      fillStyle: Color.BLACK,
      lineWidth: 1,
    });
    this.rectangleRedSelectorOriginalX = 160;
    this.rectangleRedSelector = new Rectangle(new Point(this.rectangleRedSelectorOriginalX, 5), 1, 30);
    this.rectangleRedSelector.geometryStyle = rectangleRedSelectorGeometryStyle;

    const linearGradientGreen = new LinearGradient(new Point(160, 20), new Point(415, 20));
    linearGradientGreen.addColorStop(0, Color.WHITE);
    linearGradientGreen.addColorStop(1, Color.GREEN);
    this.rectangleGreen = new Rectangle(new Point(160, 35), 255, 30);
    this.rectangleGreen.geometryStyle.fillStyle = linearGradientGreen.buildGradient();

    const rectangleGreenSelectorGeometryStyle = new GeometryStyle({
      fillStyle: Color.BLACK,
      lineWidth: 1,
    });
    this.rectangleGreenSelectorOriginalX = 160;
    this.rectangleGreenSelector = new Rectangle(new Point(this.rectangleGreenSelectorOriginalX, 35), 1, 30);
    this.rectangleGreenSelector.geometryStyle = rectangleGreenSelectorGeometryStyle;

    const linearGradientBlue = new LinearGradient(new Point(160, 20), new Point(415, 20));
    linearGradientBlue.addColorStop(0, Color.WHITE);
    linearGradientBlue.addColorStop(1, Color.BLUE);
    this.rectangleBlue = new Rectangle(new Point(160, 65), 255, 30);
    this.rectangleBlue.geometryStyle.fillStyle = linearGradientBlue.buildGradient();

    const rectangleBlueSelectorGeometryStyle = new GeometryStyle({
      fillStyle: Color.BLACK,
      lineWidth: 1,
    });
    this.rectangleBlueSelectorOriginalX = 160;
    this.rectangleBlueSelector = new Rectangle(new Point(this.rectangleBlueSelectorOriginalX, 65), 1, 30);
    this.rectangleBlueSelector.geometryStyle = rectangleBlueSelectorGeometryStyle;

    this.redTextGraphic = new TextGraphic(new Point(20, 180), 'Red: ');
    this.textInputRed = new Input(new Point(100, 162), 40);
    this.textInputRed.text = this.rgbColor.red;
    this.textInputRed.addValidator(rgbNumberValidator);
    this.textInputRed.addValidator(textLengthValidator);

    this.greenTextGraphic = new TextGraphic(new Point(20, 210), 'Green: ');
    this.textInputGreen = new Input(new Point(100, 192), 40);
    this.textInputGreen.text = this.rgbColor.green;
    this.textInputGreen.addValidator(rgbNumberValidator);
    this.textInputGreen.addValidator(textLengthValidator);

    this.blueTextGraphic = new TextGraphic(new Point(20, 240), 'Blue: ');
    this.textInputBlue = new Input(new Point(100, 222), 40);
    this.textInputBlue.text = this.rgbColor.blue;
    this.textInputBlue.addValidator(rgbNumberValidator);
    this.textInputBlue.addValidator(textLengthValidator);

    this.hueTextGraphic = new TextGraphic(new Point(200, 180), 'Hue: ');
    this.textInputHue = new Input(new Point(280, 162), 40);
    this.textInputHue.text = this.hslColor.hue;
    this.textInputHue.addValidator(textLengthValidator);
    this.textInputHue.addValidator(hueValidator);

    this.saturationTextGraphic = new TextGraphic(new Point(200, 210), 'Saturation: ');
    this.textInputSaturation = new Input(new Point(280, 192), 40);
    this.textInputSaturation.text = this.hslColor.saturation;
    this.textInputSaturation.addValidator(textLengthValidator);
    this.textInputSaturation.addValidator(lsValidator);

    this.lightnessTextGraphic = new TextGraphic(new Point(200, 240), 'Lightness: ');
    this.textInputLightness = new Input(new Point(280, 222), 40);
    this.textInputLightness.text = this.hslColor.lightness;
    this.textInputLightness.addValidator(textLengthValidator);
    this.textInputLightness.addValidator(lsValidator);

    this.hslTextGraphic = new TextGraphic(new Point(200, 270), this.hslColor.toString());
    this.rgbTextGraphic = new TextGraphic(new Point(20, 270), this.rgbColor.toString());

    this.hslTextGraphic.textStyle = textStyle;
    this.rgbTextGraphic.textStyle = textStyle;

    const textStyleRed = textStyle.clone();
    textStyleRed.fillStyle = Color.RED;

    const textStyleGreen = textStyle.clone();
    textStyleGreen.fillStyle = Color.GREEN;

    const textStyleBlue = textStyle.clone();
    textStyleBlue.fillStyle = Color.BLUE;

    this.redTextGraphic.textStyle = textStyleRed;
    this.greenTextGraphic.textStyle = textStyleGreen;
    this.blueTextGraphic.textStyle = textStyleBlue;

    this.hueTextGraphic.textStyle = textStyle;
    this.saturationTextGraphic.textStyle = textStyle;
    this.lightnessTextGraphic.textStyle = textStyle;

    this.rectangleRedSelector.point.x = this.rectangleRedSelectorOriginalX + Math.round(this.rgbColor.red);
    this.rectangleGreenSelector.point.x = this.rectangleGreenSelectorOriginalX + Math.round(this.rgbColor.green);
    this.rectangleBlueSelector.point.x = this.rectangleBlueSelectorOriginalX + Math.round(this.rgbColor.blue);

    this.inputs = [];
    this.inputs.push(this.textInputRed);
    this.inputs.push(this.textInputGreen);
    this.inputs.push(this.textInputBlue);
    this.inputs.push(this.textInputHue);
    this.inputs.push(this.textInputSaturation);
    this.inputs.push(this.textInputLightness);
  }

  hasRGBColorTextChanged() {
    const red = Math.round(this.rgbColor.red).toString();
    const green = Math.round(this.rgbColor.green).toString();
    const blue = Math.round(this.rgbColor.blue).toString();
    const redInput = this.textInputRed.text.toString() ? this.textInputRed.text.toString() : '0';
    const greenInput = this.textInputGreen.text.toString() ? this.textInputGreen.text.toString() : '0';
    const blueInput = this.textInputBlue.text.toString() ? this.textInputBlue.text.toString() : '0';
    if (red !== redInput || green !== greenInput || blue !== blueInput) {
      this.recalculateRectangleHSLColor();
    }
  }

  hasHSLColorTextChanged() {
    const hue = Math.round(this.hslColor.hue).toString();
    const saturation = Math.round(this.hslColor.saturation).toString();
    const lightness = Math.round(this.hslColor.lightness).toString();
    const hueInput = this.textInputHue.text.toString() ? this.textInputHue.text.toString() : '0';
    const saturationInput = this.textInputSaturation.text.toString() ? this.textInputSaturation.text.toString() : '0';
    const lightnessInput = this.textInputLightness.text.toString() ? this.textInputLightness.text.toString() : '0';
    if (hue !== hueInput || saturation !== saturationInput || lightness !== lightnessInput) {
      this.recalculateRectangleRGBColor();
    }
  }

  recalculateRectangleHSLColor() {
    this.rgbColor.red = this.textInputRed.text;
    this.rgbColor.green = this.textInputGreen.text;
    this.rgbColor.blue = this.textInputBlue.text;
    this.rectangle.geometryStyle.fillStyle = this.rgbColor;

    this.hslColor = ColorConverter.RGBToHSL(this.rgbColor);
    this.textInputHue.text = Math.round(this.hslColor.hue);
    this.textInputSaturation.text = Math.round(this.hslColor.saturation);
    this.textInputLightness.text = Math.round(this.hslColor.lightness);

    this.rectangleRedSelector.point.x = this.rectangleRedSelectorOriginalX + Math.round(this.rgbColor.red);
    this.rectangleGreenSelector.point.x = this.rectangleGreenSelectorOriginalX + Math.round(this.rgbColor.green);
    this.rectangleBlueSelector.point.x = this.rectangleBlueSelectorOriginalX + Math.round(this.rgbColor.blue);

    this.hslTextGraphic.text = this.hslColor.toString();
    this.rgbTextGraphic.text = this.rgbColor.toString();
  }

  recalculateRectangleRGBColor() {
    this.hslColor.hue = this.textInputHue.text;
    this.hslColor.saturation = this.textInputSaturation.text;
    this.hslColor.lightness = this.textInputLightness.text;
    this.rectangle.geometryStyle.fillStyle = this.hslColor;

    this.rgbColor = ColorConverter.HSLToRGB(this.hslColor);
    this.textInputRed.text = Math.round(this.rgbColor.red);
    this.textInputGreen.text = Math.round(this.rgbColor.green);
    this.textInputBlue.text = Math.round(this.rgbColor.blue);

    this.rectangleRedSelector.point.x = this.rectangleRedSelectorOriginalX + Math.round(this.rgbColor.red);
    this.rectangleGreenSelector.point.x = this.rectangleGreenSelectorOriginalX + Math.round(this.rgbColor.green);
    this.rectangleBlueSelector.point.x = this.rectangleBlueSelectorOriginalX + Math.round(this.rgbColor.blue);

    this.hslTextGraphic.text = this.hslColor.toString();
    this.rgbTextGraphic.text = this.rgbColor.toString();
  }

  update() {
    if (this.game.Mouse.buttonDownOnce()) {
      for (let i = 0; i < this.inputs.length; i += 1) {
        const input = this.inputs[i];
        const mouseX = this.game.Mouse.x;
        const mouseY = this.game.Mouse.y;
        const inputX = input.point.x;
        const inputY = input.point.y;
        const inputWidth = input.width;
        const inputHeight = input.height;

        const maxX = inputWidth + inputX;
        const maxY = inputHeight + inputY;
        const minX = inputX;
        const minY = inputY;

        if (minX <= mouseX && mouseX <= maxX
        && minY <= mouseY && mouseY <= maxY) {
          input.focus = true;
        } else {
          input.focus = false;
        }
      }
    }

    if (this.hasRGBColorTextChanged()) {
      this.recalculateRectangleHSLColor();
    }
    if (this.hasHSLColorTextChanged()) {
      this.recalculateRectangleRGBColor();
    }
  }

  draw() {
    this.rectangle.draw();
    this.redTextGraphic.draw();
    this.textInputRed.draw();
    this.greenTextGraphic.draw();
    this.textInputGreen.draw();
    this.blueTextGraphic.draw();
    this.textInputBlue.draw();

    this.hueTextGraphic.draw();
    this.textInputHue.draw();
    this.saturationTextGraphic.draw();
    this.textInputSaturation.draw();
    this.lightnessTextGraphic.draw();
    this.textInputLightness.draw();

    this.rgbTextGraphic.draw();
    this.hslTextGraphic.draw();

    this.rectangleRed.draw();
    this.rectangleRedSelector.draw();

    this.rectangleGreen.draw();
    this.rectangleGreenSelector.draw();

    this.rectangleBlue.draw();
    this.rectangleBlueSelector.draw();
  }
}
