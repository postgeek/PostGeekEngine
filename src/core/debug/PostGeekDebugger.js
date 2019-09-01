import IMiddleware from '../middleware/IMiddleware';
import TextGraphic from '../../renderingEngine/text/TextGraphic';
import Rectangle from '../../renderingEngine/geometry/Rectangle';
import GeometryStyle from '../../renderingEngine/geometry/GeometryStyle';
import TextStyle from '../../renderingEngine/text/TextStyle';
import Point from '../Point';

class PostGeekDebugger extends IMiddleware {
  init(middlewareManager) {
    this.middlewareManager = middlewareManager;
    this.debugGeometryStyle = new GeometryStyle({
      strokeStyle: 'red',
      lineWidth: 1,
    });
    this.debugTextStyle = new TextStyle({
      strokeStyle: 'orange',
      fillStyle: 'red',
      lineWidth: 1,
      font: '48px serif',
    });
    this.Text = new TextGraphic(new Point(20, 50), 'Debug mode enabled');
    this.Text.textStyle = this.debugTextStyle;
    console.log('Initialized the PostGeekDebugger');
    console.log('================================');
  }

  update() {
    // console.log('Updating the PostGeekDebugger');
  }

  draw() {
    this.Text.draw();
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

    const circleTextX = new TextGraphic(new Point(rectPoint.X, rectPoint.Y + (rectSize * 2)), `X : ${circle.X}`);
    circleTextX.TextStyle = this.debugTextStyle;
    const circleTextY = new TextGraphic(new Point(rectPoint.X, rectPoint.Y + (rectSize * 2) + 30), `Y : ${circle.Y}`);
    circleTextY.TextStyle = this.debugTextStyle;

    rectangle.draw();
    circleTextX.draw();
    circleTextY.draw();
  }
}
export default PostGeekDebugger;
