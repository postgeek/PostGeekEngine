import IMiddleware from '../middleware/IMiddleware';
import TextGraphic from '../../renderingEngine/text/TextGraphic';
import Rectangle from '../../renderingEngine/geometry/Rectangle';
import GeometryStyle from '../../renderingEngine/geometry/GeometryStyle';
import TextStyle from '../../renderingEngine/text/TextStyle';
import Color from '../../renderingEngine/colors/Color';
import Vec2D from '../Vec2D';
import ServiceLocator from '../ServiceLocator';

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
    this.sceneTitleStyle = new TextStyle({
      fillStyle: 'white',
      strokeStyle: 'black',
      lineWidth: 1,
      font: '48px sans-serif',
    });
    this.FPSTextStyle = new TextStyle({
      fillStyle: Color.BLACK,
      lineWidth: 1,
      font: '14px serif',
    });
    this.FPSTextBoxStyle = new GeometryStyle({
      strokeStyle: Color.BLACK,
      fillStyle: Color.MINTCREAM,
      lineWidth: 2,
    });
    this.Text = new TextGraphic(new Vec2D(20, 50), 'Debug');
    this.Text.textStyle = this.debugTextStyle;
    console.log('Initialized the PostGeekDebugger');
    console.log('================================');

    this._sceneManager = ServiceLocator.instance.locate('sceneManager');
    this._activeScene = this._sceneManager.runningScene;
    this._worldRectangle = new Rectangle(this._activeScene.world.point, this._activeScene.world.width, this._activeScene.world.height);
    this._worldRectangle.geometryStyle = this.debugGeometryStyle;
    this.SceneTitleText = new TextGraphic(new Vec2D(160, 55), this._activeScene.title);
    this.SceneTitleText.textStyle = this.sceneTitleStyle;
  }

  update() {

  }

  draw(timeStep) {
    this.Text.draw();
    this.SceneTitleText.draw();
    this._worldRectangle.draw();
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
    const rectPoint = new Vec2D(circle.X - circle.Radius, circle.Y - circle.Radius);
    const rectSize = circle.Radius * 2;
    const rectangle = new Rectangle(rectPoint, rectSize, rectSize);
    rectangle.GeometryStyle = this.debugGeometryStyle;

    const circleTextX = new TextGraphic(new Vec2D(rectPoint.X, rectPoint.Y + (rectSize * 2)), `X : ${circle.X}`);
    circleTextX.TextStyle = this.debugTextStyle;
    const circleTextY = new TextGraphic(new Vec2D(rectPoint.X, rectPoint.Y + (rectSize * 2) + 30), `Y : ${circle.Y}`);
    circleTextY.TextStyle = this.debugTextStyle;

    rectangle.draw();
    circleTextX.draw();
    circleTextY.draw();
  }
}
export default PostGeekDebugger;
