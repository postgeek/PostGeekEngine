import Middleware from './Middleware';
import Text from '../graphics/text/Text';
import Rectangle from '../graphics/geometry/Rectangle';
import GeometryStyle from '../graphics/geometry/GeometryStyle';
import TextStyle from '../graphics/text/TextStyle';
import Point from '../physics/Point';

class PostGeekDebugger extends Middleware {
  init(middlewareManager) {
    this.middlewareManager = middlewareManager;
    this.debugGeometryStyle = new GeometryStyle({
      strokeStyle: 'red',
      lineWidth: 1,
    });
    this.debugTextStyle = new TextStyle({
      strokeStyle: 'orange',
      fillStyle: 'red',
      lineWidth: 4,
      font: '28px serif',
    });
    this.Text = new Text(this.middlewareManager.Game.context, new Point(20, 50), 'Debug mode enabled');
    console.log('Initialized the PostGeekDebugger');
    console.log('================================');
    this.ActiveScene = this.middlewareManager.Game.sceneManager.runningScene;
  }

  update() {
    // console.log('Updating the PostGeekDebugger');
  }

  draw() {
    this.Text.draw();
    for (let i = 0; i < this.ActiveScene.DrawableObjects.length; i += 1) {
      this.drawDebug(this.ActiveScene.DrawableObjects[i]);
    }
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
    const rectangle = new Rectangle(this.ActiveScene.Context, rectPoint, rectSize, rectSize);
    rectangle.GeometryStyle = this.debugGeometryStyle;

    const circleTextX = new Text(this.ActiveScene.Context, new Point(rectPoint.X, rectPoint.Y + (rectSize * 2)), `X : ${circle.X}`);
    circleTextX.TextStyle = this.debugTextStyle;
    const circleTextY = new Text(this.ActiveScene.Context, new Point(rectPoint.X, rectPoint.Y + (rectSize * 2) + 30), `Y : ${circle.Y}`);
    circleTextY.TextStyle = this.debugTextStyle;

    rectangle.draw();
    circleTextX.draw();
    circleTextY.draw();
  }
}
export default PostGeekDebugger;
