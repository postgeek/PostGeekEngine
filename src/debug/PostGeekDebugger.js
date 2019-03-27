import Text from '../graphics/text/Text';
import Rectangle from '../graphics/geometry/Rectangle';
import Point from '../physics/Point';

class PostGeekDebugger {
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
    for (let i = 0; i < this.ActiveScene.drawableObjects.length; i += 1) {
      this.drawDebugCircle(this.ActiveScene.drawableObjects[i]);
      // this.ActiveScene.drawableObjects[i].draw();
    }
    // console.log('Drawing the PostGeekDebugger');
  }

  drawDebugCircle(circle) {
    const rectPoint = new Point(circle.X - circle.Radius, circle.Y - circle.Radius);
    const rectSize = circle.Radius * 2;
    const rectangle = new Rectangle(this.ActiveScene.Context, rectPoint, rectSize, rectSize);

    const circleText = new Text(this.ActiveScene.Context, new Point(100, 400), `X : ${circle.X}`);
    rectangle.draw();
    circleText.draw();
  }
}
export default PostGeekDebugger;
