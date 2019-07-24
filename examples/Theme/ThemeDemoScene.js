import Scene from 'gameEngine/scene/Scene';
import Point from 'core/Point';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Circle from 'renderingEngine/geometry/Circle';
import Transform from 'renderingEngine/context/Transform';
import QuadraticCurve from 'renderingEngine/geometry/QuadraticCurve';
import Color from 'renderingEngine/colors/Color';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import TextStyle from 'renderingEngine/text/TextStyle';
import Text from 'renderingEngine/text/Text';
import TextArea from 'HUDEngine/components/TextArea';

export default class DesignSystemScene extends Scene {
  create() {
    this.components = [];

    const fillStyle = Color.MIDNIGHTBLUE.RGBAColor;
    const strokeStyle = Color.WHITE.RGBAColor;
    const font = 'Rockwell';

    const heading1Font = `52px ${font}`;
    const heading2Font = `48px ${font}`;
    const heading3Font = `44px ${font}`;
    const heading4Font = `40px ${font}`;
    const heading5Font = `36px ${font}`;

    const paragraphFont = `14px ${font}`;

    const heading1 = new Text(new Point(100, 100), 'Heading 1');
    const heading2 = new Text(new Point(100, 160), 'Heading 2');
    const heading3 = new Text(new Point(100, 220), 'Heading 3');
    const heading4 = new Text(new Point(100, 280), 'Heading 4');
    const heading5 = new Text(new Point(100, 340), 'Heading 5');

    const paragraph1 = new Text(new Point(500, 100), 'Lorem ipsum dolor sit amet, ac erat etiam suscipit odio egestas, viverra id.');
    const paragraph2 = new Text(new Point(500, 117), 'Lorem ipsum dolor sit amet, ac erat etiam suscipit odio egestas, viverra id.');

    const textAreaStyle = DesignSystemScene.createTextStyle(paragraphFont, 0, strokeStyle, undefined);
    const textArea = new TextArea(new Point(500, 200),
      'Lorem ipsum dolor sit amet, elit rutrum fusce pulvinar, lorem fermentum pellentesque mauris. Risus commodo tristique per quis, hendrerit a morbi. Nunc quis. Condimentum amet quisque ligula, consectetuer sodales placerat cras etiam egestas ultrices. Ligula lobortis non non varius, sociosqu viverra vel in aliquet phasellus tortor, lacus tincidunt molestie consectetuer vitae ullamcorper sit.',
      300, 200, textAreaStyle);

    heading1.TextStyle = DesignSystemScene.createTextStyle(heading1Font, 2, fillStyle, strokeStyle);
    heading2.TextStyle = DesignSystemScene.createTextStyle(heading2Font, 2, fillStyle, strokeStyle);
    heading3.TextStyle = DesignSystemScene.createTextStyle(heading3Font, 2, fillStyle, strokeStyle);
    heading4.TextStyle = DesignSystemScene.createTextStyle(heading4Font, 2, fillStyle, strokeStyle);
    heading5.TextStyle = DesignSystemScene.createTextStyle(heading5Font, 2, fillStyle, strokeStyle);

    paragraph1.TextStyle = DesignSystemScene.createTextStyle(paragraphFont, 0, strokeStyle, undefined);
    paragraph2.TextStyle = DesignSystemScene.createTextStyle(paragraphFont, 0, strokeStyle, undefined);

    textArea.Border.GeometryStyle = DesignSystemScene.createGeometryStyle(3, strokeStyle);

    this.addComponentToSystem(heading1);
    this.addComponentToSystem(heading2);
    this.addComponentToSystem(heading3);
    this.addComponentToSystem(heading4);
    this.addComponentToSystem(heading5);
    this.addComponentToSystem(paragraph1);
    this.addComponentToSystem(paragraph2);
    this.addComponentToSystem(textArea);
  }

  addComponentToSystem(drawableObject) {
    this.components.push(drawableObject);
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
    for (let i = 0; i < this.components.length; i += 1) {
      this.components[i].draw();
    }
  }
}
