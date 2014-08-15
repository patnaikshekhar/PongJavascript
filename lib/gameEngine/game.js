define(['./soundManager'], function(SoundManager) {

  function Game(gameElementId, width, height, fps) {
    // Create the Canvas
    this.createCanvas(gameElementId, width, height);
    this.scenes = {};
    this.fps = fps;
    this.width = width;
    this.height = height;

    this.setupInput();
    this.setupAudio();
    this.loop();
  }

  Game.prototype.createCanvas = function (gameElementId, width, height) {
    var gameElement = document.getElementById(gameElementId);
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    var bufferedImage = document.createElement('canvas');
    bufferedImage.width = width;
    bufferedImage.height = height;

    gameElement.appendChild(canvas);

    // Get the context
    this.ctx = canvas.getContext && canvas.getContext('2d');
    this.bufferedCtx = bufferedImage.getContext && bufferedImage.getContext('2d');
    this.bufferedImage = bufferedImage;
  };

   Game.prototype.loop = function() {

    var obj = this;

    function mainLoop() {

      if (obj.scene !== undefined) {
        obj.scenes[obj.scene].update(1000 / obj.fps);
        obj.scenes[obj.scene].draw(obj.ctx, obj.bufferedCtx);
      }

      setTimeout(mainLoop, obj.fps / 1000);
    }

    mainLoop();
  };

  Game.prototype.setupInput = function() {

    var obj = this;

    document.addEventListener('keydown', function (e) {
      e = e || window.event;

      if (obj.scene !== undefined) {
        var activeScene = obj.scenes[obj.scene];
        for (var i = 0; i < activeScene.sceneObjects.length; i++) {
          activeScene.sceneObjects[i].keyDown(e.keyCode);
        }
      }
    });
  };

  Game.prototype.addScene = function (name, scene) {
    scene.game = this;
    this.scenes[name] = scene;
  };

  Game.prototype.startScene = function(scene) {
    this.scene = scene;
    this.scenes[scene].init();
  };

  Game.prototype.setupAudio = function() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.soundManager = new SoundManager(new AudioContext());
  };

  return Game;
});
