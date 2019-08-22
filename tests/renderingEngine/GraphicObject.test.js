/* eslint no-undef: 0 */

import GraphicObject from '../../src/renderingEngine/GraphicObject';
import ServiceLocator from '../../src/core/ServiceLocator';
import GraphicObjectMock from '../mocks/GraphicObjectMock';
import ContextMock from '../mocks/ContextMock';
import MethodNotImplementedError from '../../src/core/errorHandling/errors/MethodNotImplementedError';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new ContextMock());
});

describe('internalDraw', () => {
  it('should throw an error if calling the internal draw', () => {
    // Arrange
    const graphicObject = new GraphicObject();

    // Assert
    expect(() => { graphicObject.internalDraw(); }).toThrow(MethodNotImplementedError);
  });
  it('should draw the object to the screen correctly', () => {
    // Arrange
    const graphicObjectMock = new GraphicObjectMock();
    const graphicObjectPreDraw = jest.spyOn(graphicObjectMock, 'preDraw');
    const graphicObjectInternalDraw = jest.spyOn(graphicObjectMock, 'internalDraw');
    const graphicObjectPostDraw = jest.spyOn(graphicObjectMock, 'postDraw');

    // Arrange
    graphicObjectMock.draw();

    // Assert
    expect(graphicObjectPreDraw).toHaveBeenCalledTimes(1);
    expect(graphicObjectInternalDraw).toHaveBeenCalledTimes(1);
    expect(graphicObjectPostDraw).toHaveBeenCalledTimes(1);
  });
});
