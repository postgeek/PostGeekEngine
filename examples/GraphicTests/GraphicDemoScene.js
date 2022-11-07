import Scene from '../../src/gameEngine/scene/Scene';
import Vec2D from '../../src/core/Vec2D';
import TextGraphic from '../../src/renderingEngine/text/TextGraphic';
import Rectangle from '../../src/renderingEngine/geometry/Rectangle';
import GeometryStyle from '../../src/renderingEngine/geometry/GeometryStyle';
import TextStyle from '../../src/renderingEngine/text/TextStyle';
import Color from '../../src/renderingEngine/colors/Color';
import KeyboardKey from '../../src/inputEngine/KeyboardKey';
import ServiceLocator from '../../src/core/ServiceLocator';

export default class GraphicDemoScene extends Scene {
  create() {
    this.keyboard = ServiceLocator.instance.locate('keyboard');
    this.keyboard.registerKey(KeyboardKey.P);
    this.isPaused = false;
    this.isPausedRectangle = new Rectangle(new Vec2D(10, 10), 1180, 880);
    this.isPausedRectangle.geometryStyle = new GeometryStyle({
      strokeStyle: Color.ORANGE,
    });
    this.isPausedRectangle.isVisible = this.isPaused;
    this.textGraphics = [];
    this.createTextGraphics();
  }

  update() {
    this.updateInput();
    if (!this.isPaused) {
    }
  }

  updateInput() {
    if (this.keyboard.keyDownOnce(KeyboardKey.P)) {
      this.isPaused = !this.isPaused;
      this.isPausedRectangle.isVisible = this.isPaused;
      console.log(`Paused:${this.isPaused}`);
    }
  }

  draw(timeStep) {
    this.updateTextGraphics(timeStep);
    for (let i = 0; i < this.textGraphics.length; i++) {
      const textGraphic = this.textGraphics[i];
      textGraphic.point.x = 10;
      textGraphic.point.y = 15 * (i + 1);
      textGraphic.draw();
    }
    this.isPausedRectangle.draw();
  }

  createTextGraphics() {
    const textStyle = new TextStyle({
      strokeStyle: Color.WHITE,
      font: '14px serif',
    });
    this.timeStepInformation = new TextGraphic(new Vec2D(20, 20), 'TimeStep');
    this.timeStepInformation.textStyle = textStyle;
    this.containerObjectInformation = new TextGraphic(new Vec2D(20, 70), 'Container Object Information');
    this.containerObjectInformation.textStyle = textStyle;
    this.graphicInformation = new TextGraphic(new Vec2D(20, 100), 'Graphic Information');
    this.graphicInformation.textStyle = textStyle;
    this.physicInformation = new TextGraphic(new Vec2D(20, 130), 'Physics Information');
    this.physicInformation.textStyle = textStyle;
    this.textGraphics.push(this.timeStepInformation);
    this.textGraphics.push(this.containerObjectInformation);
    this.textGraphics.push(this.graphicInformation);
    this.textGraphics.push(this.physicInformation);
  }

  updateTextGraphics(timeStep) {
    this.timeStepInformation.text = `TimeStep: ${timeStep.toFixed(6)}`;
  }
}
