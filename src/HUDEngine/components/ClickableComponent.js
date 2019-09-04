import MethodNotImplementedError from '../../core/errorHandling/errors/MethodNotImplementedError';

import GraphicComponent from '../GraphicComponent';
import ServiceLocator from '../../core/ServiceLocator';

class ClickableComponent extends GraphicComponent {
  constructor(point) {
    super(point);

    const eventbus = ServiceLocator.instance.locate('eventbus');
    const mouse = ServiceLocator.instance.locate('mouse');
    eventbus.register(mouse.MOUSE_DOWN_EVENT, (event) => this.handleMouseDown(event));
  }

  handleClick(event) {
    throw new MethodNotImplementedError(this);
  }

  handleMouseDown(event) {
    const mouseX = event.x;
    const mouseY = event.y;
    const inputX = this.point.x;
    const inputY = this.point.y;
    const inputWidth = this.width;
    const inputHeight = this.height;

    const maxX = inputWidth + inputX;
    const maxY = inputHeight + inputY;
    const minX = inputX;
    const minY = inputY;

    // Check for collision with the mouse
    if (minX <= mouseX && mouseX <= maxX
    && minY <= mouseY && mouseY <= maxY) {
      this.handleClick(true);
    } else {
      this.handleClick(false);
    }
  }
} export default ClickableComponent;
