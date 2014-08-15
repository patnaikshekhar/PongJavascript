define(['../constants', '../../lib/gameEngine/scene',
  '../../lib/gameEngine/Entities/basicObject', '../../lib/gameEngine/Entities/staticText'],
  function(Constants, Scene, BasicObject, StaticText) {

  var menuScene = new Scene();

  menuScene.init = function() {

    this.sceneObjects = [];

    var background = new BasicObject(0, 0, Constants.WINDOW_WIDTH,
      Constants.WINDOW_HEIGHT, 'Background', Constants.BACKGROUND_COLOR);

    var startText = new StaticText(Constants.START_TEXT_X, Constants.START_TEXT_Y,
      Constants.START_TEXT_TEXT, Constants.START_TEXT_COLOR,
      Constants.START_TEXT_FONT);

    startText.keyDown = function(key) {
      if (key === Constants.GAME_START_KEY) {
        this.scene.game.startScene('game');
      }
    };

    var controlsText = new StaticText(Constants.CONTROLS_TEXT_X,
      Constants.CONTROLS_TEXT_Y,
      Constants.CONTROLS_TEXT_TEXT, Constants.CONTROLS_TEXT_COLOR,
      Constants.CONTROLS_TEXT_FONT);

    this.addObject(background);
    this.addObject(startText);
    this.addObject(controlsText);
  }

  menuScene.postUpdate = function() {};

  return menuScene;
});
