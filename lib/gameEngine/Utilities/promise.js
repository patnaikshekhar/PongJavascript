define([],
  function() {

    function Promise() {
      this.events = [];
    }

    Promise.prototype.addEvent = function(e) {
      this.events.push(e);
    };

    Promise.prototype.execute = function(completeCallback) {

      var remaining = this.events.length;

      function done() {
        remaining -= 1;
        if (remaining <= 0) {
          completeCallback();
        }
      }

      for (var x = 0; x < this.events.length; x++) {

        var evt = this.events[x];

        setTimeout(function() {
          evt(done);
        }, 0);
      }
    };

    return Promise;
  }
);
