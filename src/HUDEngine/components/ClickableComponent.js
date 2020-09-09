import HUDComponent from '../HUDComponent';

class ClickableComponent extends HUDComponent {
  isMouseColliding(event) {
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
    return (minX <= mouseX && mouseX <= maxX && minY <= mouseY && mouseY <= maxY);
  }
} export default ClickableComponent;
