import EventBus from './messaging/EventBus';

class ContainerObject {
  constructor() {
    this.components = [];
    this.eventBus = new EventBus();
  }

  addComponent(component) {
    const concreteComponent = component;
    concreteComponent.eventBus = this.eventBus;
    this.components.push(component);
  }

  getComponents() {
    return this.components;
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
