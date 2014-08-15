define(['./Utilities/promise'], function(Promise) {

  function SoundManager(context) {
    this.soundCache = {};
    this.context = context;
  };

  SoundManager.prototype.load = function (url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    var obj = this;

    request.onload = function() {
      obj.context.decodeAudioData(request.response, function(buffer) {
        obj.soundCache[url] = buffer;
        callback();
      });
    };

    request.send();
  };

  SoundManager.prototype.play = function(url) {

    var sm = this;

    function play() {
      var source = sm.context.createBufferSource();
      source.buffer = sm.soundCache[url];
      source.connect(sm.context.destination);
      source.start(0);
    }

    if (url in this.soundCache) {
      play();
    } else {
      console.log('Loading again');
      this.load(url, play);
    }
  };

  SoundManager.prototype.preLoad = function (urls, callback) {

    var promise = new Promise(callback);

    for (var i = 0; i < urls.length; i++) {
      var obj = this;
      var url = urls[i];
      promise.addEvent(function(done) {
        obj.load(url, done);
      });
    }

    return promise;
  };

  return SoundManager;
});
