import Scene from 'gameEngine/scene/Scene';
import Point from 'core/Point';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Circle from 'renderingEngine/geometry/Circle';
import Transform from 'renderingEngine/context/Transform';
import QuadraticCurve from 'renderingEngine/geometry/QuadraticCurve';
import Color from 'renderingEngine/colors/Color';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import TextStyle from 'renderingEngine/text/TextStyle';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import TextArea from 'HUDEngine/components/TextArea';
import ToggleButton from 'HUDEngine/components/buttons/ToggleButton';

export default class DesignSystemScene extends Scene {
  create() {
    this.components = [];

    const fillStyle = Color.MIDNIGHTBLUE.rgbaColor;
    const strokeStyle = Color.WHITE.rgbaColor;
    const font = 'Rockwell';

    const heading1Font = `52px ${font}`;
    const heading2Font = `48px ${font}`;
    const heading3Font = `44px ${font}`;
    const heading4Font = `40px ${font}`;
    const heading5Font = `36px ${font}`;

    const paragraphFont = `14px ${font}`;

    const heading1 = new TextGraphic(new Point(100, 100), 'Heading 1');
    const heading2 = new TextGraphic(new Point(100, 160), 'Heading 2');
    const heading3 = new TextGraphic(new Point(100, 220), 'Heading 3');
    const heading4 = new TextGraphic(new Point(100, 280), 'Heading 4');
    const heading5 = new TextGraphic(new Point(100, 340), 'Heading 5');

    const paragraph1 = new TextGraphic(new Point(500, 100), 'Lorem ipsum dolor sit amet, ac erat etiam suscipit odio egestas, viverra id.');
    const paragraph2 = new TextGraphic(new Point(500, 117), 'Lorem ipsum dolor sit amet, ac erat etiam suscipit odio egestas, viverra id.');

    this.button = new ToggleButton(new Point(500, 40), DesignSystemScene.writeToConsole);

    const textAreaStyle = DesignSystemScene.createTextStyle(paragraphFont, 0, strokeStyle, undefined);
    const textArea = new TextArea(new Point(500, 200),
      'Lorem ipsum dolor sit amet, elit rutrum fusce pulvinar, lorem fermentum pellentesque mauris. Risus commodo tristique per quis, hendrerit a morbi. Nunc quis. Condimentum amet quisque ligula, consectetuer sodales placerat cras etiam egestas ultrices. Ligula lobortis non non varius, sociosqu viverra vel in aliquet phasellus tortor, lacus tincidunt molestie consectetuer vitae ullamcorper sit.',
      300, 200, textAreaStyle);

    heading1.textStyle = DesignSystemScene.createTextStyle(heading1Font, 2, fillStyle, strokeStyle);
    heading2.textStyle = DesignSystemScene.createTextStyle(heading2Font, 2, fillStyle, strokeStyle);
    heading3.textStyle = DesignSystemScene.createTextStyle(heading3Font, 2, fillStyle, strokeStyle);
    heading4.textStyle = DesignSystemScene.createTextStyle(heading4Font, 2, fillStyle, strokeStyle);
    heading5.textStyle = DesignSystemScene.createTextStyle(heading5Font, 2, fillStyle, strokeStyle);

    paragraph1.textStyle = DesignSystemScene.createTextStyle(paragraphFont, 0, strokeStyle, undefined);
    paragraph2.textStyle = DesignSystemScene.createTextStyle(paragraphFont, 0, strokeStyle, undefined);

    textArea.Border.geometryStyle = DesignSystemScene.createGeometryStyle(3, strokeStyle);

    this.addComponentToSystem(heading1);
    this.addComponentToSystem(heading2);
    this.addComponentToSystem(heading3);
    this.addComponentToSystem(heading4);
    this.addComponentToSystem(heading5);
    this.addComponentToSystem(paragraph1);
    this.addComponentToSystem(paragraph2);
    this.addComponentToSystem(textArea);
    this.addComponentToSystem(this.button);
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

  static writeToConsole() {
    console.log("Button clicked");
  }

  update() {
    this.button.update();
  }

  draw() {
    for (let i = 0; i < this.components.length; i += 1) {
      this.components[i].draw();
    }
  }
}
