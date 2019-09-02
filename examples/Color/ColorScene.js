import Point from 'core/Point';
import Scene from 'gameEngine/scene/Scene';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import TextStyle from 'renderingEngine/text/TextStyle';
import Color from 'renderingEngine/colors/Color';
import ColorConverter from 'renderingEngine/colors/ColorConverter';
import KeyboardKey from 'inputEngine/KeyboardKey';
import Keyboard from 'inputEngine/KeyboardKey';
import Input from 'HUDEngine/components/Input';

export default class ColorDemoScene extends Scene {
  create() {
    const textStyle = new TextStyle({
      font: '14px Rockwell',
      fillStyle: Color.WHITE,
    });

    this.textGraphic = new TextGraphic(new Point(100, 300), 'Test');
    this.textGraphic.textStyle = textStyle;

    this.rectangle = new Rectangle(new Point(5, 5), 150, 150);
    this.rectangleFillStyle = Color.GOLDENROD.rgbaColor;

    this.redTextGraphic = new TextGraphic(new Point(20, 180), 'Red: ');
    this.textInputRed = new Input(new Point(100, 162), 40);
    this.textInputRed.text = `${this.rectangleFillStyle.red}`;

    this.greenTextGraphic = new TextGraphic(new Point(20, 210), 'Green: ');
    this.textInputGreen = new Input(new Point(100, 192), 40);
    this.textInputGreen.text = `${this.rectangleFillStyle.green}`;

    this.blueTextGraphic = new TextGraphic(new Point(20, 240), 'Blue: ');
    this.textInputBlue = new Input(new Point(100, 222), 40);
    this.textInputBlue.text = `${this.rectangleFillStyle.blue}`;

    this.hueTextGraphic = new TextGraphic(new Point(200, 180), 'Hue: ');
    this.textInputHue = new Input(new Point(280, 162), 40);

    this.saturationTextGraphic = new TextGraphic(new Point(200, 210), 'Saturation: ');
    this.textInputSaturation = new Input(new Point(280, 192), 40);

    this.lightnessTextGraphic = new TextGraphic(new Point(200, 240), 'Lightness: ');
    this.textInputLightness = new Input(new Point(280, 222), 40);

    this.redTextGraphic.textStyle = textStyle;
    this.greenTextGraphic.textStyle = textStyle;
    this.blueTextGraphic.textStyle = textStyle;

    this.hueTextGraphic.textStyle = textStyle;
    this.saturationTextGraphic.textStyle = textStyle;
    this.lightnessTextGraphic.textStyle = textStyle;

    this.inputs = [];
    this.inputs.push(this.textInputRed);
    this.inputs.push(this.textInputGreen);
    this.inputs.push(this.textInputBlue);
    this.inputs.push(this.textInputHue);
    this.inputs.push(this.textInputSaturation);
    this.inputs.push(this.textInputLightness);
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
    this.rectangleFillStyle.red = this.textInputRed.text;
    this.rectangleFillStyle.green = this.textInputGreen.text;
    this.rectangleFillStyle.blue = this.textInputBlue.text;
    this.rectangle.geometryStyle.fillStyle = this.rectangleFillStyle;

    const hslText = ColorConverter.RGBToHSL(this.rectangleFillStyle);
    this.textInputHue.text = Math.round(hslText.hue);
    this.textInputSaturation.text = Math.round(hslText.saturation);
    this.textInputLightness.text = Math.round(hslText.lightness);
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
  }
}
