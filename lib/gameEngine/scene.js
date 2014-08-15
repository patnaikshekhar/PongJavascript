define([], function() {

  function Scene() {
    this.sceneObjects = [];
    this.game = null;
  }

  Scene.prototype.update = function(dt) {
    for (var i = 0; i < this.sceneObjects.length; i++) {
      this.sceneObjects[i].update(dt);
    }

    this.postUpdate();
  };

  Scene.prototype.draw = function(ctx, c) {
    for (var i = 0; i < this.sceneObjects.length; i++) {
      this.sceneObjects[i].draw(c);
    }

    ctx.drawImage(this.game.bufferedImage, 0, 0,
      this.game.width, this.game.height,
      0, 0, this.game.width, this.game.height);
  };

  Scene.prototype.addObject = function(obj) {
    obj.scene = this;
    this.sceneObjects.push(obj);
  };

  return Scene;
});
