import HUDComponent from '../HUDComponent';
import ServiceLocator from '../../core/ServiceLocator';
import MouseButton from '../../inputEngine/MouseButton';

class ClickableComponent extends HUDComponent {
  constructor(point, clickCallback) {
    super();

    this.point = point;
    this._clickCallback = clickCallback;

    this.mouse = ServiceLocator.instance.locate('mouse');
  }

  isMouseColliding(event) {
    const { x, y } = event;
    const mouseX = x;
    const mouseY = y;
    const inputX = this.point.x;
    const inputY = this.point.y;
    const inputWidth = this.width;
    const inputHeight = this.height;

    const maxX = inputWidth + inputX;
    const maxY = inputHeight + inputY;
    const minX = inputX;
    const minY = inputY;

    // Check for collision with the mouse
    return (minX <= mouseX && mouseX <= maxX && minY <= mouseY && mouseY <= maxY);
  }

  set clickCallback(value) {
    this._clickCallback = value;
  }

  get clickCallback() {
    return this._clickCallback;
  }

  update() {
    if (this.mouse.buttonDownOnce(MouseButton.LEFT_BUTTON) && this.isMouseColliding(this.mouse)) {
      this.clickCallback();
    }
  }
} export default ClickableComponent;
