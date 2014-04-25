var snare = require('../');
var d = snare();

return function (t) {
  return d(t % (1/2));
};
