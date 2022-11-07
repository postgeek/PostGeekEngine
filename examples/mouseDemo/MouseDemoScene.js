import Scene from 'gameEngine/scene/Scene';
import Vec2D from 'core/Vec2D';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import Color from 'renderingEngine/colors/Color';
import MouseButton from '../../src/inputEngine/MouseButton';

export default class MouseDemoScene extends Scene {
  create() {
    this.debugText = new TextGraphic(new Vec2D(800, 40), '[Insert text here]');
    this.debugText.textStyle.font = '32px Ariel';
    this.debugText.textStyle.strokeStyle = undefined;
    this.debugText.textStyle.fillStyle = Color.WHITE.name;
  }

  update() {
    if (this.game.Mouse.buttonDownOnce(MouseButton.LEFT_BUTTON)) {
      console.log('L:down once');
    } else if (this.game.Mouse.buttonPressed(MouseButton.LEFT_BUTTON)) {
      console.log('L:down more');
    }

    if (this.game.Mouse.buttonDownOnce(MouseButton.RIGHT_BUTTON)) {
      console.log('R:down once');
    } else if (this.game.Mouse.buttonPressed(MouseButton.RIGHT_BUTTON)) {
      console.log('R:down more');
    }

    if (this.game.Mouse.buttonDownOnce(MouseButton.MIDDLE_BUTTON)) {
      console.log('M:down once');
    } else if (this.game.Mouse.buttonPressed(MouseButton.MIDDLE_BUTTON)) {
      console.log('M:down more');
    }
  }

  draw() {
    this.debugText.draw();
  }
}
