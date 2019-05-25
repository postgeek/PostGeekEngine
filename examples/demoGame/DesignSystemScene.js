import Scene from 'scene/Scene';
import Point from 'physics/Point';
import Rectangle from 'graphics/geometry/Rectangle';
import Circle from 'graphics/geometry/Circle';
import Transform from 'graphics/context/Transform';
import QuadraticCurve from 'graphics/geometry/QuadraticCurve';
import Color from 'graphics/colors/Color';
import GeometryStyle from 'graphics/geometry/GeometryStyle';
import TextStyle from 'graphics/text/TextStyle';
import Text from 'graphics/text/Text';
import TextArea from 'graphics/text/TextArea';

export default class DesignSystemScene extends Scene {
  create() {
    const fillStyle = Color.MIDNIGHTBLUE.RGBAColor;
    const strokeStyle = Color.WHITE.RGBAColor;

    this.heading1 = new Text(this.Game.context, new Point(100, 100), 'Hello World!');
    this.heading2 = new Text(this.Game.context, new Point(100, 160), 'Hello World!');
    this.heading3 = new Text(this.Game.context, new Point(100, 220), 'Hello World!');
    this.heading4 = new Text(this.Game.context, new Point(100, 280), 'Hello World!');
    this.heading5 = new Text(this.Game.context, new Point(100, 340), 'Hello World!');

    this.paragraph1 = new Text(this.Game.context, new Point(500, 100), 'Lorem ipsum dolor sit amet, ac erat etiam suscipit odio egestas, viverra id.');
    this.paragraph2 = new Text(this.Game.context, new Point(500, 117), 'Lorem ipsum dolor sit amet, ac erat etiam suscipit odio egestas, viverra id.');

    this.textArea = new TextArea(this.Game.context, new Point(500, 200), 'Lorem ipsum dolor sit amet, ac erat etiam suscipit odio egestas, viverra id.', 200, 200);

    const heading1Font = '52px Rockwell';
    const heading2Font = '48px Rockwell';
    const heading3Font = '44px Rockwell';
    const heading4Font = '40px Rockwell';
    const heading5Font = '36px Rockwell';

    const paragraphFont = '14px Rockwell';

    this.heading1.TextStyle = DesignSystemScene.createTextStyle(heading1Font, 4, fillStyle, strokeStyle);
    this.heading2.TextStyle = DesignSystemScene.createTextStyle(heading2Font, 4, fillStyle, strokeStyle);
    this.heading3.TextStyle = DesignSystemScene.createTextStyle(heading3Font, 4, fillStyle, strokeStyle);
    this.heading4.TextStyle = DesignSystemScene.createTextStyle(heading4Font, 4, fillStyle, strokeStyle);
    this.heading5.TextStyle = DesignSystemScene.createTextStyle(heading5Font, 4, fillStyle, strokeStyle);

    this.paragraph1.TextStyle = DesignSystemScene.createTextStyle(paragraphFont, 0, strokeStyle, undefined);
    this.paragraph2.TextStyle = DesignSystemScene.createTextStyle(paragraphFont, 0, strokeStyle, undefined);

    this.textArea.Text.TextStyle = DesignSystemScene.createTextStyle(paragraphFont, 0, strokeStyle, undefined);
    this.textArea.Border.GeometryStyle = DesignSystemScene.createGeometryStyle(1, strokeStyle);

    console.log(this.paragraph1.determineFontHeight());
  }

  static createTextStyle(font, lineWidth, fillStyle, strokeStyle) {
    return new TextStyle({
      fillStyle,
      strokeStyle,
      lineWidth,
      font,
    });
  }

  static createGeometryStyle(lineWidth, strokeStyle) {
    return new GeometryStyle({
      strokeStyle,
      lineWidth,
    });
  }

  update() {
  }

  draw() {
    this.heading1.draw();
    this.heading2.draw();
    this.heading3.draw();
    this.heading4.draw();
    this.heading5.draw();

    this.paragraph1.draw();
    this.paragraph2.draw();

    this.textArea.draw();
  }
}
