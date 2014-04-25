# snare-synth

snare drum for [baudio](https://npmjs.org/package/baudio)

[Here's what it sounds like.](http://studio.substack.net/snare?time=1396268517260)

# example

```
var snare = require('snare-synth');
var d = snare();

return function (t) {
  return d(t % (1/2));
};
```

Play it with [baudio](https://npmjs.org/package/baudio):

```
$ baudio example/snare.js
```

# methods

```
var snare = require('snare-synth')
```

## var d = snare()

Return a function `d(t)` that plays a snare once when `t` is small.

# install

With [npm](https://npmjs.org) do:

```
npm install snare-synth
```

# license

MIT
