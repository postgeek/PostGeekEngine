import Point from '../../../core/Point';
import ServiceLocator from '../../../core/ServiceLocator';

import TextGraphic from '../../../renderingEngine/text/TextGraphic';
import Rectangle from '../../../renderingEngine/geometry/Rectangle';
import Circle from '../../../renderingEngine/geometry/Circle';
import GeometryStyle from '../../../renderingEngine/geometry/GeometryStyle';
import TextStyle from '../../../renderingEngine/text/TextStyle';
import Color from '../../../renderingEngine/colors/Color';
import RGBAColor from '../../../renderingEngine/colors/RGBAColor';
import HSLAColor from '../../../renderingEngine/colors/HSLAColor';
import ColorConverter from '../../../renderingEngine/colors/ColorConverter';
import TextInput from '../TextInput';
import Button from '../Button';
import LinearGradient from '../../../renderingEngine/colors/gradient/LinearGradient';
import ColorSlider from './ColorSlider';

import NumberRangeValidator from '../../validators/NumberRangeValidator';
import TextLengthValidator from '../../validators/TextLengthValidator';

/*
* TODO: ADD A BUTTON THE SHOWS THE COLOR PICKER AND HIDES IT
*/

class ColorPicker {
  constructor(point) {
    this.point = point;
    this.textStyle = new TextStyle({
      font: '14px Rockwell',
      fillStyle: Color.WHITE,
    });

    this._color = Color.GOLDENROD;

    this._mouse = ServiceLocator.instance.locate('mouse');

    this.saveButton = new Button(new Point(400, 150), 'save color', (event) => this.handleSaveColorButtonClick(event));
    this.clearButton = new Button(new Point(490, 150), 'clear', (event) => this.handleClearButtonClick(event));
    this.randomButton = new Button(new Point(544, 150), 'random', (event) => this.handleRandomButtonClick(event));

    this.colorPreviewRectangle = new Rectangle(new Point(5, 5), 150, 150);
    this.colorPreviewRectangle.geometryStyle.fillStyle = this.color;
    this.colorPreviewRectangle.geometryStyle.strokeStyle = Color.WHITE;
    this.colorPreviewRectangle.geometryStyle.lineWidth = 5;

    this.savedRectangles = [];
    this.maxSavedRectangles = 30;
    this.currentSavedRectanglesIndex = 0;

    this.colorSliders = [];

    this.hslaColor = this.color.hslaColor;
    this.rgbaColor = this.color.rgbaColor;

    this.createRGBInputs();
    this.createRGBSliders();
    this.createHSLInputs();
    this.createHSLSliders();
  }

  get mouse() {
    return this._mouse;
  }

  get color() {
    return this._color;
  }

  createHSLSliders() {
    const { hue, saturation, lightness } = this.hslaColor;
    // Hue Slider
    const linearGradientHue = new LinearGradient(new Point(425, 30), new Point(785, 30));
    for (let gradientHue = 0; gradientHue <= 360; gradientHue += 60) {
      linearGradientHue.addColorStop(gradientHue / 360, new HSLAColor(gradientHue, 100, 50, 1));
    }
    const hueSliderGeometryStyle = new GeometryStyle({
      fillStyle: linearGradientHue.buildGradient(),
    });
    this.hueColorSlider = new ColorSlider(new Point(425, 5), 360, 30, hue, hueSliderGeometryStyle);

    // Saturation Slider
    const linearGradientSaturation = new LinearGradient(new Point(425, 30), new Point(785, 30));
    linearGradientSaturation.addColorStop(0, new HSLAColor(200, 0, 50, 1));
    linearGradientSaturation.addColorStop(1, new HSLAColor(200, 100, 50, 1));
    const saturationSliderGeometryStyle = new GeometryStyle({
      fillStyle: linearGradientSaturation.buildGradient(),
    });
    this.saturationColorSlider = new ColorSlider(new Point(425, 35), 360, 30, saturation, saturationSliderGeometryStyle);

    // Lightness Slider
    const linearGradientLightness = new LinearGradient(new Point(425, 30), new Point(785, 30));
    linearGradientLightness.addColorStop(0, new HSLAColor(200, 100, 0, 1));
    linearGradientLightness.addColorStop(0.5, new HSLAColor(200, 100, 50, 1));
    linearGradientLightness.addColorStop(1, new HSLAColor(200, 100, 100, 1));
    const lightnessSliderGeometryStyle = new GeometryStyle({
      fillStyle: linearGradientLightness.buildGradient(),
    });
    this.lightnessColorSlider = new ColorSlider(new Point(425, 65), 360, 30, lightness, lightnessSliderGeometryStyle);

    this.colorSliders.push(this.hueColorSlider);
    this.colorSliders.push(this.saturationColorSlider);
    this.colorSliders.push(this.lightnessColorSlider);
  }

  createHSLInputs() {
    const lsValidator = new NumberRangeValidator(0, 100);
    const hueValidator = new NumberRangeValidator(0, 360);
    const textLengthValidator = new TextLengthValidator(3);

    this.hueTextGraphic = new TextGraphic(new Point(200, 180), 'Hue: ');
    this.textInputHue = new TextInput(new Point(280, 162), 40);
    this.textInputHue.text = this.hslaColor.hue;
    this.textInputHue.addValidator(textLengthValidator);
    this.textInputHue.addValidator(hueValidator);

    this.saturationTextGraphic = new TextGraphic(new Point(200, 210), 'Saturation: ');
    this.textInputSaturation = new TextInput(new Point(280, 192), 40);
    this.textInputSaturation.text = this.hslaColor.saturation;
    this.textInputSaturation.addValidator(textLengthValidator);
    this.textInputSaturation.addValidator(lsValidator);

    this.lightnessTextGraphic = new TextGraphic(new Point(200, 240), 'Lightness: ');
    this.textInputLightness = new TextInput(new Point(280, 222), 40);
    this.textInputLightness.text = this.hslaColor.lightness;
    this.textInputLightness.addValidator(textLengthValidator);
    this.textInputLightness.addValidator(lsValidator);

    this.hslTextGraphic = new TextGraphic(new Point(200, 270), this.hslaColor.toString());
    this.hslTextGraphic.textStyle = this.textStyle;

    this.hueTextGraphic.textStyle = this.textStyle;
    this.saturationTextGraphic.textStyle = this.textStyle;
    this.lightnessTextGraphic.textStyle = this.textStyle;
  }

  createRGBSliders() {
    const { red, green, blue } = this.rgbaColor;

    const linearGradientRed = new LinearGradient(new Point(160, 5), new Point(415, 20));
    linearGradientRed.addColorStop(0, new RGBAColor(0, green, blue, 1));
    linearGradientRed.addColorStop(1, new RGBAColor(255, green, blue, 1));
    const redColorSliderGeometryStyle = new GeometryStyle({
      fillStyle: linearGradientRed.buildGradient(),
    });
    this.redColorSlider = new ColorSlider(new Point(160, 5), 255, 30, red, redColorSliderGeometryStyle);

    const linearGradientGreen = new LinearGradient(new Point(160, 20), new Point(415, 20));
    linearGradientGreen.addColorStop(0, new RGBAColor(red, 0, blue, 1));
    linearGradientGreen.addColorStop(1, new RGBAColor(red, 255, blue, 1));
    const greenColorSliderGeometryStyle = new GeometryStyle({
      fillStyle: linearGradientGreen.buildGradient(),
    });
    this.greenColorSlider = new ColorSlider(new Point(160, 35), 255, 30, green, greenColorSliderGeometryStyle);

    const linearGradientBlue = new LinearGradient(new Point(160, 20), new Point(415, 20));
    linearGradientBlue.addColorStop(0, new RGBAColor(red, green, 0, 1));
    linearGradientBlue.addColorStop(1, new RGBAColor(red, green, 255, 1));
    const blueColorSliderGeometryStyle = new GeometryStyle({
      fillStyle: linearGradientBlue.buildGradient(),
    });
    this.blueColorSlider = new ColorSlider(new Point(160, 65), 255, 30, blue, blueColorSliderGeometryStyle);

    this.colorSliders.push(this.redColorSlider);
    this.colorSliders.push(this.blueColorSlider);
    this.colorSliders.push(this.greenColorSlider);
  }

  createRGBInputs() {
    const rgbNumberValidator = new NumberRangeValidator(0, 255);
    const textLengthValidator = new TextLengthValidator(3);

    this.redTextGraphic = new TextGraphic(new Point(20, 180), 'Red: ');
    this.textInputRed = new TextInput(new Point(100, 162), 40);
    this.textInputRed.text = this.rgbaColor.red;
    this.textInputRed.addValidator(rgbNumberValidator);
    this.textInputRed.addValidator(textLengthValidator);

    this.greenTextGraphic = new TextGraphic(new Point(20, 210), 'Green: ');
    this.textInputGreen = new TextInput(new Point(100, 192), 40);
    this.textInputGreen.text = this.rgbaColor.green;
    this.textInputGreen.addValidator(rgbNumberValidator);
    this.textInputGreen.addValidator(textLengthValidator);

    this.blueTextGraphic = new TextGraphic(new Point(20, 240), 'Blue: ');
    this.textInputBlue = new TextInput(new Point(100, 222), 40);
    this.textInputBlue.text = this.rgbaColor.blue;
    this.textInputBlue.addValidator(rgbNumberValidator);
    this.textInputBlue.addValidator(textLengthValidator);

    this.rgbTextGraphic = new TextGraphic(new Point(20, 270), this.rgbaColor.toString());
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

  handleRandomButtonClick() {
    const hue = Math.round(Math.random() * 360);
    const saturation = Math.round(Math.random() * 100);
    const lightness = Math.round(Math.random() * 100);
    this.addSavedRectangle(new HSLAColor(hue, saturation, lightness, 1));
  }

  handleClearButtonClick() {
    this.currentSavedRectanglesIndex = 0;
    this.savedRectangles = [];
  }

  handleSaveColorButtonClick() {
    this.addSavedRectangle(this.hslaColor.clone());
  }

  hasRGBColorTextChanged() {
    const red = Math.round(this.rgbaColor.red).toString();
    const green = Math.round(this.rgbaColor.green).toString();
    const blue = Math.round(this.rgbaColor.blue).toString();
    const redInput = this.textInputRed.text.toString() ? this.textInputRed.text.toString() : '0';
    const greenInput = this.textInputGreen.text.toString() ? this.textInputGreen.text.toString() : '0';
    const blueInput = this.textInputBlue.text.toString() ? this.textInputBlue.text.toString() : '0';
    return (red !== redInput || green !== greenInput || blue !== blueInput);
  }

  hasHSLColorTextChanged() {
    const hue = Math.round(this.hslaColor.hue).toString();
    const saturation = Math.round(this.hslaColor.saturation).toString();
    const lightness = Math.round(this.hslaColor.lightness).toString();
    const hueInput = this.textInputHue.text.toString() ? this.textInputHue.text.toString() : '0';
    const saturationInput = this.textInputSaturation.text.toString() ? this.textInputSaturation.text.toString() : '0';
    const lightnessInput = this.textInputLightness.text.toString() ? this.textInputLightness.text.toString() : '0';
    return (hue !== hueInput || saturation !== saturationInput || lightness !== lightnessInput);
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

  updateHSLRectangles(hslColor) {
    const hue = Math.round(hslColor.hue);
    const saturation = Math.round(hslColor.saturation);
    const lightness = Math.round(hslColor.lightness);

    const linearGradientHue = new LinearGradient(new Point(425, 30), new Point(785, 30));
    for (let gradientHue = 0; gradientHue <= 360; gradientHue += 60) {
      linearGradientHue.addColorStop(gradientHue / 360, new HSLAColor(gradientHue, saturation, lightness, 1));
    }
    this.hueColorSlider.geometryStyle.fillStyle = linearGradientHue.buildGradient();

    const linearGradientSaturation = new LinearGradient(new Point(425, 30), new Point(785, 30));
    linearGradientSaturation.addColorStop(0, new HSLAColor(hue, 0, lightness, 1));
    linearGradientSaturation.addColorStop(1, new HSLAColor(hue, 100, lightness, 1));
    this.saturationColorSlider.geometryStyle.fillStyle = linearGradientSaturation.buildGradient();

    const linearGradientLightness = new LinearGradient(new Point(425, 30), new Point(785, 30));
    linearGradientLightness.addColorStop(0, new HSLAColor(hue, saturation, 0, 1));
    linearGradientLightness.addColorStop(0.5, new HSLAColor(hue, saturation, 50, 1));
    linearGradientLightness.addColorStop(1, new HSLAColor(hue, saturation, 100, 1));
    this.lightnessColorSlider.geometryStyle.fillStyle = linearGradientLightness.buildGradient();
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

  hasColorValueChanged() {
    const { hue, saturation, lightness } = this.hslaColor;
    const { red, green, blue } = this.rgbaColor;

    const textHue = Math.trunc(this.textInputHue.text);
    const textSaturation = Math.trunc(this.textInputSaturation.text);
    const textLightness = Math.trunc(this.textInputLightness.text);

    const textRed = Math.trunc(this.textInputRed.text);
    const textGreen = Math.trunc(this.textInputGreen.text);
    const textBlue = Math.trunc(this.textInputBlue.text);

    const sliderHue = Math.trunc(this.hueColorSlider.sliderPositionX);
    const sliderSaturation = Math.trunc(this.saturationColorSlider.sliderPositionX);
    const sliderLightness = Math.trunc(this.lightnessColorSlider.sliderPositionX);

    const sliderRed = Math.trunc(this.redColorSlider.sliderPositionX);
    const sliderGreen = Math.trunc(this.greenColorSlider.sliderPositionX);
    const sliderBlue = Math.trunc(this.blueColorSlider.sliderPositionX);

    return (hue !== textHue || hue !== sliderHue)
      || (saturation !== textSaturation || saturation !== sliderSaturation)
      || (lightness !== textLightness || lightness !== sliderLightness)
      || (red !== textRed || red !== sliderRed)
      || (green !== textGreen || green !== sliderGreen)
      || (blue !== textBlue || blue !== sliderBlue);
  }

  updateColors() {
    console.log('updating');
  }

  update() {
    if (this.mouse.buttonDownOnce()) {
      const { x, y } = this.mouse;
      this.saveButton.update({ x, y });
      this.clearButton.update({ x, y });
      this.randomButton.update({ x, y });

      this.textInputRed.update({ x, y });
      this.textInputBlue.update({ x, y });
      this.textInputGreen.update({ x, y });

      this.textInputHue.update({ x, y });
      this.textInputSaturation.update({ x, y });
      this.textInputLightness.update({ x, y });
    }
    if (this.mouse.buttonPressed()) {
      const { x, y } = this.mouse;
      for (let i = 0; i < this.colorSliders.length; i += 1) {
        this.colorSliders[i].update({ x, y });
        /*
        this.hueColorSlider.update({ x, y });
        this.saturationColorSlider.update({ x, y });
        this.lightnessColorSlider.update({ x, y });
        this.redColorSlider.update({ x, y });
        this.blueColorSlider.update({ x, y });
        this.greenColorSlider.update({ x, y });
        */
      }
    }
    if (this.hasColorValueChanged()) {
      this.updateColors();
    }
  }

  draw() {
    this.colorPreviewRectangle.draw();

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

    for (let i = 0; i < this.colorSliders.length; i += 1) {
      this.colorSliders[i].draw();
    }

    this.saveButton.draw();
    this.clearButton.draw();
    this.randomButton.draw();

    for (let i = 0; i < this.savedRectangles.length; i += 1) {
      this.savedRectangles[i].draw();
    }
  }
} export default ColorPicker;
