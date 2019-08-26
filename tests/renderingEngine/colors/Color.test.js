import Color from '../../../src/renderingEngine/colors/Color';
import HSLAColor from '../../../src/renderingEngine/colors/HSLAColor';
import RGBAColor from '../../../src/renderingEngine/colors/RGBAColor';

describe('predefined colors', () => {
  // https://html-color.codes/hex/cd5c5c
  it('should properly construct the indian red color', () => {
    // Arrange
    const name = 'indianred';
    const rgbaColor = new RGBAColor(205, 92, 92, 1);
    const hslaColor = new HSLAColor(0, 53, 58, 1);
    const hex = '#CD5C5C';

    // Act
    const indianRed = Color.INDIANRED;

    // Assert
    expect(indianRed.name).toBe(name);
    expect(indianRed.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(indianRed.hslaColor.toString()).toBe(hslaColor.toString());
    expect(indianRed.hex).toBe(hex);
  });
  // https://html-color.codes/hex/f08080
  it('should properly construct the light coral color', () => {
    // Arrange
    const name = 'lightcoral';
    const rgbaColor = new RGBAColor(240, 128, 128, 1);
    const hslaColor = new HSLAColor(0, 79, 72, 1);
    const hex = '#F08080';

    // Act
    const lightcoral = Color.LIGHTCORAL;

    // Assert
    expect(lightcoral.name).toBe(name);
    expect(lightcoral.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lightcoral.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lightcoral.hex).toBe(hex);
  });
  // https://html-color.codes/hex/fa8072
  it('should properly construct the salmon color', () => {
    // Arrange
    const name = 'salmon';
    const rgbaColor = new RGBAColor(250, 128, 114, 1);
    const hslaColor = new HSLAColor(6, 93, 71, 1);
    const hex = '#FA8072';

    // Act
    const salmon = Color.SALMON;

    // Assert
    expect(salmon.name).toBe(name);
    expect(salmon.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(salmon.hslaColor.toString()).toBe(hslaColor.toString());
    expect(salmon.hex).toBe(hex);
  });
  // https://html-color.codes/hex/e9967a
  it('should properly construct the dark salmon color', () => {
    // Arrange
    const name = 'darksalmon';
    const rgbaColor = new RGBAColor(233, 150, 122, 1);
    const hslaColor = new HSLAColor(15, 72, 70, 1);
    const hex = '#E9967A';

    // Act
    const darkSalmon = Color.DARKSALMON;

    // Assert
    expect(darkSalmon.name).toBe(name);
    expect(darkSalmon.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkSalmon.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkSalmon.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ffa07a
  it('should properly construct the light salmon color', () => {
    // Arrange
    const name = 'lightsalmon';
    const rgbaColor = new RGBAColor(255, 160, 122, 1);
    const hslaColor = new HSLAColor(17, 100, 74, 1);
    const hex = '#FFA07A';

    // Act
    const lightSalmon = Color.LIGHTSALMON;

    // Assert
    expect(lightSalmon.name).toBe(name);
    expect(lightSalmon.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lightSalmon.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lightSalmon.hex).toBe(hex);
  });
  // https://html-color.codes/hex/dc143c
  it('should properly construct the crimson color', () => {
    // Arrange
    const name = 'crimson';
    const rgbaColor = new RGBAColor(220, 20, 60, 1);
    const hslaColor = new HSLAColor(348, 83, 47, 1);
    const hex = '#DC143C';

    // Act
    const crimson = Color.CRIMSON;

    // Assert
    expect(crimson.name).toBe(name);
    expect(crimson.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(crimson.hslaColor.toString()).toBe(hslaColor.toString());
    expect(crimson.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ff0000
  it('should properly construct the red color', () => {
    // Arrange
    const name = 'red';
    const rgbaColor = new RGBAColor(255, 0, 0, 1);
    const hslaColor = new HSLAColor(0, 100, 50, 1);
    const hex = '#FF0000';

    // Act
    const red = Color.RED;

    // Assert
    expect(red.name).toBe(name);
    expect(red.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(red.hslaColor.toString()).toBe(hslaColor.toString());
    expect(red.hex).toBe(hex);
  });
  // https://html-color.codes/hex/b22222
  it('should properly construct the firebrick color', () => {
    // Arrange
    const name = 'firebrick';
    const rgbaColor = new RGBAColor(178, 34, 34, 1);
    const hslaColor = new HSLAColor(0, 68, 42, 1);
    const hex = '#B22222';

    // Act
    const fireBrick = Color.FIREBRICK;

    // Assert
    expect(fireBrick.name).toBe(name);
    expect(fireBrick.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(fireBrick.hslaColor.toString()).toBe(hslaColor.toString());
    expect(fireBrick.hex).toBe(hex);
  });
  // https://html-color.codes/hex/8b0000
  it('should properly construct the dark red color', () => {
    // Arrange
    const name = 'darkred';
    const rgbaColor = new RGBAColor(139, 0, 0, 1);
    const hslaColor = new HSLAColor(0, 100, 27, 1);
    const hex = '#8B0000';

    // Act
    const darkRed = Color.DARKRED;

    // Assert
    expect(darkRed.name).toBe(name);
    expect(darkRed.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkRed.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkRed.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ffc0cb
  it('should properly construct the pink color', () => {
    // Arrange
    const name = 'pink';
    const rgbaColor = new RGBAColor(255, 192, 203, 1);
    const hslaColor = new HSLAColor(350, 100, 88, 1);
    const hex = '#FFC0CB';

    // Act
    const pink = Color.PINK;

    // Assert
    expect(pink.name).toBe(name);
    expect(pink.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(pink.hslaColor.toString()).toBe(hslaColor.toString());
    expect(pink.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ffb6c1
  it('should properly construct the light pink color', () => {
    // Arrange
    const name = 'lightpink';
    const rgbaColor = new RGBAColor(255, 182, 193, 1);
    const hslaColor = new HSLAColor(351, 100, 86, 1);
    const hex = '#FFB6C1';

    // Act
    const lightPink = Color.LIGHTPINK;

    // Assert
    expect(lightPink.name).toBe(name);
    expect(lightPink.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lightPink.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lightPink.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ff69b4
  it('should properly construct the hot pink color', () => {
    // Arrange
    const name = 'hotpink';
    const rgbaColor = new RGBAColor(255, 105, 180, 1);
    const hslaColor = new HSLAColor(330, 100, 71, 1);
    const hex = '#FF69B4';

    // Act
    const hotPink = Color.HOTPINK;

    // Assert
    expect(hotPink.name).toBe(name);
    expect(hotPink.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(hotPink.hslaColor.toString()).toBe(hslaColor.toString());
    expect(hotPink.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ff1493
  it('should properly construct the deep pink color', () => {
    // Arrange
    const name = 'deeppink';
    const rgbaColor = new RGBAColor(255, 20, 147, 1);
    const hslaColor = new HSLAColor(328, 100, 54, 1);
    const hex = '#FF1493';

    // Act
    const deepPink = Color.DEEPPINK;

    // Assert
    expect(deepPink.name).toBe(name);
    expect(deepPink.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(deepPink.hslaColor.toString()).toBe(hslaColor.toString());
    expect(deepPink.hex).toBe(hex);
  });
  // https://html-color.codes/hex/c71585
  it('should properly construct the medium violet red color', () => {
    // Arrange
    const name = 'mediumvioletred';
    const rgbaColor = new RGBAColor(199, 21, 133, 1);
    const hslaColor = new HSLAColor(322, 81, 43, 1);
    const hex = '#C71585';

    // Act
    const mediumVioletRed = Color.MEDIUMVIOLETRED;

    // Assert
    expect(mediumVioletRed.name).toBe(name);
    expect(mediumVioletRed.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(mediumVioletRed.hslaColor.toString()).toBe(hslaColor.toString());
    expect(mediumVioletRed.hex).toBe(hex);
  });
  // https://html-color.codes/hex/db7093
  it('should properly construct the pale violet red color', () => {
    // Arrange
    const name = 'palevioletred';
    const rgbaColor = new RGBAColor(219, 112, 147, 1);
    const hslaColor = new HSLAColor(340, 60, 65, 1);
    const hex = '#DB7093';

    // Act
    const paleVioletRed = Color.PALEVIOLETRED;

    // Assert
    expect(paleVioletRed.name).toBe(name);
    expect(paleVioletRed.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(paleVioletRed.hslaColor.toString()).toBe(hslaColor.toString());
    expect(paleVioletRed.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ff7f50
  it('should properly construct the coral color', () => {
    // Arrange
    const name = 'coral';
    const rgbaColor = new RGBAColor(255, 127, 80, 1);
    const hslaColor = new HSLAColor(16, 100, 66, 1);
    const hex = '#FF7F50';

    // Act
    const coral = Color.CORAL;

    // Assert
    expect(coral.name).toBe(name);
    expect(coral.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(coral.hslaColor.toString()).toBe(hslaColor.toString());
    expect(coral.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ff6347
  it('should properly construct the tomato color', () => {
    // Arrange
    const name = 'tomato';
    const rgbaColor = new RGBAColor(255, 99, 71, 1);
    const hslaColor = new HSLAColor(9, 100, 64, 1);
    const hex = '#FF6347';

    // Act
    const tomato = Color.TOMATO;

    // Assert
    expect(tomato.name).toBe(name);
    expect(tomato.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(tomato.hslaColor.toString()).toBe(hslaColor.toString());
    expect(tomato.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ff4500
  it('should properly construct the orange red color', () => {
    // Arrange
    const name = 'orangered';
    const rgbaColor = new RGBAColor(255, 69, 0, 1);
    const hslaColor = new HSLAColor(16, 100, 50, 1);
    const hex = '#FF4500';

    // Act
    const orangeRed = Color.ORANGERED;

    // Assert
    expect(orangeRed.name).toBe(name);
    expect(orangeRed.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(orangeRed.hslaColor.toString()).toBe(hslaColor.toString());
    expect(orangeRed.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ff8c00
  it('should properly construct the dark orange color', () => {
    // Arrange
    const name = 'darkorange';
    const rgbaColor = new RGBAColor(255, 140, 0, 1);
    const hslaColor = new HSLAColor(33, 100, 50, 1);
    const hex = '#FF8C00';

    // Act
    const darkOrange = Color.DARKORANGE;

    // Assert
    expect(darkOrange.name).toBe(name);
    expect(darkOrange.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkOrange.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkOrange.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ffa500
  it('should properly construct the orange color', () => {
    // Arrange
    const name = 'orange';
    const rgbaColor = new RGBAColor(255, 165, 0, 1);
    const hslaColor = new HSLAColor(39, 100, 50, 1);
    const hex = '#FFA500';

    // Act
    const orange = Color.ORANGE;

    // Assert
    expect(orange.name).toBe(name);
    expect(orange.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(orange.hslaColor.toString()).toBe(hslaColor.toString());
    expect(orange.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ffd700
  it('should properly construct the gold color', () => {
    // Arrange
    const name = 'gold';
    const rgbaColor = new RGBAColor(255, 215, 0, 1);
    const hslaColor = new HSLAColor(51, 100, 50, 1);
    const hex = '#FFD700';

    // Act
    const gold = Color.GOLD;

    // Assert
    expect(gold.name).toBe(name);
    expect(gold.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(gold.hslaColor.toString()).toBe(hslaColor.toString());
    expect(gold.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ffff00
  it('should properly construct the yellow color', () => {
    // Arrange
    const name = 'yellow';
    const rgbaColor = new RGBAColor(255, 255, 0, 1);
    const hslaColor = new HSLAColor(60, 100, 50, 1);
    const hex = '#FFFF00';

    // Act
    const yellow = Color.YELLOW;

    // Assert
    expect(yellow.name).toBe(name);
    expect(yellow.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(yellow.hslaColor.toString()).toBe(hslaColor.toString());
    expect(yellow.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ffffe0
  it('should properly construct the light yellow color', () => {
    // Arrange
    const name = 'lightyellow';
    const rgbaColor = new RGBAColor(255, 255, 224, 1);
    const hslaColor = new HSLAColor(60, 100, 94, 1);
    const hex = '#FFFFE0';

    // Act
    const lightYellow = Color.LIGHTYELLOW;

    // Assert
    expect(lightYellow.name).toBe(name);
    expect(lightYellow.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lightYellow.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lightYellow.hex).toBe(hex);
  });
  // https://html-color.codes/hex/fffacd
  it('should properly construct the lemon chiffon color', () => {
    // Arrange
    const name = 'lemonchiffon';
    const rgbaColor = new RGBAColor(255, 250, 205, 1);
    const hslaColor = new HSLAColor(54, 100, 90, 1);
    const hex = '#FFFACD';

    // Act
    const lemonChiffon = Color.LEMONCHIFFON;

    // Assert
    expect(lemonChiffon.name).toBe(name);
    expect(lemonChiffon.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lemonChiffon.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lemonChiffon.hex).toBe(hex);
  });
  // https://html-color.codes/hex/fafad2
  it('should properly construct the light goldenrod yellow color', () => {
    // Arrange
    const name = 'lightgoldenrodyellow';
    const rgbaColor = new RGBAColor(250, 250, 210, 1);
    const hslaColor = new HSLAColor(60, 80, 90, 1);
    const hex = '#FAFAD2';

    // Act
    const lightGoldenrodYellow = Color.LIGHTGOLDENRODYELLOW;

    // Assert
    expect(lightGoldenrodYellow.name).toBe(name);
    expect(lightGoldenrodYellow.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lightGoldenrodYellow.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lightGoldenrodYellow.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ffefd5
  it('should properly construct the papaya whip color', () => {
    // Arrange
    const name = 'papayawhip';
    const rgbaColor = new RGBAColor(255, 239, 213, 1);
    const hslaColor = new HSLAColor(37, 100, 92, 1);
    const hex = '#FFEFD5';

    // Act
    const papayaWhip = Color.PAPAYAWHIP;

    // Assert
    expect(papayaWhip.name).toBe(name);
    expect(papayaWhip.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(papayaWhip.hslaColor.toString()).toBe(hslaColor.toString());
    expect(papayaWhip.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ffe4b5
  it('should properly construct the moccasin color', () => {
    // Arrange
    const name = 'moccasin';
    const rgbaColor = new RGBAColor(255, 228, 181, 1);
    const hslaColor = new HSLAColor(38, 100, 85, 1);
    const hex = '#FFE4B5';

    // Act
    const moccasin = Color.MOCCASIN;

    // Assert
    expect(moccasin.name).toBe(name);
    expect(moccasin.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(moccasin.hslaColor.toString()).toBe(hslaColor.toString());
    expect(moccasin.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ffdab9
  it('should properly construct the peach puff color', () => {
    // Arrange
    const name = 'peachpuff';
    const rgbaColor = new RGBAColor(255, 218, 185, 1);
    const hslaColor = new HSLAColor(28, 100, 86, 1);
    const hex = '#FFDAB9';

    // Act
    const peachPuff = Color.PEACHPUFF;

    // Assert
    expect(peachPuff.name).toBe(name);
    expect(peachPuff.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(peachPuff.hslaColor.toString()).toBe(hslaColor.toString());
    expect(peachPuff.hex).toBe(hex);
  });
  // https://html-color.codes/hex/eee8aa
  it('should properly construct the pale golden rod color', () => {
    // Arrange
    const name = 'palegoldenrod';
    const rgbaColor = new RGBAColor(238, 232, 170, 1);
    const hslaColor = new HSLAColor(55, 67, 80, 1);
    const hex = '#EEE8AA';

    // Act
    const paleGoldenrod = Color.PALEGOLDENROD;

    // Assert
    expect(paleGoldenrod.name).toBe(name);
    expect(paleGoldenrod.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(paleGoldenrod.hslaColor.toString()).toBe(hslaColor.toString());
    expect(paleGoldenrod.hex).toBe(hex);
  });
  // https://html-color.codes/hex/f0e68c
  it('should properly construct the khaki color', () => {
    // Arrange
    const name = 'khaki';
    const rgbaColor = new RGBAColor(240, 230, 140, 1);
    const hslaColor = new HSLAColor(54, 77, 75, 1);
    const hex = '#F0E68C';

    // Act
    const khaki = Color.KHAKI;

    // Assert
    expect(khaki.name).toBe(name);
    expect(khaki.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(khaki.hslaColor.toString()).toBe(hslaColor.toString());
    expect(khaki.hex).toBe(hex);
  });
  // https://html-color.codes/hex/bdb76b
  it('should properly construct the dark khaki color', () => {
    // Arrange
    const name = 'darkkhaki';
    const rgbaColor = new RGBAColor(189, 183, 107, 1);
    const hslaColor = new HSLAColor(56, 38, 58, 1);
    const hex = '#BDB76B';

    // Act
    const darkKhaki = Color.DARKKHAKI;

    // Assert
    expect(darkKhaki.name).toBe(name);
    expect(darkKhaki.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkKhaki.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkKhaki.hex).toBe(hex);
  });
  // https://html-color.codes/hex/e6e6fa
  it('should properly construct the lavender color', () => {
    // Arrange
    const name = 'lavender';
    const rgbaColor = new RGBAColor(230, 230, 250, 1);
    const hslaColor = new HSLAColor(240, 67, 94, 1);
    const hex = '#E6E6FA';

    // Act
    const lavender = Color.LAVENDER;

    // Assert
    expect(lavender.name).toBe(name);
    expect(lavender.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lavender.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lavender.hex).toBe(hex);
  });
  // https://html-color.codes/hex/d8bfd8
  it('should properly construct the thistle color', () => {
    // Arrange
    const name = 'thistle';
    const rgbaColor = new RGBAColor(216, 191, 216, 1);
    const hslaColor = new HSLAColor(300, 24, 80, 1);
    const hex = '#D8BFD8';

    // Act
    const thistle = Color.THISTLE;

    // Assert
    expect(thistle.name).toBe(name);
    expect(thistle.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(thistle.hslaColor.toString()).toBe(hslaColor.toString());
    expect(thistle.hex).toBe(hex);
  });
  // https://html-color.codes/hex/dda0dd
  it('should properly construct the plum color', () => {
    // Arrange
    const name = 'plum';
    const rgbaColor = new RGBAColor(221, 160, 221, 1);
    const hslaColor = new HSLAColor(300, 47, 75, 1);
    const hex = '#DDA0DD';

    // Act
    const plum = Color.PLUM;

    // Assert
    expect(plum.name).toBe(name);
    expect(plum.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(plum.hslaColor.toString()).toBe(hslaColor.toString());
    expect(plum.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ee82ee
  it('should properly construct the violet color', () => {
    // Arrange
    const name = 'violet';
    const rgbaColor = new RGBAColor(238, 130, 238, 1);
    const hslaColor = new HSLAColor(300, 76, 72, 1);
    const hex = '#EE82EE';

    // Act
    const violet = Color.VIOLET;

    // Assert
    expect(violet.name).toBe(name);
    expect(violet.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(violet.hslaColor.toString()).toBe(hslaColor.toString());
    expect(violet.hex).toBe(hex);
  });
  // https://html-color.codes/hex/da70d6
  it('should properly construct the orchid color', () => {
    // Arrange
    const name = 'orchid';
    const rgbaColor = new RGBAColor(218, 112, 214, 1);
    const hslaColor = new HSLAColor(302, 59, 65, 1);
    const hex = '#DA70D6';

    // Act
    const orchid = Color.ORCHID;

    // Assert
    expect(orchid.name).toBe(name);
    expect(orchid.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(orchid.hslaColor.toString()).toBe(hslaColor.toString());
    expect(orchid.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ff00ff
  it('should properly construct the fuchsia color', () => {
    // Arrange
    const name = 'fuchsia';
    const rgbaColor = new RGBAColor(255, 0, 255, 1);
    const hslaColor = new HSLAColor(300, 100, 50, 1);
    const hex = '#FF00FF';

    // Act
    const fuchsia = Color.FUCHSIA;

    // Assert
    expect(fuchsia.name).toBe(name);
    expect(fuchsia.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(fuchsia.hslaColor.toString()).toBe(hslaColor.toString());
    expect(fuchsia.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ff00ff
  it('should properly construct the magenta color', () => {
    // Arrange
    const name = 'fuchsia';
    const rgbaColor = new RGBAColor(255, 0, 255, 1);
    const hslaColor = new HSLAColor(300, 100, 50, 1);
    const hex = '#FF00FF';

    // Act
    const magenta = Color.MAGENTA;

    // Assert
    expect(magenta.name).toBe(name);
    expect(magenta.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(magenta.hslaColor.toString()).toBe(hslaColor.toString());
    expect(magenta.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ba55d3
  it('should properly construct the medium orchid color', () => {
    // Arrange
    const name = 'mediumorchid';
    const rgbaColor = new RGBAColor(186, 85, 211, 1);
    const hslaColor = new HSLAColor(288, 59, 58, 1);
    const hex = '#BA55D3';

    // Act
    const mediumOrchid = Color.MEDIUMORCHID;

    // Assert
    expect(mediumOrchid.name).toBe(name);
    expect(mediumOrchid.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(mediumOrchid.hslaColor.toString()).toBe(hslaColor.toString());
    expect(mediumOrchid.hex).toBe(hex);
  });
  // https://html-color.codes/hex/9370db
  it('should properly construct the medium purple color', () => {
    // Arrange
    const name = 'mediumpurple';
    const rgbaColor = new RGBAColor(147, 112, 219, 1);
    const hslaColor = new HSLAColor(260, 60, 65, 1);
    const hex = '#9370DB';

    // Act
    const mediumPurple = Color.MEDIUMPURPLE;

    // Assert
    expect(mediumPurple.name).toBe(name);
    expect(mediumPurple.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(mediumPurple.hslaColor.toString()).toBe(hslaColor.toString());
    expect(mediumPurple.hex).toBe(hex);
  });
  // https://html-color.codes/hex/663399
  it('should properly construct the rebecca purple color', () => {
    // Arrange
    const name = 'rebeccapurple';
    const rgbaColor = new RGBAColor(102, 51, 153, 1);
    const hslaColor = new HSLAColor(270, 50, 40, 1);
    const hex = '#663399';

    // Act
    const rebeccaPurple = Color.REBECCAPURPLE;

    // Assert
    expect(rebeccaPurple.name).toBe(name);
    expect(rebeccaPurple.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(rebeccaPurple.hslaColor.toString()).toBe(hslaColor.toString());
    expect(rebeccaPurple.hex).toBe(hex);
  });
  // https://html-color.codes/hex/8a2be2
  it('should properly construct the blue violet color', () => {
    // Arrange
    const name = 'blueviolet';
    const rgbaColor = new RGBAColor(138, 43, 225, 1);
    const hslaColor = new HSLAColor(271, 76, 53, 1);
    const hex = '#8A2BE2';

    // Act
    const blueViolet = Color.BLUEVIOLET;

    // Assert
    expect(blueViolet.name).toBe(name);
    expect(blueViolet.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(blueViolet.hslaColor.toString()).toBe(hslaColor.toString());
    expect(blueViolet.hex).toBe(hex);
  });
});
