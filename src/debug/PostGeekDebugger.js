import Middleware from './Middleware';
import Text from '../graphics/text/Text';
import Rectangle from '../graphics/geometry/Rectangle';
import Point from '../physics/Point';

class PostGeekDebugger extends Middleware {
  init(middlewareManager) {
    this.middlewareManager = middlewareManager;
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

    const circleTextX = new Text(this.ActiveScene.Context, new Point(rectPoint.X, rectPoint.Y + (rectSize * 2)), `X : ${circle.X}`);
    const circleTextY = new Text(this.ActiveScene.Context, new Point(rectPoint.X, rectPoint.Y + (rectSize * 2) + 50), `Y : ${circle.Y}`);

    rectangle.draw();
    circleTextX.draw(); // test
    circleTextY.draw();
  }
}
export default PostGeekDebugger;
