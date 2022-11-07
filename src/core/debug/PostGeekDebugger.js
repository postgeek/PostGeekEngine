import MiddlewareBase from '../middleware/MiddlewareBase';
import TextGraphic from '../../renderingEngine/text/TextGraphic';
import Rectangle from '../../renderingEngine/geometry/Rectangle';
import GeometryStyle from '../../renderingEngine/geometry/GeometryStyle';
import TextStyle from '../../renderingEngine/text/TextStyle';
import Point from '../Point';
import ServiceLocator from '../ServiceLocator';
import Button from '../../HUDEngine/components/Button';
import TextArea from '../../HUDEngine/components/TextArea';
import Color from '../../renderingEngine/colors/Color';
import MouseButton from '../../inputEngine/MouseButton';

class PostGeekDebugger extends MiddlewareBase {
  init(middlewareManager) {
    this.middlewareManager = middlewareManager;
    this.debugGeometryStyle = new GeometryStyle({
      strokeStyle: Color.RED,
      lineWidth: 1,
    });
    const debugTextStyle = new TextStyle({
      strokeStyle: Color.ORANGE,
      fillStyle: Color.RED,
      lineWidth: 1,
      font: '48px serif',
    });
    this.Text = new TextGraphic(new Point(20, 50), 'Debug mode enabled', debugTextStyle);

    this.DebugConsoleOpenButton = new Button(new Point(10, 870), 'Open Console', () => this.setDebugConsoleToVisible());

    const logger = ServiceLocator.instance.locate('logger');
    logger.log('Initialized the PostGeekDebugger');
    logger.log('================================');

    this.DebugConsole = new TextArea(
      new Point(100, 100),
      'Debug Console',
      500,
      400,
      new TextStyle({
        strokeStyle: Color.BLACK,
        fillStyle: Color.BLACK,
        lineWidth: 1,
        font: '18px serif',
      }),
    );
    this.mouse = ServiceLocator.instance.locate('mouse');
    this.DebugConsole.isVisible = false;

    // this._worldRectangle = new Rectangle(new Point(0,0), this.game.canvas.width, this.game.canvas.height);
    // this._worldRectangle.geometryStyle = this.debugGeometryStyle;
  }

  // eslint-disable-next-line class-methods-use-this
  update() {
    const { x, y } = this.mouse;
    if (this.mouse.buttonDownOnce(MouseButton.LEFT_BUTTON)) {
      this.DebugConsoleOpenButton.update({ x, y });
    }
    // console.log('Updating the PostGeekDebugger');
  }

  setDebugConsoleToVisible() {
    console.log('setting is visible');
    console.log(this.DebugConsole);
    this.DebugConsole.isVisible = true;
  }

  draw() {
    this.Text.draw();
    this.DebugConsole.draw();
    this.DebugConsoleOpenButton.draw();
    // this._worldRectangle.draw();
  }

  drawDebug(graphicObject) {
    switch (graphicObject.constructor.name) {
      case 'Circle':
        this.drawDebugCircle(graphicObject);
        break;
      default:
        break;
    }
  }

  drawDebugCircle(circle) {
    const rectPoint = new Point(circle.X - circle.Radius, circle.Y - circle.Radius);
    const rectSize = circle.Radius * 2;
    const rectangle = new Rectangle(rectPoint, rectSize, rectSize);
    rectangle.GeometryStyle = this.debugGeometryStyle;

    const circleTextX = new TextGraphic(new Point(rectPoint.X, rectPoint.Y + rectSize * 2), `X : ${circle.X}`);
    circleTextX.TextStyle = this.debugTextStyle;
    const circleTextY = new TextGraphic(new Point(rectPoint.X, rectPoint.Y + rectSize * 2 + 30), `Y : ${circle.Y}`);
    circleTextY.TextStyle = this.debugTextStyle;

    rectangle.draw();
    circleTextX.draw();
    circleTextY.draw();
  }
}
export default PostGeekDebugger;
