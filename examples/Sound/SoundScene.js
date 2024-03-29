import Scene from 'gameEngine/scene/Scene';
import ComplexSoundObject from 'soundEngine/ComplexSoundObject';
import SimpleSoundObject from 'soundEngine/SimpleSoundObject';
import Point from 'core/Point';
import Button from 'HUDEngine/components/Button';
import MouseButton from 'inputEngine/MouseButton';
import ServiceLocator from 'core/ServiceLocator';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import TextStyle from 'renderingEngine/text/TextStyle';
import Color from 'renderingEngine/colors/Color';
import HSLColor from 'renderingEngine/colors/HSLColor';
import SoundManager from '../../src/soundEngine/managers/SoundManager';

export default class SoundScene extends Scene {
  registerAssets() {
    this.cache.registerAsset('audio', './assets/sound/gametheme.mp3');
    this.cache.registerAsset(
      'audio-2',
      './assets/sound/music_zapsplat_game_music_action_uplifting_electro_house_anthem_retro_melody_026.mp3',
    );
    this.cache.registerAsset(
      'audio-2',
      './assets/sound/music_zapsplat_game_music_action_uplifting_electro_house_anthem_retro_melody_026.mp3',
    );
    this.cache.registerAsset(
      'audio-3',
      './assets/sound/Retro - Chip Power.wav',
    );
    this.cache.registerAsset(
      'audio-4',
      './assets/sound/Short - Digital Crystal.wav',
    );
    this.cache.registerAsset(
      'audio-5',
      './assets/sound/Short - Sad Little Sonar.wav',
    );
  }

  create() {
    this.soundManager = new SoundManager();

    this.registerAssets();
    this.cache.loadAsset('audio').then(() => {
      this.sound = new ComplexSoundObject(this.cache.getAsset('audio'));
    });

    this.cache.loadAsset('audio-2').then(() => {
      this.soundManager.addSound(
        'sound-2',
        new ComplexSoundObject(this.cache.getAsset('audio-2')),
      );
      this.sound2 = this.soundManager.getSound('sound-2');
      this.playPauseButton.disabled = false;
      this.stopButton.disabled = false;
      for (let i = 0; i < 10; i++) {
        this.volumeButtonsLeft[i].disabled = false;
      }
      for (let i = 0; i < 10; i++) {
        this.volumeButtonsRight[i].disabled = false;
      }
      for (let i = 0; i < 2; i++) {
        this.nodeButtons[i].disabled = false;
      }
    });

    this.cache.loadAsset('audio-3').then(() => {
      this.sound3 = new SimpleSoundObject(this.cache.getAsset('audio-3'));
    });

    this.cache.loadAsset('audio-4').then(() => {
      this.sound4 = new SimpleSoundObject(this.cache.getAsset('audio-4'));
    });

    this.cache.loadAsset('audio-5').then(() => {
      this.sound5 = new SimpleSoundObject(this.cache.getAsset('audio-5'));
    });

    this.mouse = ServiceLocator.instance.locate('mouse');

    this.currentAudioTimeText = new TextGraphic(new Point(20, 20), '');
    this.currentAudioTimeText.textStyle = new TextStyle({
      strokeStyle: Color.WHITE,
    });
    this.durationTimeText = new TextGraphic(new Point(20, 30), '');
    this.durationTimeText.textStyle = new TextStyle({
      strokeStyle: Color.WHITE,
    });
    this.currentStateText = new TextGraphic(new Point(20, 40), '');
    this.currentStateText.textStyle = new TextStyle({
      strokeStyle: Color.WHITE,
    });

    this.soundBoardText = new TextGraphic(new Point(20, 160), 'Sound Board');
    this.soundBoardText.textStyle = new TextStyle({
      fillStyle: Color.WHITE,
      font: '36px Rockwell',
    });

    // point, text, clickCallback
    this.playPauseButton = new Button(new Point(20, 60), 'Play', (event) =>
      this.playOrResumeSound(event),
    );
    this.stopButton = new Button(new Point(80, 60), 'Stop', (event) =>
      this.stopSound(event),
    );

    this.playPauseButton.disabled = true;
    this.stopButton.disabled = true;

    this.soundBoardChipPowerButton = new Button(new Point(20, 180), 'CP', () =>
      this.playChipPower(),
    );
    this.soundBoardSonarButton = new Button(new Point(60, 180), 'Sonar', () =>
      this.PlaySonar(),
    );
    this.soundBoardCrystalButton = new Button(
      new Point(120, 180),
      'Crystal',
      () => this.PlayCrystal(),
    );

    this.nodeTypeText = new TextGraphic(new Point(200, 30), 'Node');
    this.nodeTypeText.textStyle = new TextStyle({
      fillStyle: Color.WHITE,
      font: '18px Rockwell',
    });

    this.nodeButtons = [];
    for (let i = 0; i < 2; i++) {
      this.nodeButtons.push(
        new Button(new Point(280 + i * 25, 10), `${i + 1}`, () => {
          this.setNodeType(i);
          for (let i = 0; i < 2; i++) {
            this.nodeButtons[i].setRectangleColor(new HSLColor(177, 97, 58));
            this.nodeButtons[i].setRectangleBackgroundColor(Color.WHITE);
            this.nodeButtons[i].setTextColor(Color.BLACK);
          }
          this.nodeButtons[i].setRectangleBackgroundColor(
            new HSLColor(204, 64, 23),
          );
          this.nodeButtons[i].setRectangleColor(new HSLColor(204, 70, 81));
          this.nodeButtons[i].setTextColor(Color.WHITE);
        }),
      );
      this.nodeButtons[i].disabled = true;
    }

    this.volumeLeftText = new TextGraphic(new Point(200, 70), 'Volume (L)');
    this.volumeLeftText.textStyle = new TextStyle({
      fillStyle: Color.WHITE,
      font: '18px Rockwell',
    });

    this.volumeButtonsLeft = [];
    for (let i = 0; i < 10; i++) {
      this.volumeButtonsLeft.push(
        new Button(new Point(310 + i * 25, 50), `${i + 1}`, () => {
          this.setVolumeLeft(((i + 1) * 10) / 100);
          for (let i = 0; i < 10; i++) {
            this.volumeButtonsLeft[i].setRectangleColor(
              new HSLColor(177, 97, 58),
            );
            this.volumeButtonsLeft[i].setRectangleBackgroundColor(Color.WHITE);
            this.volumeButtonsLeft[i].setTextColor(Color.BLACK);
          }
          this.volumeButtonsLeft[i].setRectangleBackgroundColor(
            new HSLColor(204, 64, 23),
          );
          this.volumeButtonsLeft[i].setRectangleColor(
            new HSLColor(204, 70, 81),
          );
          this.volumeButtonsLeft[i].setTextColor(Color.WHITE);
        }),
      );
      this.volumeButtonsLeft[i].disabled = true;
    }

    this.volumeRightText = new TextGraphic(new Point(200, 110), 'Volume (R)');
    this.volumeRightText.textStyle = new TextStyle({
      fillStyle: Color.WHITE,
      font: '18px Rockwell',
    });

    this.volumeButtonsRight = [];
    for (let i = 0; i < 10; i++) {
      this.volumeButtonsRight.push(
        new Button(new Point(310 + i * 25, 90), `${i + 1}`, () => {
          this.setVolumeRight(((i + 1) * 10) / 100);
          for (let i = 0; i < 10; i++) {
            this.volumeButtonsRight[i].setRectangleColor(
              new HSLColor(177, 97, 58),
            );
            this.volumeButtonsRight[i].setRectangleBackgroundColor(Color.WHITE);
            this.volumeButtonsRight[i].setTextColor(Color.BLACK);
          }
          this.volumeButtonsRight[i].setRectangleBackgroundColor(
            new HSLColor(204, 64, 23),
          );
          this.volumeButtonsRight[i].setRectangleColor(
            new HSLColor(204, 70, 81),
          );
          this.volumeButtonsRight[i].setTextColor(Color.WHITE);
        }),
      );
      this.volumeButtonsRight[i].disabled = true;
    }
  }

  update() {
    if (this.mouse.buttonDownOnce(MouseButton.LEFT_BUTTON)) {
      const { x, y } = this.mouse;
      this.playPauseButton.update({ x, y });
      this.stopButton.update({ x, y });
      this.soundBoardChipPowerButton.update({ x, y });
      this.soundBoardSonarButton.update({ x, y });
      this.soundBoardCrystalButton.update({ x, y });
      for (let i = 0; i < 10; i++) {
        const volumeButton = this.volumeButtonsLeft[i];
        volumeButton.update({ x, y });
      }
      for (let i = 0; i < 10; i++) {
        const volumeButton = this.volumeButtonsRight[i];
        volumeButton.update({ x, y });
      }
      for (let i = 0; i < 2; i++) {
        const nodeButton = this.nodeButtons[i];
        nodeButton.update({ x, y });
      }
    }
    if (this.sound2 != undefined) {
      this.currentStateText.text = `CurrentState: ${this.sound2._state.value}`;
      this.currentAudioTimeText.text = `CurrentTime: ${this.sound2.currentTime.toFixed(
        2,
      )}`;
      this.durationTimeText.text = `Max: ${this.sound2.duration.toFixed(2)}`;
    }
  }

  draw() {
    this.playPauseButton.draw();
    this.stopButton.draw();
    this.soundBoardChipPowerButton.draw();
    this.soundBoardSonarButton.draw();
    this.soundBoardCrystalButton.draw();
    this.currentAudioTimeText.draw();
    this.durationTimeText.draw();
    this.currentStateText.draw();
    this.soundBoardText.draw();
    this.nodeTypeText.draw();
    this.volumeLeftText.draw();
    this.volumeRightText.draw();
    for (let i = 0; i < 10; i++) {
      const volumeButton = this.volumeButtonsLeft[i];
      volumeButton.draw();
    }
    for (let i = 0; i < 10; i++) {
      const volumeButton = this.volumeButtonsRight[i];
      volumeButton.draw();
    }
    for (let i = 0; i < 2; i++) {
      const nodeButton = this.nodeButtons[i];
      nodeButton.draw();
    }
  }

  close() {
    this.soundManager.stopAllSounds();
  }

  playChipPower() {
    this.sound3.play();
  }

  PlayCrystal() {
    this.sound4.play();
  }

  PlaySonar() {
    this.sound5.play();
  }

  playOrResumeSound() {
    if (this.sound2.isPlaying) {
      this.sound2.pause();
      this.playPauseButton.text = 'Play';
    } else {
      this.sound2.play();
      this.playPauseButton.text = 'Pause';
    }
  }

  stopSound() {
    this.sound2.stop();
    this.playPauseButton.text = 'Play';
  }

  setVolumeLeft(volume) {
    this.sound3.volume = volume;
    this.sound4.volume = volume;
    this.sound5.volume = volume;

    this.sound2.setVolumeLeft(volume);
  }

  setVolumeRight(volume) {
    this.sound2.setVolumeRight(volume);
  }

  setNodeType(nodeIndex) {
    this.sound2.nodeIndex = nodeIndex;
  }
}
