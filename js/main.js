(function() {

  requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime()
  });

  var dependencies = ['../lib/gameEngine/game', 'constants','Scenes/menuScene',
    'Scenes/gameScene'];

  require(dependencies, function(Game, Constants, menuScene, gameScene) {

    var game = new Game('game', 640, 480, 30);

    game.addScene('menu', menuScene);
    game.addScene('game', gameScene);

    game.soundManager.preLoad(Constants.ALL_SOUNDS).execute(
      function() {
        game.startScene('menu');
      }
    );
  });

})();
