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
    });
    /*
    const textStyle2 = new TextStyle({
      fillStyle: Color.WHITE,
      font: '14px Rockwell',
    });
    */
    this.game.Keyboard.registerKey(KeyboardKey.ENTER);
    this.game.Keyboard.registerKey(KeyboardKey.SIX);

    this.textInput2 = new Input(new Point(20, 230), 200);

    this.textGraphic = new TextGraphic(new Point(100, 300), 'Test');
    this.textGraphic.textStyle = textStyle;

    this.rectangle = new Rectangle(new Point(5, 5), 150, 150);


    this.redTextGraphic = new TextGraphic(new Point(20, 180), 'Red: ');
    this.textInputRed = new Input(new Point(100, 162), 100);

    this.greenTextGraphic = new TextGraphic(new Point(20, 210), 'Green: ');
    this.blueTextGraphic = new TextGraphic(new Point(20, 240), 'Blue: ');
    /*
    this.hueTextGraphic = new TextGraphic(new Point(400, 200), 'Hue: ');
    this.saturationTextGraphic = new TextGraphic(new Point(400, 240), 'Saturation: ');
    this.lightnessTextGraphic = new TextGraphic(new Point(400, 220), 'Lightness: ');
*/
    this.redTextGraphic.textStyle = textStyle;
    this.redTextGraphic.textStyle.fillStyle = Color.RED;
    this.greenTextGraphic.textStyle = textStyle;
    this.blueTextGraphic.textStyle = textStyle;
    /*
    this.hueTextGraphic.textStyle = textStyle2;
    this.saturationTextGraphic.textStyle = textStyle2;
    this.lightnessTextGraphic.textStyle = textStyle2;
    */
  }

  update() {
    if (this.game.Keyboard.keyDownOnce(KeyboardKey.ENTER)) {
      this.allowInput = !this.allowInput;
      this.textInput.focus = this.allowInput;
    }
    if (this.game.Keyboard.keyDownOnce(KeyboardKey.SIX)) {
      this.allowInput2 = !this.allowInput2;
      this.textInput2.focus = this.allowInput2;
    }
    if (this.game.Mouse.buttonDownOnce()) {
      const mouseX = this.game.Mouse.x;
      const mouseY = this.game.Mouse.y;
      const inputX = this.textInputRed.point.x;
      const inputY = this.textInputRed.point.y;
      const inputWidth = this.textInputRed.width;
      const inputHeight = this.textInputRed.height;

      const maxX = inputWidth + inputX;
      const maxY = inputHeight + inputY;
      const minX = inputX;
      const minY = inputY;

      if (minX <= mouseX && mouseX <= maxX
        && minY <= mouseY && mouseY <= maxY) {
        this.textInputRed.focus = true;
      } else {
        this.textInputRed.focus = false;
      }
    }
  }

  draw() {
    this.textGraphic.draw();
    this.rectangle.draw();
    this.textInput2.draw();
    this.redTextGraphic.draw();
    this.textInputRed.draw();
    this.greenTextGraphic.draw();
    this.blueTextGraphic.draw();
    /*
    this.hueTextGraphic.draw();
    this.saturationTextGraphic.draw();
    this.lightnessTextGraphic.draw();
    */
  }
}
