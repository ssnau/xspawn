var spawn = require('../');
var assert = require('assert');
var join = require('path').join;
var run = function (cmd) {
  return spawn('cd ' + join(__dirname, 'assets') + ' && ' + cmd, {$through: true});
}
describe('ok cmds', function () {
  it('should ls the assets folder', function (done) {
    run('ls .').then(function(res) {
      assert(String(res.code) === '0');
      assert(res.out.trim() === 'a.txt');
      done();
    }).catch(e => console.log(e));
  });
});

describe('fail cmds', function () {
  it('ls an non-exists folder', function (done) {
    run('ls xafew').then(function(res) {
      assert(String(res.code) !== '0');
      done();
    }).catch(e => console.log(e));
  });

  it('call undefined cmd', function (done) {
    run('locjw').then(function(res) {
      assert(String(res.code) !== '0');
      done();
    }).catch(e => console.log(e));
  });
});
