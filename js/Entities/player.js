define(['../constants',
  '../../lib/gameEngine/sceneObject',
  '../../lib/gameEngine/Entities/basicObject'],
  function(Constants, SceneObject, BasicObject) {

    function Player(x, y, width, height, color, upKey, downKey) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;

      this.type = 'Player';

      this.upKey = upKey;
      this.downKey = downKey;
    }

    Player.prototype = new SceneObject();

    Player.prototype.draw = function(c) {
      c.fillStyle = this.color;
      c.fillRect(this.x, this.y, this.width, this.height);
    };

    Player.prototype.keyDown = function(key) {
      if (key === this.upKey) {
        this.y -= Constants.PLAYER_SPEED;
      } else if (key === this.downKey) {
        this.y += Constants.PLAYER_SPEED;
      }
    };

    return Player;
  }
);
