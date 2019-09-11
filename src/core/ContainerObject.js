class ContainerObject {
  constructor() {
    this.components = [];
  }

  addComponent(component) {
    this.components.push(component);
  }

  getComponents() {
    return this.components;
  }

  send(message) {
    const components = this.getComponents();
    for (let i = 0; i < components.length; i += 1) {
      const component = components[i];
      component.receive(message);
    }
  }

  update(timeStep) {
    const components = this.getComponents();
    for (let i = 0; i < components.length; i += 1) {
      const component = components[i];
      if (typeof component.update !== 'undefined') {
        component.update(timeStep);
      }
    }
  }

  draw(timeStep) {
    const components = this.getComponents();
    for (let i = 0; i < components.length; i += 1) {
      const component = components[i];
      if (typeof component.draw !== 'undefined') {
        component.draw(timeStep);
      }
    }
  }
} export default ContainerObject;
