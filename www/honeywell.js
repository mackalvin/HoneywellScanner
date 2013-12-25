cordova.define("com.sparta.cordova.plugin.honeywell.HoneywellScanner", function(require, exports, module) {var exec = require("cordova/exec");

function HoneywellScanner() {
};

HoneywellScanner.prototype.enable = function(callback) {
  // set up a global callback that is accessible from the native side
  cordova._captuvoCallback = function(results) {
    callback(results);
  }
  var args = [ 'cordova._captuvoCallback' ];
  exec(null, null, 'HoneywellScanner', 'registerCallback', args );
};

HoneywellScanner.prototype.disable = function() {
  delete cordova._captuvoCallback;
  exec(null, null, 'HoneywellScanner', 'disable', [] );
};

HoneywellScanner.prototype.trigger = function() {
  exec(null, null, 'HoneywellScanner', 'trigger', [] );
};

// exports
var plugin = new HoneywellScanner();
module.exports = plugin;



});
