var app = require('../lib/app.js');
var assert = require('assert');

describe('計算機', () => {
  it('加', () => {
    var result = app.addition(1, 2);
    assert.equal(result, 3)
  });
  it('減', () => {
    var result = app.subtraction(2, 1);
    assert.equal(result, 1);
  });
  it('乘', () => {
    var result = app.multiplication(2, 3);
    assert.equal(result, 6);
  });
  it('除', () => {
    var result = app.division(6, 3);
    assert.equal(result, 2)
  });
});