/**
 * @jest-environment jsdom
 */
/* eslint no-undef: 0 */
import TextGraphic from '../../../src/renderingEngine/text/TextGraphic';
import Vec2D from '../../../src/core/Vec2D';

import ContextMock from '../../mocks/ContextMock';
import ServiceLocator from '../../../src/core/ServiceLocator';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new ContextMock());
});

describe('Constructor', () => {
  it('should properly create a text object with the provided parameters', () => {
    // Arrange
    const text = 'jest test text';
    const point = new Vec2D(22, 33);

    // Act
    const textGraphic = new TextGraphic(point, text);

    // Assert
    expect(textGraphic.text).toBe(text);
    expect(textGraphic.point.x).toBe(point.x);
    expect(textGraphic.point.y).toBe(point.y);
  });
  it('should properly set the X coordinate of the textGraphic\'s point', () => {
    // Arrange
    const text = 'jest test text';
    const point = new Vec2D(22, 33);
    const newX = 87;
    const textGraphic = new TextGraphic(point, text);

    // Act
    textGraphic.x = newX;

    // Assert
    expect(textGraphic.point.x).toBe(newX);
  });
  it('should properly set the Y coordinate of the textGraphic\'s point', () => {
    // Arrange
    const text = 'jest test text';
    const point = new Vec2D(22, 33);
    const newY = 87;
    const textGraphic = new TextGraphic(point, text);

    // Act
    textGraphic.y = newY;

    // Assert
    expect(textGraphic.point.y).toBe(newY);
  });
  it('should measure the text width with the given style', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const text = 'jest test text';
    const point = new Vec2D(22, 33);
    const testGraphic = new TextGraphic(point, text);
    const contextSaveSpy = jest.spyOn(context, 'save');
    const contextMeasureTextSpy = jest.spyOn(context, 'measureText');
    const textStyleApplySpy = jest.spyOn(testGraphic.textStyle, 'apply');
    const contextRestoreSpy = jest.spyOn(context, 'restore');

    // Act
    testGraphic.measureText();

    // Assert
    expect(contextSaveSpy).toHaveBeenCalledTimes(1);
    expect(contextMeasureTextSpy).toHaveBeenCalledTimes(1);
    expect(textStyleApplySpy).toHaveBeenCalledTimes(1);
    expect(contextRestoreSpy).toHaveBeenCalledTimes(1);
  });
  it('should measure the text height with the given style', () => {
    // Arrange
    Object.defineProperty(document, 'document', {});
    const context = ServiceLocator.instance.locate('context');
    const text = 'jest test text';
    const point = new Vec2D(22, 33);
    const testGraphic = new TextGraphic(point, text);
    const documentGetElementsByTagNameSpy = jest.spyOn(document, 'getElementsByTagName');
    const documentCreateElementSpy = jest.spyOn(document, 'createElement');
    const documentCreateTextNodeSpy = jest.spyOn(document, 'createTextNode');

    // Act
    testGraphic.determineFontHeight();

    // Assert
    expect(documentGetElementsByTagNameSpy).toHaveBeenCalledTimes(1);
    expect(documentCreateElementSpy).toHaveBeenCalledTimes(1);
    expect(documentCreateTextNodeSpy).toHaveBeenCalledTimes(1);
  });
  it('should draw the text onto the screen', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const text = 'jest test text';
    const point = new Vec2D(22, 33);
    const testGraphic = new TextGraphic(point, text);
    const contextSaveSpy = jest.spyOn(context, 'save');
    const textStyleApplySpy = jest.spyOn(testGraphic.textStyle, 'apply');
    const contextRestoreSpy = jest.spyOn(context, 'restore');

    // Act
    testGraphic.draw();

    // Assert
    expect(contextSaveSpy).toHaveBeenCalledTimes(1);
    expect(textStyleApplySpy).toHaveBeenCalledTimes(1);
    expect(contextRestoreSpy).toHaveBeenCalledTimes(1);
  });
  it('should correctly apply the text\'s fill style', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const text = 'jest test text';
    const point = new Vec2D(22, 33);
    const testGraphic = new TextGraphic(point, text);
    const contextFillTextSpy = jest.spyOn(context, 'fillText');

    // Act
    testGraphic.draw();

    // Assert
    expect(contextFillTextSpy).toHaveBeenCalledTimes(1);
  });
  it('should not apply the text\'s fill style if it\'s undefined', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const text = 'jest test text';
    const point = new Vec2D(22, 33);
    const testGraphic = new TextGraphic(point, text);
    testGraphic.textStyle.fillStyle = undefined;
    const contextFillTextSpy = jest.spyOn(context, 'fillText');

    // Act
    testGraphic.draw();

    // Assert
    expect(contextFillTextSpy).toHaveBeenCalledTimes(0);
  });
  it('should correctly apply the text\'s stroke style', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const text = 'jest test text';
    const point = new Vec2D(22, 33);
    const testGraphic = new TextGraphic(point, text);
    testGraphic.textStyle.strokeStyle = 'red';
    const contextStrokeTextSpy = jest.spyOn(context, 'strokeText');

    // Act
    testGraphic.draw();

    // Assert
    expect(contextStrokeTextSpy).toHaveBeenCalledTimes(1);
  });
  it('should not apply the text\'s stroke style if it\'s undefined', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const text = 'jest test text';
    const point = new Vec2D(22, 33);
    const testGraphic = new TextGraphic(point, text);
    testGraphic.textStyle.strokeStyle = undefined;
    const contextStrokeTextSpy = jest.spyOn(context, 'strokeText');

    // Act
    testGraphic.draw();

    // Assert
    expect(contextStrokeTextSpy).toHaveBeenCalledTimes(0);
  });
});
