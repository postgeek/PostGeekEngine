import TextStyle from '../../../src/renderingEngine/text/TextStyle';
import InvalidArguementError from '../../../src/core/errorHandling/errors/InvalidArguementError';
import ContextMock from '../../mocks/ContextMock';

describe('TextStyle', () => {
    it('should properly construct the TextStyle object with an empty list of properties', () => {
        // Act
        const textStyle = new TextStyle();

        // Asert
        expect(textStyle).toBeDefined();
    });
    it('should properly construct the TextStyle object with a correct textAlign', () => {
        // Arrange
        const textAlign = 'right';

        // Act
        const textStyle = new TextStyle({
            textAlign
        });

        // Assert
        expect(textStyle.textAlign).toBe(textAlign);
    });
    it('should throw an InvalidArguementError error when constructing the text style with an invalid textAlign', () => {
        // Arrange
        const textAlign = 'error';

        // Assert
        expect(() => new TextStyle({ textAlign })).toThrow(InvalidArguementError);
    });
    it('should properly construct the TextStyle object with a correct textBaseline', () => {
        // Arrange
        const textBaseline = 'top';

        // Act
        const textStyle = new TextStyle({
            textBaseline
        });

        // Assert
        expect(textStyle.textBaseline).toBe(textBaseline);
    });
    it('should throw an InvalidArguementError error when constructing the text style with an invalid textBaseline', () => {
        // Arrange
        const textBaseline = 'error';

        // Assert
        expect(() => new TextStyle({ textBaseline })).toThrow(InvalidArguementError);
    });
    it('should properly construct the TextStyle object with a correct direction', () => {
        // Arrange
        const direction = 'ltr';

        // Act
        const textStyle = new TextStyle({
            direction
        });

        // Assert
        expect(textStyle.direction).toBe(direction);
    });
    it('should throw an InvalidArguementError error when constructing the text style with an invalid direction', () => {
        // Arrange
        const direction = 'error';

        // Assert
        expect(() => new TextStyle({ direction })).toThrow(InvalidArguementError);
    });
    xit('should propely apply the TextStyle to the current context', () => {
        // TODO: Wait till the game tests are merged back into develop and then do this.
        // Arrange
        const font = font;
        const textAlign = textAlign;
        const textBaseline = textBaseline;
        const direction = direction;
        const textStyle = new TextStyle({
            font, textAlign, textBaseline, direction
        });
        let contextMock = new ContextMock();
        contextMock.textAlign = jest.fn().mockReturnValueOnce(textAlign);
        contextMock.textBaseline = jest.fn().mockReturnValueOnce(textBaseline);
        contextMock.direction = jest.fn().mockReturnValueOnce(direction);
        contextMock.font = jest.fn().mockReturnValueOnce(font);

        // Act
        const result = textStyle.apply(contextMock);

        // Assert
        expect(contextMock.textAlign.mock.calls.length).toBe(1);
        expect(contextMock.textBaseline.mock.calls.length).toBe(1);
        expect(contextMock.direction.mock.calls.length).toBe(1);
        expect(contextMock.font.mock.calls.length).toBe(1);
    });
    it('should properly clone the TextStyle object', () => {
        // Arrange
        const font = font;
        const textAlign = textAlign;
        const textBaseline = textBaseline;
        const direction = direction;
        const textStyle = new TextStyle({
            font, textAlign, textBaseline, direction
        });

        // Act
        const result = textStyle.clone();

        // Assert
        expect(result.font).toBe(font);
        expect(result.textAlign).toBe(textAlign);
        expect(result.textBaseline).toBe(textBaseline);
        expect(result.direction).toBe(direction);
    });
})