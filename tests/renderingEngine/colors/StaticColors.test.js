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
  it('should properly construct the dark violet color', () => {
    // Arrange
    const name = 'blueviolet';
    const rgbaColor = new RGBAColor(138, 43, 226, 1);
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
  // https://html-color.codes/hex/9400d3
  it('should properly construct the dark violet color', () => {
    // Arrange
    const name = 'darkviolet';
    const rgbaColor = new RGBAColor(148, 0, 211, 1);
    const hslaColor = new HSLAColor(282, 100, 41, 1);
    const hex = '#9400D3';

    // Act
    const darkViolet = Color.DARKVIOLET;

    // Assert
    expect(darkViolet.name).toBe(name);
    expect(darkViolet.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkViolet.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkViolet.hex).toBe(hex);
  });
  // https://html-color.codes/hex/9932cc
  it('should properly construct the dark orchid color', () => {
    // Arrange
    const name = 'darkorchid';
    const rgbaColor = new RGBAColor(153, 50, 204, 1);
    const hslaColor = new HSLAColor(280, 61, 50, 1);
    const hex = '#9932CC';

    // Act
    const darkOrchid = Color.DARKORCHID;

    // Assert
    expect(darkOrchid.name).toBe(name);
    expect(darkOrchid.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkOrchid.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkOrchid.hex).toBe(hex);
  });
  // https://html-color.codes/hex/8b008b
  it('should properly construct the dark magenta color', () => {
    // Arrange
    const name = 'darkmagenta';
    const rgbaColor = new RGBAColor(139, 0, 139, 1);
    const hslaColor = new HSLAColor(300, 100, 27, 1);
    const hex = '#8B008B';

    // Act
    const darkMagenta = Color.DARKMEGENTA;

    // Assert
    expect(darkMagenta.name).toBe(name);
    expect(darkMagenta.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkMagenta.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkMagenta.hex).toBe(hex);
  });
  // https://html-color.codes/hex/800080
  it('should properly construct the purple color', () => {
    // Arrange
    const name = 'purple';
    const rgbaColor = new RGBAColor(128, 0, 128, 1);
    const hslaColor = new HSLAColor(300, 100, 25, 1);
    const hex = '#800080';

    // Act
    const purple = Color.PURPLE;

    // Assert
    expect(purple.name).toBe(name);
    expect(purple.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(purple.hslaColor.toString()).toBe(hslaColor.toString());
    expect(purple.hex).toBe(hex);
  });
  // https://html-color.codes/hex/4b0082
  it('should properly construct the indigo color', () => {
    // Arrange
    const name = 'indigo';
    const rgbaColor = new RGBAColor(75, 0, 130, 1);
    const hslaColor = new HSLAColor(275, 100, 25, 1);
    const hex = '#4B0082';

    // Act
    const indigo = Color.INDIGO;

    // Assert
    expect(indigo.name).toBe(name);
    expect(indigo.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(indigo.hslaColor.toString()).toBe(hslaColor.toString());
    expect(indigo.hex).toBe(hex);
  });
  // https://html-color.codes/hex/6A5ACD
  it('should properly construct the slate blue color', () => {
    // Arrange
    const name = 'slateblue';
    const rgbaColor = new RGBAColor(106, 90, 205, 1);
    const hslaColor = new HSLAColor(248, 53, 58, 1);
    const hex = '#6A5ACD';

    // Act
    const slateBlue = Color.SLATEBLUE;

    // Assert
    expect(slateBlue.name).toBe(name);
    expect(slateBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(slateBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(slateBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/483B8B
  it('should properly construct the dark slate blue color', () => {
    // Arrange
    const name = 'darkslateblue';
    const rgbaColor = new RGBAColor(72, 59, 139, 1);
    const hslaColor = new HSLAColor(250, 40, 39, 1);
    const hex = '#483B8B';

    // Act
    const darkSlateBlue = Color.DARKSLATEBLUE;

    // Assert
    expect(darkSlateBlue.name).toBe(name);
    expect(darkSlateBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkSlateBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkSlateBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/7B68EE
  it('should properly construct the medium slate blue color', () => {
    // Arrange
    const name = 'mediumslateblue';
    const rgbaColor = new RGBAColor(123, 104, 238, 1);
    const hslaColor = new HSLAColor(249, 80, 67, 1);
    const hex = '#7B68EE';

    // Act
    const mediumSlateBlue = Color.MEDIUMSLATEBLUE;

    // Assert
    expect(mediumSlateBlue.name).toBe(name);
    expect(mediumSlateBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(mediumSlateBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(mediumSlateBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ADFF2F
  it('should properly construct the green yellow color', () => {
    // Arrange
    const name = 'greenyellow';
    const rgbaColor = new RGBAColor(173, 255, 47, 1);
    const hslaColor = new HSLAColor(84, 100, 59, 1);
    const hex = '#ADFF2F';

    // Act
    const greenYellow = Color.GREENYELLOW;

    // Assert
    expect(greenYellow.name).toBe(name);
    expect(greenYellow.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(greenYellow.hslaColor.toString()).toBe(hslaColor.toString());
    expect(greenYellow.hex).toBe(hex);
  });
  // https://html-color.codes/hex/7FFF00
  it('should properly construct the chart reuse color', () => {
    // Arrange
    const name = 'chartreuse';
    const rgbaColor = new RGBAColor(127, 255, 0, 1);
    const hslaColor = new HSLAColor(90, 100, 50, 1);
    const hex = '#7FFF00';

    // Act
    const chartReuse = Color.CHARTREUSE;

    // Assert
    expect(chartReuse.name).toBe(name);
    expect(chartReuse.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(chartReuse.hslaColor.toString()).toBe(hslaColor.toString());
    expect(chartReuse.hex).toBe(hex);
  });
  // https://html-color.codes/hex/7CFC00
  it('should properly construct the lawn green color', () => {
    // Arrange
    const name = 'lawngreen';
    const rgbaColor = new RGBAColor(124, 252, 0, 1);
    const hslaColor = new HSLAColor(90, 100, 49, 1);
    const hex = '#7CFC00';

    // Act
    const lawnGreen = Color.LAWNGREEN;

    // Assert
    expect(lawnGreen.name).toBe(name);
    expect(lawnGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lawnGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lawnGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/00FF00
  it('should properly construct the lime color', () => {
    // Arrange
    const name = 'lime';
    const rgbaColor = new RGBAColor(0, 255, 0, 1);
    const hslaColor = new HSLAColor(120, 100, 50, 1);
    const hex = '#00FF00';

    // Act
    const lime = Color.LIME;

    // Assert
    expect(lime.name).toBe(name);
    expect(lime.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lime.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lime.hex).toBe(hex);
  });
  // https://html-color.codes/hex/32CD32
  it('should properly construct the lime green color', () => {
    // Arrange
    const name = 'limegreen';
    const rgbaColor = new RGBAColor(50, 205, 50, 1);
    const hslaColor = new HSLAColor(120, 61, 50, 1);
    const hex = '#32CD32';

    // Act
    const limeGreen = Color.LIMEGREEN;

    // Assert
    expect(limeGreen.name).toBe(name);
    expect(limeGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(limeGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(limeGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/98FB98
  it('should properly construct the pale green color', () => {
    // Arrange
    const name = 'palegreen';
    const rgbaColor = new RGBAColor(152, 251, 152, 1);
    const hslaColor = new HSLAColor(120, 93, 79, 1);
    const hex = '#98FB98';

    // Act
    const paleGreen = Color.PALEGREEN;

    // Assert
    expect(paleGreen.name).toBe(name);
    expect(paleGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(paleGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(paleGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/90EE90
  it('should properly construct the light green color', () => {
    // Arrange
    const name = 'lightgreen';
    const rgbaColor = new RGBAColor(144, 238, 144, 1);
    const hslaColor = new HSLAColor(120, 73, 75, 1);
    const hex = '#90EE90';

    // Act
    const lightGreen = Color.LIGHTGREEN;

    // Assert
    expect(lightGreen.name).toBe(name);
    expect(lightGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lightGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lightGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/00FA9A
  it('should properly construct the medium spring green color', () => {
    // Arrange
    const name = 'mediumspringgreen';
    const rgbaColor = new RGBAColor(0, 250, 154, 1);
    const hslaColor = new HSLAColor(157, 100, 49, 1);
    const hex = '#00FA9A';

    // Act
    const mediumSpringGreen = Color.MEDIUMSPRINGGREEN;

    // Assert
    expect(mediumSpringGreen.name).toBe(name);
    expect(mediumSpringGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(mediumSpringGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(mediumSpringGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/00FF7F
  it('should properly construct the spring green color', () => {
    // Arrange
    const name = 'springgreen';
    const rgbaColor = new RGBAColor(0, 255, 127, 1);
    const hslaColor = new HSLAColor(150, 100, 50, 1);
    const hex = '#00FF7F';

    // Act
    const springGreen = Color.SPRINGGREEN;

    // Assert
    expect(springGreen.name).toBe(name);
    expect(springGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(springGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(springGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/3CB371
  it('should properly construct the medium sea green color', () => {
    // Arrange
    const name = 'mediumseagreen';
    const rgbaColor = new RGBAColor(60, 179, 113, 1);
    const hslaColor = new HSLAColor(147, 50, 47, 1);
    const hex = '#3CB371';

    // Act
    const mediumSeaGreen = Color.MEDIUMSEAGREEN;

    // Assert
    expect(mediumSeaGreen.name).toBe(name);
    expect(mediumSeaGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(mediumSeaGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(mediumSeaGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/2E8B57
  it('should properly construct the sea green color', () => {
    // Arrange
    const name = 'seagreen';
    const rgbaColor = new RGBAColor(46, 139, 87, 1);
    const hslaColor = new HSLAColor(146, 50, 36, 1);
    const hex = '#2E8B57';

    // Act
    const seaGreen = Color.SEAGREEN;

    // Assert
    expect(seaGreen.name).toBe(name);
    expect(seaGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(seaGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(seaGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/228B22
  it('should properly construct the forest green color', () => {
    // Arrange
    const name = 'forestgreen';
    const rgbaColor = new RGBAColor(34, 139, 34, 1);
    const hslaColor = new HSLAColor(120, 61, 34, 1);
    const hex = '#228B22';

    // Act
    const forestGreen = Color.FORESTGREEN;

    // Assert
    expect(forestGreen.name).toBe(name);
    expect(forestGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(forestGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(forestGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/008000
  it('should properly construct the green color', () => {
    // Arrange
    const name = 'green';
    const rgbaColor = new RGBAColor(0, 128, 0, 1);
    const hslaColor = new HSLAColor(120, 100, 25, 1);
    const hex = '#008000';

    // Act
    const green = Color.GREEN;

    // Assert
    expect(green.name).toBe(name);
    expect(green.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(green.hslaColor.toString()).toBe(hslaColor.toString());
    expect(green.hex).toBe(hex);
  });
  // https://html-color.codes/hex/006400
  it('should properly construct the dark green color', () => {
    // Arrange
    const name = 'darkgreen';
    const rgbaColor = new RGBAColor(0, 100, 0, 1);
    const hslaColor = new HSLAColor(120, 100, 20, 1);
    const hex = '#006400';

    // Act
    const darkGreen = Color.DARKGREEN;

    // Assert
    expect(darkGreen.name).toBe(name);
    expect(darkGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/9ACD32
  it('should properly construct the yellow green color', () => {
    // Arrange
    const name = 'yellowgreen';
    const rgbaColor = new RGBAColor(154, 205, 50, 1);
    const hslaColor = new HSLAColor(80, 61, 50, 1);
    const hex = '#9ACD32';

    // Act
    const yellowGreen = Color.YELLOWGREEN;

    // Assert
    expect(yellowGreen.name).toBe(name);
    expect(yellowGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(yellowGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(yellowGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/6B8E23
  it('should properly construct the olive drab color', () => {
    // Arrange
    const name = 'olivedrab';
    const rgbaColor = new RGBAColor(107, 142, 35, 1);
    const hslaColor = new HSLAColor(80, 60, 35, 1);
    const hex = '#6B8E23';

    // Act
    const oliveDrab = Color.OLIVEDRAB;

    // Assert
    expect(oliveDrab.name).toBe(name);
    expect(oliveDrab.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(oliveDrab.hslaColor.toString()).toBe(hslaColor.toString());
    expect(oliveDrab.hex).toBe(hex);
  });
  // https://html-color.codes/hex/808000
  it('should properly construct the olive color', () => {
    // Arrange
    const name = 'olive';
    const rgbaColor = new RGBAColor(128, 128, 0, 1);
    const hslaColor = new HSLAColor(60, 100, 25, 1);
    const hex = '#808000';

    // Act
    const olive = Color.OLIVE;

    // Assert
    expect(olive.name).toBe(name);
    expect(olive.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(olive.hslaColor.toString()).toBe(hslaColor.toString());
    expect(olive.hex).toBe(hex);
  });
  // https://html-color.codes/hex/556B2F
  it('should properly construct the dark olive green color', () => {
    // Arrange
    const name = 'darkolivegreen';
    const rgbaColor = new RGBAColor(85, 107, 47, 1);
    const hslaColor = new HSLAColor(82, 39, 30, 1);
    const hex = '#556B2F';

    // Act
    const darkOliveGreen = Color.DARKOLIVEGREEN;

    // Assert
    expect(darkOliveGreen.name).toBe(name);
    expect(darkOliveGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkOliveGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkOliveGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/66CDAA
  it('should properly construct the medium aqua marine color', () => {
    // Arrange
    const name = 'mediumaquamarine';
    const rgbaColor = new RGBAColor(102, 205, 170, 1);
    const hslaColor = new HSLAColor(160, 51, 60, 1);
    const hex = '#66CDAA';

    // Act
    const mediumAquaMarine = Color.MEDIUMAQUAMARINE;

    // Assert
    expect(mediumAquaMarine.name).toBe(name);
    expect(mediumAquaMarine.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(mediumAquaMarine.hslaColor.toString()).toBe(hslaColor.toString());
    expect(mediumAquaMarine.hex).toBe(hex);
  });
  // https://html-color.codes/hex/8FBC8B
  it('should properly construct the dark sea green color', () => {
    // Arrange
    const name = 'darkseagreen';
    const rgbaColor = new RGBAColor(143, 188, 139, 1);
    const hslaColor = new HSLAColor(115, 27, 64, 1);
    const hex = '#8FBC8B';

    // Act
    const darkSeaGreen = Color.DARKSEAGREEN;

    // Assert
    expect(darkSeaGreen.name).toBe(name);
    expect(darkSeaGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkSeaGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkSeaGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/20B2AA
  it('should properly construct the light sea green color', () => {
    // Arrange
    const name = 'lightseagreen';
    const rgbaColor = new RGBAColor(32, 178, 170, 1);
    const hslaColor = new HSLAColor(177, 70, 41, 1);
    const hex = '#20B2AA';

    // Act
    const lightSeaGreen = Color.LIGHTSEAGREEN;

    // Assert
    expect(lightSeaGreen.name).toBe(name);
    expect(lightSeaGreen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lightSeaGreen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lightSeaGreen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/008B8B
  it('should properly construct the dark cyan color', () => {
    // Arrange
    const name = 'darkcyan';
    const rgbaColor = new RGBAColor(0, 139, 139, 1);
    const hslaColor = new HSLAColor(180, 100, 27, 1);
    const hex = '#008B8B';

    // Act
    const darkCyan = Color.DARKCYAN;

    // Assert
    expect(darkCyan.name).toBe(name);
    expect(darkCyan.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkCyan.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkCyan.hex).toBe(hex);
  });
  // https://html-color.codes/hex/008080
  it('should properly construct the teal color', () => {
    // Arrange
    const name = 'teal';
    const rgbaColor = new RGBAColor(0, 128, 128, 1);
    const hslaColor = new HSLAColor(180, 100, 25, 1);
    const hex = '#008080';

    // Act
    const teal = Color.TEAL;

    // Assert
    expect(teal.name).toBe(name);
    expect(teal.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(teal.hslaColor.toString()).toBe(hslaColor.toString());
    expect(teal.hex).toBe(hex);
  });
  // https://html-color.codes/hex/00FFFF
  it('should properly construct the aqua color', () => {
    // Arrange
    const name = 'aqua';
    const rgbaColor = new RGBAColor(0, 255, 255, 1);
    const hslaColor = new HSLAColor(180, 100, 50, 1);
    const hex = '#00FFFF';

    // Act
    const aqua = Color.AQUA;

    // Assert
    expect(aqua.name).toBe(name);
    expect(aqua.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(aqua.hslaColor.toString()).toBe(hslaColor.toString());
    expect(aqua.hex).toBe(hex);
  });
  // https://html-color.codes/hex/00FFFF
  it('should properly construct the cyan color', () => {
    // Arrange
    const name = 'aqua';
    const rgbaColor = new RGBAColor(0, 255, 255, 1);
    const hslaColor = new HSLAColor(180, 100, 50, 1);
    const hex = '#00FFFF';

    // Act
    const cyan = Color.CYAN;

    // Assert
    expect(cyan.name).toBe(name);
    expect(cyan.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(cyan.hslaColor.toString()).toBe(hslaColor.toString());
    expect(cyan.hex).toBe(hex);
  });
  // https://html-color.codes/hex/E0FFFF
  it('should properly construct the light cyan color', () => {
    // Arrange
    const name = 'lightcyan';
    const rgbaColor = new RGBAColor(224, 255, 255, 1);
    const hslaColor = new HSLAColor(180, 100, 94, 1);
    const hex = '#E0FFFF';

    // Act
    const lightCyan = Color.LIGHTCYAN;

    // Assert
    expect(lightCyan.name).toBe(name);
    expect(lightCyan.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lightCyan.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lightCyan.hex).toBe(hex);
  });
  // https://html-color.codes/hex/AFEEEE
  it('should properly construct the pale turquoise color', () => {
    // Arrange
    const name = 'paleturquoise';
    const rgbaColor = new RGBAColor(175, 238, 238, 1);
    const hslaColor = new HSLAColor(180, 65, 81, 1);
    const hex = '#AFEEEE';

    // Act
    const paleTurquoise = Color.PALETURQUOISE;

    // Assert
    expect(paleTurquoise.name).toBe(name);
    expect(paleTurquoise.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(paleTurquoise.hslaColor.toString()).toBe(hslaColor.toString());
    expect(paleTurquoise.hex).toBe(hex);
  });
  // https://html-color.codes/hex/7FFFD4
  it('should properly construct the aquamarine color', () => {
    // Arrange
    const name = 'aquamarine';
    const rgbaColor = new RGBAColor(127, 255, 212, 1);
    const hslaColor = new HSLAColor(160, 100, 75, 1);
    const hex = '#7FFFD4';

    // Act
    const aquamarine = Color.AQUAMARINE;

    // Assert
    expect(aquamarine.name).toBe(name);
    expect(aquamarine.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(aquamarine.hslaColor.toString()).toBe(hslaColor.toString());
    expect(aquamarine.hex).toBe(hex);
  });
  // https://html-color.codes/hex/40E0D0
  it('should properly construct the turquoise color', () => {
    // Arrange
    const name = 'turquoise';
    const rgbaColor = new RGBAColor(64, 224, 208, 1);
    const hslaColor = new HSLAColor(174, 72, 56, 1);
    const hex = '#40E0D0';

    // Act
    const turquoise = Color.TURQUOISE;

    // Assert
    expect(turquoise.name).toBe(name);
    expect(turquoise.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(turquoise.hslaColor.toString()).toBe(hslaColor.toString());
    expect(turquoise.hex).toBe(hex);
  });
  // https://html-color.codes/hex/48D1CC
  it('should properly construct the medium turquoise color', () => {
    // Arrange
    const name = 'mediumturquoise';
    const rgbaColor = new RGBAColor(72, 209, 204, 1);
    const hslaColor = new HSLAColor(178, 60, 55, 1);
    const hex = '#48D1CC';

    // Act
    const mediumTurquoise = Color.MEDIUMTURQUOISE;

    // Assert
    expect(mediumTurquoise.name).toBe(name);
    expect(mediumTurquoise.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(mediumTurquoise.hslaColor.toString()).toBe(hslaColor.toString());
    expect(mediumTurquoise.hex).toBe(hex);
  });
  // https://html-color.codes/hex/00CED1
  it('should properly construct the dark turquoise color', () => {
    // Arrange
    const name = 'darkturquoise';
    const rgbaColor = new RGBAColor(0, 206, 209, 1);
    const hslaColor = new HSLAColor(181, 100, 41, 1);
    const hex = '#00CED1';

    // Act
    const darkTurquoise = Color.DARKTURQUOISE;

    // Assert
    expect(darkTurquoise.name).toBe(name);
    expect(darkTurquoise.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkTurquoise.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkTurquoise.hex).toBe(hex);
  });
  // https://html-color.codes/hex/5F9EA0
  it('should properly construct the cadet blue color', () => {
    // Arrange
    const name = 'cadetblue';
    const rgbaColor = new RGBAColor(95, 158, 160, 1);
    const hslaColor = new HSLAColor(182, 25, 50, 1);
    const hex = '#5F9EA0';

    // Act
    const cadetBlue = Color.CADETBLUE;

    // Assert
    expect(cadetBlue.name).toBe(name);
    expect(cadetBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(cadetBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(cadetBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/4682B4
  it('should properly construct the steel blue color', () => {
    // Arrange
    const name = 'steelblue';
    const rgbaColor = new RGBAColor(70, 130, 180, 1);
    const hslaColor = new HSLAColor(207, 44, 49, 1);
    const hex = '#4682B4';

    // Act
    const steelBlue = Color.STEELBLUE;

    // Assert
    expect(steelBlue.name).toBe(name);
    expect(steelBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(steelBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(steelBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/B0C4DE
  it('should properly construct the light steel blue color', () => {
    // Arrange
    const name = 'lightsteelblue';
    const rgbaColor = new RGBAColor(176, 196, 222, 1);
    const hslaColor = new HSLAColor(214, 41, 78, 1);
    const hex = '#B0C4DE';

    // Act
    const lightSteelBlue = Color.LIGHTSTEELBLUE;

    // Assert
    expect(lightSteelBlue.name).toBe(name);
    expect(lightSteelBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lightSteelBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lightSteelBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/B0E0E6
  it('should properly construct the powder blue color', () => {
    // Arrange
    const name = 'powderblue';
    const rgbaColor = new RGBAColor(176, 224, 230, 1);
    const hslaColor = new HSLAColor(187, 52, 80, 1);
    const hex = '#B0E0E6';

    // Act
    const powderBlue = Color.POWDERBLUE;

    // Assert
    expect(powderBlue.name).toBe(name);
    expect(powderBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(powderBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(powderBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/ADD8E6
  it('should properly construct the light blue color', () => {
    // Arrange
    const name = 'lightblue';
    const rgbaColor = new RGBAColor(173, 216, 230, 1);
    const hslaColor = new HSLAColor(195, 53, 79, 1);
    const hex = '#ADD8E6';

    // Act
    const lightBlue = Color.LIGHTBLUE;

    // Assert
    expect(lightBlue.name).toBe(name);
    expect(lightBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lightBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lightBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/87CEEB
  it('should properly construct the sky blue color', () => {
    // Arrange
    const name = 'skyblue';
    const rgbaColor = new RGBAColor(135, 206, 235, 1);
    const hslaColor = new HSLAColor(197, 71, 73, 1);
    const hex = '#87CEEB';

    // Act
    const skyBlue = Color.SKYBLUE;

    // Assert
    expect(skyBlue.name).toBe(name);
    expect(skyBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(skyBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(skyBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/87CEFA
  it('should properly construct the light sky blue color', () => {
    // Arrange
    const name = 'lightskyblue';
    const rgbaColor = new RGBAColor(135, 206, 250, 1);
    const hslaColor = new HSLAColor(203, 92, 75, 1);
    const hex = '#87CEFA';

    // Act
    const lightSkyBlue = Color.LIGHTSKYBLUE;

    // Assert
    expect(lightSkyBlue.name).toBe(name);
    expect(lightSkyBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lightSkyBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lightSkyBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/00BFFF
  it('should properly construct the deep sky blue color', () => {
    // Arrange
    const name = 'deepskyblue';
    const rgbaColor = new RGBAColor(0, 191, 255, 1);
    const hslaColor = new HSLAColor(195, 100, 50, 1);
    const hex = '#00BFFF';

    // Act
    const deepSkyBlue = Color.DEEPSKYBLUE;

    // Assert
    expect(deepSkyBlue.name).toBe(name);
    expect(deepSkyBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(deepSkyBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(deepSkyBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/1E90FF
  it('should properly construct the dodger blue color', () => {
    // Arrange
    const name = 'dodgerblue';
    const rgbaColor = new RGBAColor(30, 144, 255, 1);
    const hslaColor = new HSLAColor(210, 100, 56, 1);
    const hex = '#1E90FF';

    // Act
    const dodgerBlue = Color.DODGERBLUE;

    // Assert
    expect(dodgerBlue.name).toBe(name);
    expect(dodgerBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(dodgerBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(dodgerBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/6495ED
  it('should properly construct the cornflower blue color', () => {
    // Arrange
    const name = 'cornflowerblue';
    const rgbaColor = new RGBAColor(100, 149, 237, 1);
    const hslaColor = new HSLAColor(219, 79, 66, 1);
    const hex = '#6495ED';

    // Act
    const cornflowerBlue = Color.CORNFLOWERBLUE;

    // Assert
    expect(cornflowerBlue.name).toBe(name);
    expect(cornflowerBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(cornflowerBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(cornflowerBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/4169E1
  it('should properly construct the royal blue color', () => {
    // Arrange
    const name = 'royalblue';
    const rgbaColor = new RGBAColor(65, 105, 225, 1);
    const hslaColor = new HSLAColor(225, 73, 57, 1);
    const hex = '#4169E1';

    // Act
    const royalBlue = Color.ROYALBLUE;

    // Assert
    expect(royalBlue.name).toBe(name);
    expect(royalBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(royalBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(royalBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/0000FF
  it('should properly construct the blue color', () => {
    // Arrange
    const name = 'blue';
    const rgbaColor = new RGBAColor(0, 0, 255, 1);
    const hslaColor = new HSLAColor(240, 100, 50, 1);
    const hex = '#0000FF';

    // Act
    const blue = Color.BLUE;

    // Assert
    expect(blue.name).toBe(name);
    expect(blue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(blue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(blue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/0000CD
  it('should properly construct the medium blue color', () => {
    // Arrange
    const name = 'mediumblue';
    const rgbaColor = new RGBAColor(0, 0, 205, 1);
    const hslaColor = new HSLAColor(240, 100, 40, 1);
    const hex = '#0000CD';

    // Act
    const mediumBlue = Color.MEDIUMBLUE;

    // Assert
    expect(mediumBlue.name).toBe(name);
    expect(mediumBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(mediumBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(mediumBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/00008B
  it('should properly construct the dark blue color', () => {
    // Arrange
    const name = 'darkblue';
    const rgbaColor = new RGBAColor(0, 0, 139, 1);
    const hslaColor = new HSLAColor(240, 100, 27, 1);
    const hex = '#00008B';

    // Act
    const darkBlue = Color.DARKBLUE;

    // Assert
    expect(darkBlue.name).toBe(name);
    expect(darkBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/000080
  it('should properly construct the navy color', () => {
    // Arrange
    const name = 'navy';
    const rgbaColor = new RGBAColor(0, 0, 128, 1);
    const hslaColor = new HSLAColor(240, 100, 25, 1);
    const hex = '#000080';

    // Act
    const navy = Color.NAVY;

    // Assert
    expect(navy.name).toBe(name);
    expect(navy.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(navy.hslaColor.toString()).toBe(hslaColor.toString());
    expect(navy.hex).toBe(hex);
  });
  // https://html-color.codes/hex/191970
  it('should properly construct the midnight blue color', () => {
    // Arrange
    const name = 'midnightblue';
    const rgbaColor = new RGBAColor(25, 25, 112, 1);
    const hslaColor = new HSLAColor(240, 64, 27, 1);
    const hex = '#191970';

    // Act
    const midnightBlue = Color.MIDNIGHTBLUE;

    // Assert
    expect(midnightBlue.name).toBe(name);
    expect(midnightBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(midnightBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(midnightBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FFF8DC
  it('should properly construct the cornsilk color', () => {
    // Arrange
    const name = 'cornsilk';
    const rgbaColor = new RGBAColor(255, 248, 220, 1);
    const hslaColor = new HSLAColor(48, 100, 93, 1);
    const hex = '#FFF8DC';

    // Act
    const cornsilk = Color.CORNSILK;

    // Assert
    expect(cornsilk.name).toBe(name);
    expect(cornsilk.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(cornsilk.hslaColor.toString()).toBe(hslaColor.toString());
    expect(cornsilk.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FFEBCD
  it('should properly construct the blanched almond color', () => {
    // Arrange
    const name = 'blanchedalmond';
    const rgbaColor = new RGBAColor(255, 235, 205, 1);
    const hslaColor = new HSLAColor(36, 100, 90, 1);
    const hex = '#FFEBCD';

    // Act
    const blanchedAlmond = Color.BLANCHEDALMOND;

    // Assert
    expect(blanchedAlmond.name).toBe(name);
    expect(blanchedAlmond.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(blanchedAlmond.hslaColor.toString()).toBe(hslaColor.toString());
    expect(blanchedAlmond.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FFE4C4
  it('should properly construct the bisque color', () => {
    // Arrange
    const name = 'bisque';
    const rgbaColor = new RGBAColor(255, 228, 196, 1);
    const hslaColor = new HSLAColor(33, 100, 88, 1);
    const hex = '#FFE4C4';

    // Act
    const bisque = Color.BISQUE;

    // Assert
    expect(bisque.name).toBe(name);
    expect(bisque.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(bisque.hslaColor.toString()).toBe(hslaColor.toString());
    expect(bisque.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FFDEAD
  it('should properly construct the navajo white color', () => {
    // Arrange
    const name = 'navajowhite';
    const rgbaColor = new RGBAColor(255, 222, 173, 1);
    const hslaColor = new HSLAColor(36, 100, 84, 1);
    const hex = '#FFDEAD';

    // Act
    const navajoWhite = Color.NAVAJOWHITE;

    // Assert
    expect(navajoWhite.name).toBe(name);
    expect(navajoWhite.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(navajoWhite.hslaColor.toString()).toBe(hslaColor.toString());
    expect(navajoWhite.hex).toBe(hex);
  });
  // https://html-color.codes/hex/F5DEB3
  it('should properly construct the wheat color', () => {
    // Arrange
    const name = 'wheat';
    const rgbaColor = new RGBAColor(245, 222, 179, 1);
    const hslaColor = new HSLAColor(39, 77, 83, 1);
    const hex = '#F5DEB3';

    // Act
    const wheat = Color.WHEAT;

    // Assert
    expect(wheat.name).toBe(name);
    expect(wheat.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(wheat.hslaColor.toString()).toBe(hslaColor.toString());
    expect(wheat.hex).toBe(hex);
  });
  // https://html-color.codes/hex/DEB887
  it('should properly construct the burlywood color', () => {
    // Arrange
    const name = 'burlywood';
    const rgbaColor = new RGBAColor(222, 184, 135, 1);
    const hslaColor = new HSLAColor(34, 57, 70, 1);
    const hex = '#DEB887';

    // Act
    const burlywood = Color.BURLYWOOD;

    // Assert
    expect(burlywood.name).toBe(name);
    expect(burlywood.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(burlywood.hslaColor.toString()).toBe(hslaColor.toString());
    expect(burlywood.hex).toBe(hex);
  });
  // https://html-color.codes/hex/D2B48C
  it('should properly construct the tan color', () => {
    // Arrange
    const name = 'tan';
    const rgbaColor = new RGBAColor(210, 180, 140, 1);
    const hslaColor = new HSLAColor(34, 44, 69, 1);
    const hex = '#D2B48C';

    // Act
    const tan = Color.TAN;

    // Assert
    expect(tan.name).toBe(name);
    expect(tan.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(tan.hslaColor.toString()).toBe(hslaColor.toString());
    expect(tan.hex).toBe(hex);
  });
  // https://html-color.codes/hex/BC8F8F
  it('should properly construct the rosy brown color', () => {
    // Arrange
    const name = 'rosybrown';
    const rgbaColor = new RGBAColor(188, 143, 143, 1);
    const hslaColor = new HSLAColor(0, 25, 65, 1);
    const hex = '#BC8F8F';

    // Act
    const rosyBrown = Color.ROSYBROWN;

    // Assert
    expect(rosyBrown.name).toBe(name);
    expect(rosyBrown.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(rosyBrown.hslaColor.toString()).toBe(hslaColor.toString());
    expect(rosyBrown.hex).toBe(hex);
  });
  // https://html-color.codes/hex/F4A460
  it('should properly construct the sandy brown color', () => {
    // Arrange
    const name = 'sandybrown';
    const rgbaColor = new RGBAColor(244, 164, 96, 1);
    const hslaColor = new HSLAColor(28, 87, 67, 1);
    const hex = '#F4A460';

    // Act
    const sandyBrown = Color.SANDYBROWN;

    // Assert
    expect(sandyBrown.name).toBe(name);
    expect(sandyBrown.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(sandyBrown.hslaColor.toString()).toBe(hslaColor.toString());
    expect(sandyBrown.hex).toBe(hex);
  });
  // https://html-color.codes/hex/DAA520
  it('should properly construct the goldenrod color', () => {
    // Arrange
    const name = 'goldenrod';
    const rgbaColor = new RGBAColor(218, 165, 32, 1);
    const hslaColor = new HSLAColor(43, 74, 49, 1);
    const hex = '#DAA520';

    // Act
    const goldenrod = Color.GOLDENROD;

    // Assert
    expect(goldenrod.name).toBe(name);
    expect(goldenrod.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(goldenrod.hslaColor.toString()).toBe(hslaColor.toString());
    expect(goldenrod.hex).toBe(hex);
  });
  // https://html-color.codes/hex/B8860B
  it('should properly construct the dark goldenrod color', () => {
    // Arrange
    const name = 'darkgoldenrod';
    const rgbaColor = new RGBAColor(184, 134, 11, 1);
    const hslaColor = new HSLAColor(43, 89, 38, 1);
    const hex = '#B8860B';

    // Act
    const darkGoldenrod = Color.DARKGOLDENROD;

    // Assert
    expect(darkGoldenrod.name).toBe(name);
    expect(darkGoldenrod.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkGoldenrod.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkGoldenrod.hex).toBe(hex);
  });
  // https://html-color.codes/hex/CD853F
  it('should properly construct the peru color', () => {
    // Arrange
    const name = 'peru';
    const rgbaColor = new RGBAColor(205, 133, 63, 1);
    const hslaColor = new HSLAColor(30, 59, 53, 1);
    const hex = '#CD853F';

    // Act
    const peru = Color.PERU;

    // Assert
    expect(peru.name).toBe(name);
    expect(peru.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(peru.hslaColor.toString()).toBe(hslaColor.toString());
    expect(peru.hex).toBe(hex);
  });
  // https://html-color.codes/hex/D2691E
  it('should properly construct the chocolate color', () => {
    // Arrange
    const name = 'chocolate';
    const rgbaColor = new RGBAColor(210, 105, 30, 1);
    const hslaColor = new HSLAColor(25, 75, 47, 1);
    const hex = '#D2691E';

    // Act
    const chocolate = Color.CHOCOLATE;

    // Assert
    expect(chocolate.name).toBe(name);
    expect(chocolate.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(chocolate.hslaColor.toString()).toBe(hslaColor.toString());
    expect(chocolate.hex).toBe(hex);
  });
  // https://html-color.codes/hex/8B4513
  it('should properly construct the saddlebrown color', () => {
    // Arrange
    const name = 'saddlebrown';
    const rgbaColor = new RGBAColor(139, 69, 19, 1);
    const hslaColor = new HSLAColor(25, 76, 31, 1);
    const hex = '#8B4513';

    // Act
    const saddleBrown = Color.SADDLEBROWN;

    // Assert
    expect(saddleBrown.name).toBe(name);
    expect(saddleBrown.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(saddleBrown.hslaColor.toString()).toBe(hslaColor.toString());
    expect(saddleBrown.hex).toBe(hex);
  });
  // https://html-color.codes/hex/A0522D
  it('should properly construct the sienna color', () => {
    // Arrange
    const name = 'sienna';
    const rgbaColor = new RGBAColor(160, 82, 45, 1);
    const hslaColor = new HSLAColor(19, 56, 40, 1);
    const hex = '#A0522D';

    // Act
    const sienna = Color.SIENNA;

    // Assert
    expect(sienna.name).toBe(name);
    expect(sienna.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(sienna.hslaColor.toString()).toBe(hslaColor.toString());
    expect(sienna.hex).toBe(hex);
  });
  // https://html-color.codes/hex/A52A2A
  it('should properly construct the brown color', () => {
    // Arrange
    const name = 'brown';
    const rgbaColor = new RGBAColor(165, 42, 42, 1);
    const hslaColor = new HSLAColor(0, 59, 41, 1);
    const hex = '#A52A2A';

    // Act
    const brown = Color.BROWN;

    // Assert
    expect(brown.name).toBe(name);
    expect(brown.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(brown.hslaColor.toString()).toBe(hslaColor.toString());
    expect(brown.hex).toBe(hex);
  });
  // https://html-color.codes/hex/800000
  it('should properly construct the maroon color', () => {
    // Arrange
    const name = 'maroon';
    const rgbaColor = new RGBAColor(128, 0, 0, 1);
    const hslaColor = new HSLAColor(0, 100, 25, 1);
    const hex = '#800000';

    // Act
    const maroon = Color.MAROON;

    // Assert
    expect(maroon.name).toBe(name);
    expect(maroon.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(maroon.hslaColor.toString()).toBe(hslaColor.toString());
    expect(maroon.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FFFFFF
  it('should properly construct the white color', () => {
    // Arrange
    const name = 'white';
    const rgbaColor = new RGBAColor(255, 255, 255, 1);
    const hslaColor = new HSLAColor(0, 0, 100, 1);
    const hex = '#FFFFFF';

    // Act
    const white = Color.WHITE;

    // Assert
    expect(white.name).toBe(name);
    expect(white.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(white.hslaColor.toString()).toBe(hslaColor.toString());
    expect(white.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FFFAFA
  it('should properly construct the snow color', () => {
    // Arrange
    const name = 'snow';
    const rgbaColor = new RGBAColor(255, 250, 250, 1);
    const hslaColor = new HSLAColor(0, 100, 99, 1);
    const hex = '#FFFAFA';

    // Act
    const snow = Color.SNOW;

    // Assert
    expect(snow.name).toBe(name);
    expect(snow.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(snow.hslaColor.toString()).toBe(hslaColor.toString());
    expect(snow.hex).toBe(hex);
  });
  // https://html-color.codes/hex/F0FFF0
  it('should properly construct the honeydew color', () => {
    // Arrange
    const name = 'honeydew';
    const rgbaColor = new RGBAColor(240, 255, 240, 1);
    const hslaColor = new HSLAColor(120, 100, 97, 1);
    const hex = '#F0FFF0';

    // Act
    const honeydew = Color.HONEYDEW;

    // Assert
    expect(honeydew.name).toBe(name);
    expect(honeydew.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(honeydew.hslaColor.toString()).toBe(hslaColor.toString());
    expect(honeydew.hex).toBe(hex);
  });
  // https://html-color.codes/hex/F5FFFA
  it('should properly construct the mintcream color', () => {
    // Arrange
    const name = 'mintcream';
    const rgbaColor = new RGBAColor(245, 255, 250, 1);
    const hslaColor = new HSLAColor(150, 100, 98, 1);
    const hex = '#F5FFFA';

    // Act
    const mintcream = Color.MINTCREAM;

    // Assert
    expect(mintcream.name).toBe(name);
    expect(mintcream.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(mintcream.hslaColor.toString()).toBe(hslaColor.toString());
    expect(mintcream.hex).toBe(hex);
  });
  // https://html-color.codes/hex/F0FFFF
  it('should properly construct the azure color', () => {
    // Arrange
    const name = 'azure';
    const rgbaColor = new RGBAColor(240, 255, 255, 1);
    const hslaColor = new HSLAColor(180, 100, 97, 1);
    const hex = '#F0FFFF';

    // Act
    const azure = Color.AZURE;

    // Assert
    expect(azure.name).toBe(name);
    expect(azure.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(azure.hslaColor.toString()).toBe(hslaColor.toString());
    expect(azure.hex).toBe(hex);
  });
  // https://html-color.codes/hex/F0F8FF
  it('should properly construct the alice blue color', () => {
    // Arrange
    const name = 'aliceblue';
    const rgbaColor = new RGBAColor(240, 248, 255, 1);
    const hslaColor = new HSLAColor(208, 100, 97, 1);
    const hex = '#F0F8FF';

    // Act
    const aliceBlue = Color.ALICEBLUE;

    // Assert
    expect(aliceBlue.name).toBe(name);
    expect(aliceBlue.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(aliceBlue.hslaColor.toString()).toBe(hslaColor.toString());
    expect(aliceBlue.hex).toBe(hex);
  });
  // https://html-color.codes/hex/F8F8FF
  it('should properly construct the ghost white color', () => {
    // Arrange
    const name = 'ghostwhite';
    const rgbaColor = new RGBAColor(248, 248, 255, 1);
    const hslaColor = new HSLAColor(240, 100, 99, 1);
    const hex = '#F8F8FF';

    // Act
    const ghostWhite = Color.GHOSTWHITE;

    // Assert
    expect(ghostWhite.name).toBe(name);
    expect(ghostWhite.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(ghostWhite.hslaColor.toString()).toBe(hslaColor.toString());
    expect(ghostWhite.hex).toBe(hex);
  });
  // https://html-color.codes/hex/F5F5F5
  it('should properly construct the white smoke color', () => {
    // Arrange
    const name = 'whitesmoke';
    const rgbaColor = new RGBAColor(245, 245, 245, 1);
    const hslaColor = new HSLAColor(0, 0, 96, 1);
    const hex = '#F5F5F5';

    // Act
    const whiteSmoke = Color.WHITESMOKE;

    // Assert
    expect(whiteSmoke.name).toBe(name);
    expect(whiteSmoke.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(whiteSmoke.hslaColor.toString()).toBe(hslaColor.toString());
    expect(whiteSmoke.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FFF5EE
  it('should properly construct the seashell color', () => {
    // Arrange
    const name = 'seashell';
    const rgbaColor = new RGBAColor(255, 245, 238, 1);
    const hslaColor = new HSLAColor(25, 100, 97, 1);
    const hex = '#FFF5EE';

    // Act
    const seaShell = Color.SEASHELL;

    // Assert
    expect(seaShell.name).toBe(name);
    expect(seaShell.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(seaShell.hslaColor.toString()).toBe(hslaColor.toString());
    expect(seaShell.hex).toBe(hex);
  });
  // https://html-color.codes/hex/F5F5DC
  it('should properly construct the beige color', () => {
    // Arrange
    const name = 'beige';
    const rgbaColor = new RGBAColor(245, 245, 220, 1);
    const hslaColor = new HSLAColor(60, 56, 91, 1);
    const hex = '#F5F5DC';

    // Act
    const beige = Color.BEIGE;

    // Assert
    expect(beige.name).toBe(name);
    expect(beige.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(beige.hslaColor.toString()).toBe(hslaColor.toString());
    expect(beige.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FDF5E6
  it('should properly construct the oldlace color', () => {
    // Arrange
    const name = 'oldlace';
    const rgbaColor = new RGBAColor(253, 245, 230, 1);
    const hslaColor = new HSLAColor(39, 85, 95, 1);
    const hex = '#FDF5E6';

    // Act
    const oldlace = Color.OLDLACE;

    // Assert
    expect(oldlace.name).toBe(name);
    expect(oldlace.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(oldlace.hslaColor.toString()).toBe(hslaColor.toString());
    expect(oldlace.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FFFAF0
  it('should properly construct the floral white color', () => {
    // Arrange
    const name = 'floralwhite';
    const rgbaColor = new RGBAColor(255, 250, 240, 1);
    const hslaColor = new HSLAColor(40, 100, 97, 1);
    const hex = '#FFFAF0';

    // Act
    const floralWhite = Color.FLORALWHITE;

    // Assert
    expect(floralWhite.name).toBe(name);
    expect(floralWhite.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(floralWhite.hslaColor.toString()).toBe(hslaColor.toString());
    expect(floralWhite.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FFFFF0
  it('should properly construct the ivory color', () => {
    // Arrange
    const name = 'ivory';
    const rgbaColor = new RGBAColor(255, 255, 240, 1);
    const hslaColor = new HSLAColor(60, 100, 97, 1);
    const hex = '#FFFFF0';

    // Act
    const ivory = Color.IVORY;

    // Assert
    expect(ivory.name).toBe(name);
    expect(ivory.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(ivory.hslaColor.toString()).toBe(hslaColor.toString());
    expect(ivory.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FAEBD7
  it('should properly construct the antique white color', () => {
    // Arrange
    const name = 'antiquewhite';
    const rgbaColor = new RGBAColor(250, 235, 215, 1);
    const hslaColor = new HSLAColor(34, 78, 91, 1);
    const hex = '#FAEBD7';

    // Act
    const antiqueWhite = Color.ANTIQUEWHITE;

    // Assert
    expect(antiqueWhite.name).toBe(name);
    expect(antiqueWhite.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(antiqueWhite.hslaColor.toString()).toBe(hslaColor.toString());
    expect(antiqueWhite.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FAF0E6
  it('should properly construct the linen color', () => {
    // Arrange
    const name = 'linen';
    const rgbaColor = new RGBAColor(250, 240, 230, 1);
    const hslaColor = new HSLAColor(30, 67, 94, 1);
    const hex = '#FAF0E6';

    // Act
    const linen = Color.LINEN;

    // Assert
    expect(linen.name).toBe(name);
    expect(linen.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(linen.hslaColor.toString()).toBe(hslaColor.toString());
    expect(linen.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FFF0F5
  it('should properly construct the lavender blush color', () => {
    // Arrange
    const name = 'lavenderblush';
    const rgbaColor = new RGBAColor(255, 240, 245, 1);
    const hslaColor = new HSLAColor(340, 100, 97, 1);
    const hex = '#FFF0F5';

    // Act
    const lavenderBlush = Color.LAVENDERBLUSH;

    // Assert
    expect(lavenderBlush.name).toBe(name);
    expect(lavenderBlush.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lavenderBlush.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lavenderBlush.hex).toBe(hex);
  });
  // https://html-color.codes/hex/FFE4E1
  it('should properly construct the mistyrose color', () => {
    // Arrange
    const name = 'mistyrose';
    const rgbaColor = new RGBAColor(255, 228, 225, 1);
    const hslaColor = new HSLAColor(6, 100, 94, 1);
    const hex = '#FFE4E1';

    // Act
    const mistyRose = Color.MISTYROSE;

    // Assert
    expect(mistyRose.name).toBe(name);
    expect(mistyRose.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(mistyRose.hslaColor.toString()).toBe(hslaColor.toString());
    expect(mistyRose.hex).toBe(hex);
  });
  // https://html-color.codes/hex/DCDCDC
  it('should properly construct the gainsboro color', () => {
    // Arrange
    const name = 'gainsboro';
    const rgbaColor = new RGBAColor(220, 220, 220, 1);
    const hslaColor = new HSLAColor(0, 0, 86, 1);
    const hex = '#DCDCDC';

    // Act
    const gainsboro = Color.GAINSBORO;

    // Assert
    expect(gainsboro.name).toBe(name);
    expect(gainsboro.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(gainsboro.hslaColor.toString()).toBe(hslaColor.toString());
    expect(gainsboro.hex).toBe(hex);
  });
  // https://html-color.codes/hex/D3D3D3
  it('should properly construct the light gray color', () => {
    // Arrange
    const name = 'lightgray';
    const rgbaColor = new RGBAColor(211, 211, 211, 1);
    const hslaColor = new HSLAColor(0, 0, 83, 1);
    const hex = '#D3D3D3';

    // Act
    const lightGray = Color.LIGHTGRAY;

    // Assert
    expect(lightGray.name).toBe(name);
    expect(lightGray.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lightGray.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lightGray.hex).toBe(hex);
  });
  // https://html-color.codes/hex/C0C0C0
  it('should properly construct the silver color', () => {
    // Arrange
    const name = 'silver';
    const rgbaColor = new RGBAColor(192, 192, 192, 1);
    const hslaColor = new HSLAColor(0, 0, 75, 1);
    const hex = '#C0C0C0';

    // Act
    const silver = Color.SILVER;

    // Assert
    expect(silver.name).toBe(name);
    expect(silver.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(silver.hslaColor.toString()).toBe(hslaColor.toString());
    expect(silver.hex).toBe(hex);
  });
  // https://html-color.codes/hex/A9A9A9
  it('should properly construct the dark gray color', () => {
    // Arrange
    const name = 'darkgray';
    const rgbaColor = new RGBAColor(169, 169, 169, 1);
    const hslaColor = new HSLAColor(0, 0, 66, 1);
    const hex = '#A9A9A9';

    // Act
    const darkGray = Color.DARKGRAY;

    // Assert
    expect(darkGray.name).toBe(name);
    expect(darkGray.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkGray.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkGray.hex).toBe(hex);
  });
  // https://html-color.codes/hex/808080
  it('should properly construct the gray color', () => {
    // Arrange
    const name = 'gray';
    const rgbaColor = new RGBAColor(128, 128, 128, 1);
    const hslaColor = new HSLAColor(0, 0, 50, 1);
    const hex = '#808080';

    // Act
    const gray = Color.GRAY;

    // Assert
    expect(gray.name).toBe(name);
    expect(gray.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(gray.hslaColor.toString()).toBe(hslaColor.toString());
    expect(gray.hex).toBe(hex);
  });
  // https://html-color.codes/hex/696969
  it('should properly construct the dim gray color', () => {
    // Arrange
    const name = 'dimgray';
    const rgbaColor = new RGBAColor(105, 105, 105, 1);
    const hslaColor = new HSLAColor(0, 0, 41, 1);
    const hex = '#696969';

    // Act
    const dimGray = Color.DIMGRAY;

    // Assert
    expect(dimGray.name).toBe(name);
    expect(dimGray.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(dimGray.hslaColor.toString()).toBe(hslaColor.toString());
    expect(dimGray.hex).toBe(hex);
  });
  // https://html-color.codes/hex/778899
  it('should properly construct the light slate gray color', () => {
    // Arrange
    const name = 'lightslategray';
    const rgbaColor = new RGBAColor(119, 136, 153, 1);
    const hslaColor = new HSLAColor(210, 14, 53, 1);
    const hex = '#778899';

    // Act
    const lightSlateGray = Color.LIGHTSLATEGRAY;

    // Assert
    expect(lightSlateGray.name).toBe(name);
    expect(lightSlateGray.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(lightSlateGray.hslaColor.toString()).toBe(hslaColor.toString());
    expect(lightSlateGray.hex).toBe(hex);
  });
  // https://html-color.codes/hex/708090
  it('should properly construct the slate gray color', () => {
    // Arrange
    const name = 'slategray';
    const rgbaColor = new RGBAColor(112, 128, 144, 1);
    const hslaColor = new HSLAColor(210, 13, 50, 1);
    const hex = '#708090';

    // Act
    const slateGray = Color.SLATEGRAY;

    // Assert
    expect(slateGray.name).toBe(name);
    expect(slateGray.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(slateGray.hslaColor.toString()).toBe(hslaColor.toString());
    expect(slateGray.hex).toBe(hex);
  });
  // https://html-color.codes/hex/2F4F4F
  it('should properly construct the dark slate gray color', () => {
    // Arrange
    const name = 'darkslategray';
    const rgbaColor = new RGBAColor(47, 79, 79, 1);
    const hslaColor = new HSLAColor(180, 25, 25, 1);
    const hex = '#2F4F4F';

    // Act
    const darkSlateGray = Color.DARKSLATEGRAY;

    // Assert
    expect(darkSlateGray.name).toBe(name);
    expect(darkSlateGray.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(darkSlateGray.hslaColor.toString()).toBe(hslaColor.toString());
    expect(darkSlateGray.hex).toBe(hex);
  });
  // https://html-color.codes/hex/000000
  it('should properly construct the black color', () => {
    // Arrange
    const name = 'black';
    const rgbaColor = new RGBAColor(0, 0, 0, 1);
    const hslaColor = new HSLAColor(0, 0, 0, 1);
    const hex = '#000000';

    // Act
    const black = Color.BLACK;

    // Assert
    expect(black.name).toBe(name);
    expect(black.rgbaColor.toString()).toBe(rgbaColor.toString());
    expect(black.hslaColor.toString()).toBe(hslaColor.toString());
    expect(black.hex).toBe(hex);
  });
});
