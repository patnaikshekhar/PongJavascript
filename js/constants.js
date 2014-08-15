define([], function() {

  var Constants = {};

  // Window Constants
  Constants.WINDOW_WIDTH = 640;
  Constants.WINDOW_HEIGHT = 480;

  // Background Constants
  Constants.BACKGROUND_COLOR = '#2c3e50';

  // Start Text Constants
  Constants.START_TEXT_X = 130;
  Constants.START_TEXT_Y = 220;
  Constants.START_TEXT_TEXT = 'Press Space to Start';
  Constants.START_TEXT_COLOR = '#2ecc71';
  Constants.START_TEXT_FONT = '40px Georgia';
  Constants.GAME_START_KEY = 32;

  // Controls Text
  Constants.CONTROLS_TEXT_X = 100;
  Constants.CONTROLS_TEXT_Y = 270;
  Constants.CONTROLS_TEXT_TEXT = 'Player 1 : Q (Up) A (Down), Player 2 : Arrow Up/Arrow Down';
  Constants.CONTROLS_TEXT_COLOR = '#16a085';
  Constants.CONTROLS_TEXT_FONT = '15px Georgia';

  // Paddle
  Constants.PADDLE_PADDING = 30;
  Constants.PLAYER_SPEED = 20;

  // Player 1 Paddle
  Constants.PLAYER1_PADDLE_WIDTH = 20;
  Constants.PLAYER1_PADDLE_HEIGHT = 70;
  Constants.PLAYER1_START_X = Constants.PADDLE_PADDING;
  Constants.PLAYER1_START_Y = Constants.WINDOW_HEIGHT / 2 -
    Constants.PLAYER1_PADDLE_HEIGHT / 2;
  Constants.PLAYER1_PADDLE_COLOR = '#e74c3c';
  Constants.PLAYER1_UP_KEY = 81;
  Constants.PLAYER1_DOWN_KEY = 65;

  // Player 2 Paddle
  Constants.PLAYER2_PADDLE_WIDTH = 20;
  Constants.PLAYER2_PADDLE_HEIGHT = 70;
  Constants.PLAYER2_START_X = Constants.WINDOW_WIDTH -
    Constants.PADDLE_PADDING - Constants.PLAYER2_PADDLE_WIDTH;
  Constants.PLAYER2_START_Y = Constants.WINDOW_HEIGHT / 2 -
    Constants.PLAYER2_PADDLE_HEIGHT / 2;
  Constants.PLAYER2_PADDLE_COLOR = '#2980b9';
  Constants.PLAYER2_UP_KEY = 38;
  Constants.PLAYER2_DOWN_KEY = 40;

  // Walls
  Constants.WALL_X = Constants.PADDLE_PADDING;
  Constants.TOP_WALL_Y = 0;
  Constants.WALL_WIDTH = Constants.WINDOW_WIDTH - (2 *
      Constants.PADDLE_PADDING);
  Constants.WALL_HEIGHT = 10;
  Constants.BOTTOM_WALL_Y = Constants.WINDOW_HEIGHT - Constants.WALL_HEIGHT;
  Constants.WALL_COLOR = '#2ecc71';

  // Ball
  Constants.BALL_START_X = Constants.WINDOW_WIDTH / 2;
  Constants.BALL_START_Y = Constants.WINDOW_HEIGHT / 2;
  Constants.BALL_RADIUS = 10;
  Constants.BALL_COLOR = '#7f8c8d';
  Constants.BALL_SPEED_X = 0.03;
  Constants.BALL_SPEED_Y = 0.03;
  Constants.MAGNITUDE_INCREASE_PER_BOUNCE = 1.2;

  // Score
  Constants.SCORE1_X = 70;
  Constants.SCORE1_Y = 70;
  Constants.SCORE1_COLOR = '#e74c3c';
  Constants.SCORE2_COLOR = '#2980b9';
  Constants.SCORE_FONT = '50px Georgia';
  Constants.SCORE2_X = Constants.WINDOW_WIDTH - 70;
  Constants.SCORE2_Y = 70;

  // Goals
  Constants.GOAL1_X = 0;
  Constants.GOAL_WIDTH = 5;
  Constants.GOAL2_X = Constants.WINDOW_WIDTH - Constants.GOAL_WIDTH;
  Constants.GOAL_Y = 0;
  Constants.GOAL_HEIGHT = Constants.WINDOW_HEIGHT;

  // Sounds
  Constants.BALL_HIT_SOUND = 'sounds/ball_hit.wav';
  Constants.PLAYER_SCORES_SOUND = 'sounds/player_scores.wav';
  Constants.ALL_SOUNDS = [Constants.BALL_HIT_SOUND, Constants.PLAYER_SCORES_SOUND];

  return Constants;

});
