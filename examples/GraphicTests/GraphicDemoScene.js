import Scene from 'gameEngine/scene/Scene';
import Vec2D from 'core/Vec2D';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import TextStyle from 'renderingEngine/text/TextStyle';
import Color from 'renderingEngine/colors/Color';
import KeyboardKey from 'inputEngine/KeyboardKey';
import ServiceLocator from '../../src/core/ServiceLocator';

export default class GraphicDemoScene extends Scene {
  create() {
    this.keyboard = ServiceLocator.instance.locate('keyboard');
    this.keyboard.registerKey(KeyboardKey.P);
    this.isPaused = false;
    this.isPausedRectangle = new Rectangle(0, 0, 1000, 550);
    this.isPausedRectangle.geometryStyle = new GeometryStyle({
      fillStyle: Color.BLACK,
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
    for (let i = 0; i < this.textGraphics.length; i += 1) {
      const textGraphic = this.textGraphics[i];
      textGraphic.point.x = 10;
      textGraphic.point.y = 15 * (i + 1);
      textGraphic.draw();
    }
    this.isPausedRectangle.draw();
  }

  createTextGraphics() {
    const textStyle = new TextStyle({
      strokeStyle: Color.BLACK,
      font: '14px serif',
    });
    this.timeStepInformation = new TextGraphic(new Vec2D(20, 20), 'TimeStep');
    this.containerObjectInformation = new TextGraphic(new Vec2D(20, 20), 'Container Object Information');
    this.graphicInformation = new TextGraphic(new Vec2D(20, 20), 'Graphic Information');
    this.physicInformation = new TextGraphic(new Vec2D(20, 20), 'Physics Information');
    this.textGraphics.push(this.timeStepInformation);
    this.textGraphics.push(this.containerObjectInformation);
    this.textGraphics.push(this.graphicInformation);
    this.textGraphics.push(this.physicInformation);
  }

  updateTextGraphics(timeStep) {
    this.timeStepInformation.text = `TimeStep: ${timeStep.toFixed(6)}`;
  }
}
