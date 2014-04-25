module.exports = snare;

function snare () {
  var low0 = lowpass(30);
  var low1 = lowpass(80);
  var low2 = lowpass(20);
  return function (t) {
    return low0(snare(80, t))*5
      + low1(snare(40, t+1/60))*10
      + low2(snare(80, t+1/30))*5
    ;
    function snare (n, o) {
      var scalar = Math.max(0, 0.95 - (o * n) / ((o * n) + 1));
      return sin(sin(sin(137)*139)*4217) * scalar;
    }
    function sin (x) { return Math.sin(2 * Math.PI * t * x) }
  };
  function lowpass (n) {
    var value = 0;
    return function (x) { return value += (x - value) / n }
  }
}
