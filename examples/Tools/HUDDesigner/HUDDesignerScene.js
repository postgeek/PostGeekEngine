import Scene from '../../../src/gameEngine/scene/Scene';
import Vec2D from '../../../src/core/Vec2D';
import Color from '../../../src/renderingEngine/colors/Color';
import TextGraphic from '../../../src/renderingEngine/text/TextGraphic';
import TextStyle from '../../../src/renderingEngine/text/TextStyle';
import Rectangle from '../../../src/renderingEngine/geometry/Rectangle';

import MouseButton from '../../../src/inputEngine/MouseButton';
import GraphicsJSONSaver from '../../../src/renderingEngine/GraphicsJSONSaver';
import GraphicsJSONLoader from '../../../src/renderingEngine/GraphicsJSONLoader';

export default class DesignSystemScene extends Scene {
  create() {
    this.debugTextGraphic = new TextGraphic(new Vec2D(10, 20), '[DEBUG]');
    this.debugTextGraphic.textStyle = new TextStyle({
      font: '18px Arial',
      fillStyle: Color.RED.rgbaColor,
    });

    this.textGraphic = new TextGraphic(new Vec2D(100, 100), '[Text]');
    this.textGraphic.textStyle = new TextStyle({
      font: '18px Arial',
      fillStyle: Color.LIGHTSKYBLUE,
    });

    this.textGraphic = GraphicsJSONLoader.createText({
      point: { x: 100, y: 100 },
      text: '[Test...]',
      textStyle: { fillStyle: { name: 'lightskyblue' }, font: '18px Arial' },
    });

    this.textHeight = this.textGraphic.determineFontHeight();
    this.textWidth = this.textGraphic.measureText();
    this.textX = 100;
    this.textY = 100;

    this.selectionHeight = this.textHeight + 10;
    this.selectionWidth = this.textWidth + 10;
    this.selectionX = this.textX - 5;
    this.selectionY = this.textY - this.textHeight;

    this.textGraphic.x = this.textX;
    this.textGraphic.y = this.textY;

    this.rectangle = new Rectangle(new Vec2D(this.selectionX, this.selectionY), this.selectionWidth, this.selectionHeight);
    this.rectangle.geometryStyle.fillStyle = Color.TRANSPARENT;
    this.rectangle.geometryStyle.StrokeStyle = Color.YELLOW;
    this.rectangle.geometryStyle.lineDash = [5, 6];

    this.textSelected = false;
  }

  update() {
    if (this.textSelected) {
      if (this.game.Mouse.buttonPressed(MouseButton.RIGHT_BUTTON)) {
        this.textX = this.game.Mouse.x;
        this.textY = this.game.Mouse.y;
        this.selectionX = this.textX - 5;
        this.selectionY = this.textY - this.textHeight;

        this.textGraphic.x = this.textX;
        this.textGraphic.y = this.textY;

        this.rectangle.x = this.selectionX;
        this.rectangle.y = this.selectionY;

        this.debugTextGraphic.text = GraphicsJSONSaver.stringifyTextGraphic(this.textGraphic);
        console.log(GraphicsJSONSaver.stringifyTextGraphic(this.textGraphic));
      }
    }

    if (this.game.Mouse.buttonDownOnce(MouseButton.LEFT_BUTTON)) {
      this.textSelected =
        this.game.Mouse.x >= this.selectionX &&
        this.game.Mouse.x <= this.selectionWidth + this.selectionX &&
        this.game.Mouse.y >= this.selectionY &&
        this.game.Mouse.y <= this.selectionY + this.selectionHeight;
    }
  }

  draw() {
    this.debugTextGraphic.draw();
    this.textGraphic.draw();
    if (this.textSelected) this.rectangle.draw();
  }
}
