define(['../constants',
  '../../lib/gameEngine/scene',
  '../../lib/gameEngine/Utilities/Vector2',
  '../../lib/gameEngine/Entities/basicObject',
  '../../lib/gameEngine/Entities/staticText',
  '../Entities/player',
  '../Entities/ball',
  '../Entities/score'],
  function(Constants, Scene, Vector2, BasicObject, StaticText, Player, Ball, Score) {

    var gameScene = new Scene();

    gameScene.init = function() {

      this.sceneObjects = [];

      var background = new BasicObject(0, 0, Constants.WINDOW_WIDTH,
        Constants.WINDOW_HEIGHT, 'Background', Constants.BACKGROUND_COLOR);

      this.player1 = new Player(
        Constants.PLAYER1_START_X, Constants.PLAYER1_START_Y,
        Constants.PLAYER1_PADDLE_WIDTH, Constants.PLAYER1_PADDLE_HEIGHT,
        Constants.PLAYER1_PADDLE_COLOR,
        Constants.PLAYER1_UP_KEY, Constants.PLAYER1_DOWN_KEY);

      this.player2 = new Player(
        Constants.PLAYER2_START_X, Constants.PLAYER2_START_Y,
        Constants.PLAYER2_PADDLE_WIDTH, Constants.PLAYER2_PADDLE_HEIGHT,
        Constants.PLAYER2_PADDLE_COLOR,
        Constants.PLAYER2_UP_KEY, Constants.PLAYER2_DOWN_KEY);

      this.topWall = new BasicObject(
        Constants.WALL_X, Constants.TOP_WALL_Y,
        Constants.WALL_WIDTH,
        Constants.WALL_HEIGHT,
        'Wall',
        Constants.WALL_COLOR);

      this.bottomWall = new BasicObject(
        Constants.WALL_X, Constants.BOTTOM_WALL_Y,
        Constants.WALL_WIDTH,
        Constants.WALL_HEIGHT,
        'Wall',
        Constants.WALL_COLOR);

      this.ball = new Ball();

      this.player1Score = new Score(Constants.SCORE1_X, Constants.SCORE1_Y,
        Constants.SCORE1_COLOR, Constants.SCORE_FONT);
      this.player2Score = new Score(Constants.SCORE2_X, Constants.SCORE2_Y,
        Constants.SCORE2_COLOR, Constants.SCORE_FONT);

      this.goal1 = new BasicObject(
        Constants.GOAL1_X, Constants.GOAL_Y,
        Constants.GOAL_WIDTH,
        Constants.GOAL_HEIGHT,
        'Goal');

      this.goal2 = new BasicObject(
        Constants.GOAL2_X, Constants.GOAL_Y,
        Constants.GOAL_WIDTH,
        Constants.GOAL_HEIGHT,
        'Goal');

      this.addObject(background);
      this.addObject(this.topWall);
      this.addObject(this.bottomWall);
      this.addObject(this.goal1);
      this.addObject(this.goal2);
      this.addObject(this.player1);
      this.addObject(this.player2);
      this.addObject(this.player1Score);
      this.addObject(this.player2Score);
      this.addObject(this.ball);
    };

    gameScene.postUpdate = function() {

      if (this.ball.rectangle().intersects(this.bottomWall.rectangle())) {
        this.game.soundManager.play(Constants.BALL_HIT_SOUND);
        this.ball.velocity.y *= -1;
      }

      if (this.ball.rectangle().intersects(this.topWall.rectangle())) {
        this.game.soundManager.play(Constants.BALL_HIT_SOUND);
        this.ball.velocity.y *= -1;
      }

      if (this.ball.rectangle().intersects(this.player1.rectangle())) {
        this.game.soundManager.play(Constants.BALL_HIT_SOUND);
        this.ball.velocity = calculateBounceVector(this.player1, this.ball);
      }

      if (this.ball.rectangle().intersects(this.player2.rectangle())) {
        this.game.soundManager.play(Constants.BALL_HIT_SOUND);
        this.ball.velocity = calculateBounceVector(this.player2, this.ball);
      }

      if (this.ball.rectangle().intersects(this.goal1.rectangle())) {
        this.game.soundManager.play(Constants.PLAYER_SCORES_SOUND);
        this.player2Score.increment();
        this.ball.reset();
      }

      if (this.ball.rectangle().intersects(this.goal2.rectangle())) {
        this.game.soundManager.play(Constants.PLAYER_SCORES_SOUND);
        this.player1Score.increment();
        this.ball.reset();
      }
    };

    function calculateBounceVector(player, ball) {
      var centerX = player.x + Constants.PLAYER2_PADDLE_WIDTH / 2;
      var centerY = player.y + Constants.PLAYER2_PADDLE_HEIGHT / 2;
      var oldMagnitude = ball.velocity.magnitude();
      var newMagnitude = ball.velocity.magnitude() * Constants.MAGNITUDE_INCREASE_PER_BOUNCE;

      var bounceVector = new Vector2(ball.x - centerX, ball.y - centerY);
      var newVector = bounceVector.unit().multiply(newMagnitude);
      return newVector;
    };

    return gameScene;
  }
);
