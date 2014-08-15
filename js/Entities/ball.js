define(['../constants',
  '../../lib/gameEngine/sceneObject',
  '../../lib/gameEngine/Utilities/vector2',
  '../../lib/gameEngine/Entities/basicObject'],
  function(Constants, SceneObject, Vector2, BasicObject) {

    function Ball() {

      this.reset();

      this.width = 2 * Constants.BALL_RADIUS;
      this.height = 2 * Constants.BALL_RADIUS;
      this.color = Constants.BALL_COLOR;
      this.type = 'Ball';
    }

    Ball.prototype = new SceneObject();

    Ball.prototype.draw = function(c) {
      c.beginPath();
      c.fillStyle = this.color;
      c.arc(this.x + Constants.BALL_RADIUS, this.y + Constants.BALL_RADIUS,
        Constants.BALL_RADIUS, 0, 2 * Math.PI, false);
      c.fill();
    };

    Ball.prototype.keyDown = function(key) {};

    Ball.prototype.update = function(dt) {
      this.x += (dt * this.velocity.x);
      this.y += (dt * this.velocity.y);
    };

    Ball.prototype.reset = function() {
      this.x = Constants.BALL_START_X;
      this.y = Constants.BALL_START_Y;
      this.velocity = new Vector2(Constants.BALL_SPEED_X, Constants.BALL_SPEED_Y);
    };

    return Ball;
  }
);
