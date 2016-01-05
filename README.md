xspawn
-----

a simple promise style spawn.


## install

```
npm install xspawn
```


## example


```
var spawn = require('xspawn');

spawn('ls .')
  .then(function(res) {
    console.log(res.code); // the exit code
    console.log(res.out); // output string
  });
```

## API

you can pass spawn `opts` as the second parameter.

- `$through` means whether you want to log the output to your console
- `$silent` means the command execute in silent mode and never throw error
- `onData` a callback function which will be invoke whenever new output generated

## license

MIT
