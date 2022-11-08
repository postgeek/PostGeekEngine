import Scene from 'gameEngine/scene/Scene';
import DefaultColors from 'renderingEngine/colors/DefaultColors';
import Color from 'renderingEngine/colors/Color';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Point from 'core/Point';
import GeometryStyle from '../../src/renderingEngine/geometry/GeometryStyle';
import TextGraphic from '../../src/renderingEngine/text/TextGraphic';
import TextStyle from '../../src/renderingEngine/text/TextStyle';


export default class DefaultColorDemoScene extends Scene {
  create() {
    this.rectangles = [];
    this.textGraphics = [];

    DefaultColors.forEach(function (defaultColor, index) {
      var xOffset = 20;
      var yOffset = 20;

      var pointX = (this.game.canvasWidth / 12) * (index % 12) + xOffset;
      var pointY = (this.game.canvasHeight / 12) * Math.floor(index / 12) + yOffset;

      var width = this.game.canvasWidth / 20;
      var height = this.game.canvasHeight / 20;

      let text = new TextGraphic(new Point(pointX, pointY - 6), defaultColor.name);
      text.textStyle = new TextStyle({
        fillStyle: Color.WHITE,
        font: '12px serif',
      })
      this.textGraphics.push(text);

      let rectangle = new Rectangle(new Point(pointX, pointY), width, height);
      rectangle.geometryStyle = new GeometryStyle({
        fillStyle: defaultColor.name,
        strokeStyle: Color.WHITE,
      });
    
      this.rectangles.push(rectangle);
    }, this);
  }

  update() {
    
  }

  draw() {
    this.textGraphics.forEach(function (text) {
      text.draw();
    });
    this.rectangles.forEach(function (rectangle) {
      rectangle.draw();
    });
  }
}