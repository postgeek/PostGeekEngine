import Point from 'core/Point';
import Scene from 'gameEngine/scene/Scene';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Circle from 'renderingEngine/geometry/Circle';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import TextStyle from 'renderingEngine/text/TextStyle';
import Color from 'renderingEngine/colors/Color';
import RGBAColor from 'renderingEngine/colors/RGBAColor';
import HSLAColor from 'renderingEngine/colors/HSLAColor';
import ColorConverter from 'renderingEngine/colors/ColorConverter';
import TextInput from 'HUDEngine/components/TextInput';
import Button from 'HUDEngine/components/Button';
import LinearGradient from 'renderingEngine/colors/gradient/LinearGradient';

import NumberRangeValidator from 'HUDEngine/validators/NumberRangeValidator';
import TextLengthValidator from 'HUDEngine/validators/TextLengthValidator';

/*
  https://www.script-tutorials.com/html5-canvas-image-zoomer/
*/

export default class ColorDemoScene extends Scene {
  create() {
    this.textStyle = new TextStyle({
      font: '14px Rockwell',
      fillStyle: Color.WHITE,
    });

    const rectangleColor = Color.GOLDENROD;

    this.rgbColor = rectangleColor.rgbaColor;
    this.hslColor = rectangleColor.hslaColor;

    this.saveButton = new Button(new Point(400, 150), 'save color', (event) => this.handleSaveColorButtonClick(event));
    this.clearButton = new Button(new Point(490, 150), 'clear', (event) => this.handleClearButtonClick(event));
    this.randomButton = new Button(new Point(544, 150), 'random', (event) => this.handleRandomButtonClick(event));

    this.rectangle = new Rectangle(new Point(5, 5), 150, 150);
    this.rectangle.geometryStyle.fillStyle = this.rgbColor;
    this.rectangle.geometryStyle.strokeStyle = Color.WHITE;
    this.rectangle.geometryStyle.lineWidth = 5;

    this.colorRectangles = [];
    this.savedRectangles = [];
    this.maxSavedRectangles = 30;
    this.currentSavedRectanglesIndex = 0;

    this.createRGBColorComponents();
    this.createHSLColorComponents();

    this.updateRGBRectangles(this.rgbColor);
    this.updateHSLRectangles(this.hslColor);
  }

  createHSLColorComponents() {
    const lsValidator = new NumberRangeValidator(0, 100);
    const hueValidator = new NumberRangeValidator(0, 360);
    const textLengthValidator = new TextLengthValidator(3);

    this.rectangleHue = new Rectangle(new Point(425, 5), 360, 30);
    const rectangleHueSelectorGeometryStyle = new GeometryStyle({
      fillStyle: Color.BLACK,
      lineWidth: 1,
    });
    this.rectangleHueSelectorOriginalX = 425;
    this.rectangleHueSelector = new Rectangle(new Point(this.rectangleHueSelectorOriginalX, 5), 1, 30);
    this.rectangleHueSelector.geometryStyle = rectangleHueSelectorGeometryStyle;

    const circleHueSelectorGeometryStyle = new GeometryStyle({
      strokeStyle: Color.BLACK,
      fillStyle: this.hslColor,
      lineWidth: 2,
    });
    this.circleHueSelectorOriginalX = 425;
    this.circleHueSelector = new Circle(new Point(525, 20), 8);
    this.circleHueSelector.geometryStyle = circleHueSelectorGeometryStyle;

    this.rectangleSaturation = new Rectangle(new Point(425, 35), 360, 30);
    const rectangleSaturationSelectorGeometryStyle = new GeometryStyle({
      fillStyle: Color.BLACK,
      lineWidth: 1,
    });
    this.rectangleSaturationSelectorOriginalX = 425;
    this.rectangleSaturationSelector = new Rectangle(new Point(this.rectangleSaturationSelectorOriginalX, 35), 1, 30);
    this.rectangleSaturationSelector.geometryStyle = rectangleSaturationSelectorGeometryStyle;

    const circleSaturationSelectorGeometryStyle = new GeometryStyle({
      strokeStyle: Color.BLACK,
      fillStyle: this.hslColor,
      lineWidth: 2,
    });
    this.circleSaturationSelectorOriginalX = 425;
    this.circleSaturationSelector = new Circle(new Point(525, 50), 8);
    this.circleSaturationSelector.geometryStyle = circleSaturationSelectorGeometryStyle;

    this.rectangleLightness = new Rectangle(new Point(425, 65), 360, 30);
    const rectangleLightnessSelectorGeometryStyle = new GeometryStyle({
      fillStyle: Color.BLACK,
      lineWidth: 1,
    });
    this.rectangleLightnessSelectorOriginalX = 425;
    this.rectangleLightnessSelector = new Rectangle(new Point(this.rectangleLightnessSelectorOriginalX, 65), 1, 30);
    this.rectangleLightnessSelector.geometryStyle = rectangleLightnessSelectorGeometryStyle;

    const circleLightnessSelectorGeometryStyle = new GeometryStyle({
      strokeStyle: Color.BLACK,
      fillStyle: this.hslColor,
      lineWidth: 2,
    });
    this.circleLightnessSelectorOriginalX = 425;
    this.circleLightnessSelector = new Circle(new Point(525, 80), 8);
    this.circleLightnessSelector.geometryStyle = circleLightnessSelectorGeometryStyle;

    this.hueTextGraphic = new TextGraphic(new Point(200, 180), 'Hue: ');
    this.textInputHue = new TextInput(new Point(280, 162), 40);
    this.textInputHue.text = this.hslColor.hue;
    this.textInputHue.addValidator(textLengthValidator);
    this.textInputHue.addValidator(hueValidator);

    this.saturationTextGraphic = new TextGraphic(new Point(200, 210), 'Saturation: ');
    this.textInputSaturation = new TextInput(new Point(280, 192), 40);
    this.textInputSaturation.text = this.hslColor.saturation;
    this.textInputSaturation.addValidator(textLengthValidator);
    this.textInputSaturation.addValidator(lsValidator);

    this.lightnessTextGraphic = new TextGraphic(new Point(200, 240), 'Lightness: ');
    this.textInputLightness = new TextInput(new Point(280, 222), 40);
    this.textInputLightness.text = this.hslColor.lightness;
    this.textInputLightness.addValidator(textLengthValidator);
    this.textInputLightness.addValidator(lsValidator);

    this.hslTextGraphic = new TextGraphic(new Point(200, 270), this.hslColor.toString());
    this.hslTextGraphic.textStyle = this.textStyle;

    this.hueTextGraphic.textStyle = this.textStyle;
    this.saturationTextGraphic.textStyle = this.textStyle;
    this.lightnessTextGraphic.textStyle = this.textStyle;

    this.circleLightnessSelector.isVisible = false;
    this.circleSaturationSelector.isVisible = false;
  }

  createRGBColorComponents() {
    const rgbNumberValidator = new NumberRangeValidator(0, 255);
    const textLengthValidator = new TextLengthValidator(3);

    this.rectangleRed = new Rectangle(new Point(160, 5), 255, 30);
    const rectangleRedSelectorGeometryStyle = new GeometryStyle({
      fillStyle: Color.BLACK,
      lineWidth: 1,
    });
    this.rectangleRedSelectorOriginalX = 160;
    this.rectangleRedSelector = new Rectangle(new Point(this.rectangleRedSelectorOriginalX, 5), 1, 30);
    this.rectangleRedSelector.geometryStyle = rectangleRedSelectorGeometryStyle;

    this.rectangleGreen = new Rectangle(new Point(160, 35), 255, 30);
    const rectangleGreenSelectorGeometryStyle = new GeometryStyle({
      fillStyle: Color.BLACK,
      lineWidth: 1,
    });
    this.rectangleGreenSelectorOriginalX = 160;
    this.rectangleGreenSelector = new Rectangle(new Point(this.rectangleGreenSelectorOriginalX, 35), 1, 30);
    this.rectangleGreenSelector.geometryStyle = rectangleGreenSelectorGeometryStyle;

    this.rectangleBlue = new Rectangle(new Point(160, 65), 255, 30);
    const rectangleBlueSelectorGeometryStyle = new GeometryStyle({
      fillStyle: Color.BLACK,
      lineWidth: 1,
    });
    this.rectangleBlueSelectorOriginalX = 160;
    this.rectangleBlueSelector = new Rectangle(new Point(this.rectangleBlueSelectorOriginalX, 65), 1, 30);
    this.rectangleBlueSelector.geometryStyle = rectangleBlueSelectorGeometryStyle;

    this.redTextGraphic = new TextGraphic(new Point(20, 180), 'Red: ');
    this.textInputRed = new TextInput(new Point(100, 162), 40);
    this.textInputRed.text = this.rgbColor.red;
    this.textInputRed.addValidator(rgbNumberValidator);
    this.textInputRed.addValidator(textLengthValidator);

    this.greenTextGraphic = new TextGraphic(new Point(20, 210), 'Green: ');
    this.textInputGreen = new TextInput(new Point(100, 192), 40);
    this.textInputGreen.text = this.rgbColor.green;
    this.textInputGreen.addValidator(rgbNumberValidator);
    this.textInputGreen.addValidator(textLengthValidator);

    this.blueTextGraphic = new TextGraphic(new Point(20, 240), 'Blue: ');
    this.textInputBlue = new TextInput(new Point(100, 222), 40);
    this.textInputBlue.text = this.rgbColor.blue;
    this.textInputBlue.addValidator(rgbNumberValidator);
    this.textInputBlue.addValidator(textLengthValidator);

    this.rgbTextGraphic = new TextGraphic(new Point(20, 270), this.rgbColor.toString());
    this.rgbTextGraphic.textStyle = this.textStyle;

    const textStyleRed = this.textStyle.clone();
    textStyleRed.fillStyle = Color.RED;

    const textStyleGreen = this.textStyle.clone();
    textStyleGreen.fillStyle = Color.GREEN;

    const textStyleBlue = this.textStyle.clone();
    textStyleBlue.fillStyle = Color.BLUE;

    this.redTextGraphic.textStyle = textStyleRed;
    this.greenTextGraphic.textStyle = textStyleGreen;
    this.blueTextGraphic.textStyle = textStyleBlue;
  }

  hasRGBColorTextChanged() {
    const red = Math.round(this.rgbColor.red).toString();
    const green = Math.round(this.rgbColor.green).toString();
    const blue = Math.round(this.rgbColor.blue).toString();
    const redInput = this.textInputRed.text.toString() ? this.textInputRed.text.toString() : '0';
    const greenInput = this.textInputGreen.text.toString() ? this.textInputGreen.text.toString() : '0';
    const blueInput = this.textInputBlue.text.toString() ? this.textInputBlue.text.toString() : '0';
    return (red !== redInput || green !== greenInput || blue !== blueInput);
  }

  hasHSLColorTextChanged() {
    const hue = Math.round(this.hslColor.hue).toString();
    const saturation = Math.round(this.hslColor.saturation).toString();
    const lightness = Math.round(this.hslColor.lightness).toString();
    const hueInput = this.textInputHue.text.toString() ? this.textInputHue.text.toString() : '0';
    const saturationInput = this.textInputSaturation.text.toString() ? this.textInputSaturation.text.toString() : '0';
    const lightnessInput = this.textInputLightness.text.toString() ? this.textInputLightness.text.toString() : '0';
    return (hue !== hueInput || saturation !== saturationInput || lightness !== lightnessInput);
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

    this.updateRGBRectangles(this.rgbColor);
    this.updateHSLRectangles(this.hslColor);
    this.updateColorTextGraphics();
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

    this.updateRGBRectangles(this.rgbColor);
    this.updateHSLRectangles(this.hslColor);
    this.updateColorTextGraphics();
  }

  updateColorTextGraphics() {
    this.hslTextGraphic.text = this.hslColor.toString();
    this.rgbTextGraphic.text = this.rgbColor.toString();
  }

  updateHSLRectangles(hslColor) {
    const hue = Math.round(hslColor.hue);
    const saturation = Math.round(hslColor.saturation);
    const lightness = Math.round(hslColor.lightness);
    this.rectangleHueSelector.point.x = this.rectangleHueSelectorOriginalX + hue;
    this.circleHueSelector.point.x = this.circleHueSelectorOriginalX + hue;
    this.circleSaturationSelector.point.x = this.circleSaturationSelectorOriginalX + saturation * 3.6;
    this.circleLightnessSelector.point.x = this.circleLightnessSelectorOriginalX + lightness * 3.6;
    this.circleHueSelector.geometryStyle.fillStyle = new HSLAColor(this.hslColor.hue, 100, 50, 1);
    this.rectangleSaturationSelector.point.x = this.rectangleSaturationSelectorOriginalX + saturation * 3.6;
    this.rectangleLightnessSelector.point.x = this.rectangleLightnessSelectorOriginalX + lightness * 3.6;

    const linearGradientHue = new LinearGradient(new Point(425, 30), new Point(785, 30));
    for (let gradientHue = 0; gradientHue <= 360; gradientHue += 60) {
      linearGradientHue.addColorStop(gradientHue / 360, new HSLAColor(gradientHue, saturation, lightness, 1));
    }
    this.rectangleHue.geometryStyle.fillStyle = linearGradientHue.buildGradient();

    const linearGradientSaturation = new LinearGradient(new Point(425, 30), new Point(785, 30));
    linearGradientSaturation.addColorStop(0, new HSLAColor(hue, 0, lightness, 1));
    linearGradientSaturation.addColorStop(1, new HSLAColor(hue, 100, lightness, 1));
    this.rectangleSaturation.geometryStyle.fillStyle = linearGradientSaturation.buildGradient();

    const linearGradientLightness = new LinearGradient(new Point(425, 30), new Point(785, 30));
    linearGradientLightness.addColorStop(0, new HSLAColor(hue, saturation, 0, 1));
    linearGradientLightness.addColorStop(0.5, new HSLAColor(hue, saturation, 50, 1));
    linearGradientLightness.addColorStop(1, new HSLAColor(hue, saturation, 100, 1));
    this.rectangleLightness.geometryStyle.fillStyle = linearGradientLightness.buildGradient();
  }

  updateRGBRectangles(rgbColor) {
    const red = Math.round(rgbColor.red);
    const green = Math.round(rgbColor.green);
    const blue = Math.round(rgbColor.blue);
    this.rectangleRedSelector.point.x = this.rectangleRedSelectorOriginalX + red;
    this.rectangleGreenSelector.point.x = this.rectangleGreenSelectorOriginalX + green;
    this.rectangleBlueSelector.point.x = this.rectangleBlueSelectorOriginalX + blue;

    const linearGradientRed = new LinearGradient(new Point(160, 20), new Point(415, 20));
    linearGradientRed.addColorStop(0, new RGBAColor(0, green, blue, 1));
    linearGradientRed.addColorStop(1, new RGBAColor(255, green, blue, 1));
    this.rectangleRed.geometryStyle.fillStyle = linearGradientRed.buildGradient();

    const linearGradientBlue = new LinearGradient(new Point(160, 20), new Point(415, 20));
    linearGradientBlue.addColorStop(0, new RGBAColor(red, green, 0, 1));
    linearGradientBlue.addColorStop(1, new RGBAColor(red, green, 255, 1));
    this.rectangleBlue.geometryStyle.fillStyle = linearGradientBlue.buildGradient();

    const linearGradientGreen = new LinearGradient(new Point(160, 20), new Point(415, 20));
    linearGradientGreen.addColorStop(0, new RGBAColor(red, 0, blue, 1));
    linearGradientGreen.addColorStop(1, new RGBAColor(red, 255, blue, 1));
    this.rectangleGreen.geometryStyle.fillStyle = linearGradientGreen.buildGradient();
  }

  update() {
    if (this.game.Mouse.buttonPressed()) {
      // TODO REFACTOR ALL THIS
      const iterator = ['hue', 'saturation', 'lightness', 'red', 'green', 'blue'];
      for (let i = 0; i < iterator.length; i += 1) {
        const mouseX = this.game.Mouse.x;
        const mouseY = this.game.Mouse.y;
        const input = this.getColorRectangle(iterator[i]);
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
          this.updateColorFromRectangle(iterator[i], mouseX - minX);
        }
      }
    }
    // TODO DONE REFACTOR

    if (this.hasRGBColorTextChanged()) {
      this.recalculateRectangleHSLColor();
    }
    if (this.hasHSLColorTextChanged()) {
      this.recalculateRectangleRGBColor();
    }
  }

  // TODO REFACTOR
  getColorRectangle(color) {
    switch (color) {
      case 'hue':
        return this.rectangleHue;
      case 'saturation':
        return this.rectangleSaturation;
      case 'lightness':
        return this.rectangleLightness;
      case 'red':
        return this.rectangleRed;
      case 'green':
        return this.rectangleGreen;
      case 'blue':
        return this.rectangleBlue;
      default:
    }
  }

  handleRandomButtonClick(clicked) {
    if (clicked) {
      const hue = Math.round(Math.random() * 360);
      const saturation = Math.round(Math.random() * 100);
      const lightness = Math.round(Math.random() * 100);
      this.addSavedRectangle(new HSLAColor(hue, saturation, lightness, 1));
    }
  }

  handleClearButtonClick(clicked) {
    if (clicked) {
      this.currentSavedRectanglesIndex = 0;
      this.savedRectangles = [];
    }
  }

  handleSaveColorButtonClick(clicked) {
    if (clicked) {
      this.addSavedRectangle(this.hslColor.clone());
    }
  }

  addSavedRectangle(color) {
    if (this.maxSavedRectangles - 1 < this.currentSavedRectanglesIndex) {
      this.currentSavedRectanglesIndex = 0;
    }
    const offsetX = this.currentSavedRectanglesIndex % 10;
    const offsetY = Math.floor(this.currentSavedRectanglesIndex / 10);
    const savedRectangle = new Rectangle(
      new Point(400 + (offsetX * 25), 190 + (offsetY * 25)), 20, 20,
    );
    savedRectangle.geometryStyle = new GeometryStyle({
      fillStyle: color,
      strokeStyle: Color.WHITE,
      lineWidth: 2,
    });
    this.savedRectangles[this.currentSavedRectanglesIndex] = savedRectangle;
    this.currentSavedRectanglesIndex += 1;
  }

  updateColorFromRectangle(color, value) {
    switch (color) {
      case 'hue':
        this.textInputHue.text = value;
        break;
      case 'saturation':
        this.textInputSaturation.text = Math.round(value / 3.6);
        break;
      case 'lightness':
        this.textInputLightness.text = Math.round(value / 3.6);
        break;
      case 'red':
        this.textInputRed.text = value;
        break;
      case 'green':
        this.textInputGreen.text = value;
        break;
      case 'blue':
        this.textInputBlue.text = value;
        break;
      default:
    }
  }
  // END REFACTOR

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

    this.rectangleHue.draw();
    this.rectangleHueSelector.draw();
    this.circleHueSelector.draw();

    this.rectangleSaturation.draw();
    this.rectangleSaturationSelector.draw();
    // this.circleSaturationSelector.draw();

    this.rectangleLightness.draw();
    this.rectangleLightnessSelector.draw();
    // this.circleLightnessSelector.draw();

    this.rectangleRed.draw();
    this.rectangleRedSelector.draw();

    this.rectangleGreen.draw();
    this.rectangleGreenSelector.draw();

    this.rectangleBlue.draw();
    this.rectangleBlueSelector.draw();

    this.saveButton.draw();
    this.clearButton.draw();
    this.randomButton.draw();

    for (let i = 0; i < this.savedRectangles.length; i += 1) {
      this.savedRectangles[i].draw();
    }
  }
}
