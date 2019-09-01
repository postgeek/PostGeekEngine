import Point from 'core/Point';
import Scene from 'gameEngine/scene/Scene';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import TextStyle from 'renderingEngine/text/TextStyle';
import Color from 'renderingEngine/colors/Color';
import ColorConverter from 'renderingEngine/colors/ColorConverter';
import KeyboardKey from 'inputEngine/KeyboardKey';

export default class ColorDemoScene extends Scene {
  create() {
    const textStyle = new TextStyle({
      fillStyle: Color.RED,
      font: '14px Rockwell',
    });
    /*
    const textStyle2 = new TextStyle({
      fillStyle: Color.WHITE,
      font: '14px Rockwell',
    });
    */

    this.game.Keyboard.registerKey(KeyboardKey.ENTER);

    this.allowInput = false;
    this.text = '';

    this.textGraphic = new TextGraphic(new Point(100, 100), 'Test');
    this.textGraphic.textStyle = textStyle;
    /*
    this.redTextGraphic = new TextGraphic(new Point(200, 200), 'Red: ');
    this.greenTextGraphic = new TextGraphic(new Point(200, 220), 'Green: ');
    this.blueTextGraphic = new TextGraphic(new Point(200, 240), 'Blue: ');

    this.hueTextGraphic = new TextGraphic(new Point(400, 200), 'Hue: ');
    this.saturationTextGraphic = new TextGraphic(new Point(400, 240), 'Saturation: ');
    this.lightnessTextGraphic = new TextGraphic(new Point(400, 220), 'Lightness: ');

    this.redTextGraphic.textStyle = textStyle;
    this.greenTextGraphic.textStyle = textStyle;
    this.blueTextGraphic.textStyle = textStyle;

    this.hueTextGraphic.textStyle = textStyle2;
    this.saturationTextGraphic.textStyle = textStyle2;
    this.lightnessTextGraphic.textStyle = textStyle2;
    */
  }

  update() {
    if (this.game.Keyboard.keyDownOnce(KeyboardKey.ENTER)) {
      console.log('enter');
      this.allowInput = !this.allowInput;
      if (this.allowInput) {
        console.log('listening to input');
        this.game.Keyboard.enableTypedKey();
        this.text = '';
      } else {
        console.log('stop listening to input');
        this.game.Keyboard.disableTypedKey();
      }
    }
  }

  draw() {
    this.textGraphic.draw();
    /*
    this.redTextGraphic.draw();
    this.greenTextGraphic.draw();
    this.blueTextGraphic.draw();
    this.hueTextGraphic.draw();
    this.saturationTextGraphic.draw();
    this.lightnessTextGraphic.draw();
    */
  }
}
