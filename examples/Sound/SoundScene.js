import Scene from 'gameEngine/scene/Scene';
import AssetCache from 'core/managers/AssetCache';
import SoundObject from 'soundEngine/SoundObject';
import Point from 'core/Point';
import Button from 'HUDEngine/components/Button';
import MouseButton from 'inputEngine/MouseButton';
import ServiceLocator from 'core/ServiceLocator';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import TextStyle from 'renderingEngine/text/TextStyle';
import Color from 'renderingEngine/colors/Color';

export default class SoundScene extends Scene {
  create() {
    this.cache = new AssetCache();
    this.cache.registerAsset('audio', './assets/sound/gametheme.mp3');
    this.cache.loadAsset('audio').then(() => {
      this.sound = new SoundObject(this.cache.getAsset('audio'));
      /*
      var t0 = performance.now()
      this.sound = new SoundObject(this.cache.getAsset('audio'));
      var t1 = performance.now()
      this.sound.play(1000);
      var t2 = performance.now()

      console.log("Call to New Sound Object took " + (t1 - t0) + " milliseconds.")
      console.log("Call to play sound took " + (t2 - t1) + " milliseconds.")
      */
     console.log("loaded asset #1");
    });

    this.cache.registerAsset('audio-2', './assets/sound/music_zapsplat_game_music_action_uplifting_electro_house_anthem_retro_melody_026.mp3');
    this.cache.loadAsset('audio-2').then(() => {
      this.sound2 = new SoundObject(this.cache.getAsset('audio-2'));
      console.log("loaded asset #2");
      this.playPauseButton.disabled = false;
      this.stopButton.disabled = false;
      for(let i = 0; i < 10; i++) {
        this.volumeButtons.disabled = false;
      }
    });

    this.cache.registerAsset('audio-3', './assets/sound/Retro - Chip Power.wav');
    this.cache.loadAsset('audio-3').then(() => {
      this.sound3 = new SoundObject(this.cache.getAsset('audio-3'));
      console.log("loaded asset #3");
    });

    this.cache.registerAsset('audio-4', './assets/sound/Short - Digital Crystal.wav');
    this.cache.loadAsset('audio-4').then(() => {
      this.sound4 = new SoundObject(this.cache.getAsset('audio-4'));
      console.log("loaded asset #4");
    });

    this.cache.registerAsset('audio-5', './assets/sound/Short - Sad Little Sonar.wav');
    this.cache.loadAsset('audio-5').then(() => {
      this.sound5 = new SoundObject(this.cache.getAsset('audio-5'));
      console.log("loaded asset #5");
    });

    this.mouse = ServiceLocator.instance.locate('mouse');

    this.currentAudioTimeText = new TextGraphic(new Point(20,20), "");
    this.currentAudioTimeText.textStyle = new TextStyle({
      strokeStyle: Color.WHITE,
    });
    this.durationTimeText = new TextGraphic(new Point(20,30), "");
    this.durationTimeText.textStyle = new TextStyle({
      strokeStyle: Color.WHITE,
    });
    this.currentStateText = new TextGraphic(new Point(20,40), "");
    this.currentStateText.textStyle = new TextStyle({
      strokeStyle: Color.WHITE,
    });

    this.soundBoardText = new TextGraphic(new Point(20,140), "Sound Board");
    this.soundBoardText.textStyle = new TextStyle({
      fillStyle: Color.WHITE,
      font: "36px Rockwell",
    });

    // point, text, clickCallback
    this.playPauseButton = new Button(new Point(20,60), "Play", (event) => this.playOrResumeSound(event));
    this.stopButton = new Button(new Point(80,60), "Stop", (event) => this.stopSound(event));

    this.playPauseButton.disabled = true;
    this.stopButton.disabled = true;

    this.soundBoardChipPowerButton = new Button(new Point(20,160), "CP", (event) => this.playChipPower(event));
    this.soundBoardSonarButton = new Button(new Point(60,160), "Sonar", (event) => this.PlaySonar(event));
    this.soundBoardCrystalButton = new Button(new Point(120,160), "Crystal", (event) => this.PlayCrystal(event));

    this.volumeButtons = [];
    for(let i = 0; i < 10; i++) {
      this.volumeButtons.push(new Button(new Point(130 + i * 25, 60), `${i+1}`, (event) => this.setVolume((((i + 1) * 10) / 100) )));
      this.volumeButtons.disabled = true;
    }
 }

  update() {
    if (this.mouse.buttonDownOnce(MouseButton.LEFT_BUTTON)) {
      const { x, y } = this.mouse;
      this.playPauseButton.update({x,y});
      this.stopButton.update({x,y});
      this.soundBoardChipPowerButton.update({x,y});
      this.soundBoardSonarButton.update({x,y});
      this.soundBoardCrystalButton.update({x,y});
      for(let i = 0; i < 10; i++) {
        let volumeButton = this.volumeButtons[i];
        volumeButton.update({x,y});
      }
    }
    if(this.sound2 != undefined) {
      this.currentStateText.text = `CurrentState: ${this.sound2._state.value}`;
      this.currentAudioTimeText.text = `CurrentTime: ${this.sound2.currentTime}`;
      this.durationTimeText.text = `Max: ${this.sound2.duration}`;
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
    for(let i = 0; i < 10; i++) {
      let volumeButton = this.volumeButtons[i];
      volumeButton.draw();
    }
  }

  playChipPower() {
    this.sound3.play2();
  }

  PlayCrystal() {
    this.sound4.play2();
  }

  PlaySonar() {
    this.sound5.play2();
  }

  playOrResumeSound() {
    if(this.sound2.isPlaying) {
      this.sound2.pause();
      this.playPauseButton.text = "Play";
    } else {
      this.sound2.play();
      this.playPauseButton.text = "Pause";
    }
  }

  stopSound() {
    this.sound2.stop();
    this.playPauseButton.text = "Play";
  }

  setVolume(volume) {
    console.log(volume);
    this.sound2.setVolume(volume);
  }
}
