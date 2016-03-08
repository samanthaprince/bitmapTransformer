'use strict';

var fs = require('fs');
var transform = require(__dirname + '/../transform');
// var index = require(__dirname + '../index');
var expect = require('chai').expect;

describe('Test the metadata function', function(){
  var bitmapData = {};
  before(function(done) {
    var bitmap = fs.readFileSync(__dirname + '/../images/palette-bitmap.bmp');
    (function metaData () {
      bitmapData.header = bitmap.toString('ascii', 0, 2);
      bitmapData.size = bitmap.readUInt32LE(2);
      bitmapData.imageStart = bitmap.readUInt32LE(10);
      bitmapData.imageWidth = bitmap.readUInt32LE(18);
      bitmapData.paletteSize = bitmap.readUInt32LE(46);
      bitmapData.paletteStart = (bitmapData.imageStart - bitmapData.paletteSize*4);
    })();
    done();
  });
  it('should read the header of a bitmap', function(){
    expect(bitmapData.size).to.eql(11078);
    expect(bitmapData.imageStart).to.eql(1078);
  });
});

describe('Test the greyscale function', function(){
  it('should take an index, subtracts it from 255, and return a new index', function(){
    var sampleArray = [0,0];
    expect(transform.greyscale(sampleArray,0,2)).to.eql([255,254]);
  });
});

// describe('Test the invert function', function(){
//
//   it('takes each index in the color array ', function(){
//     expect(transform.invert(bitmap[i])).to.eql(255-bitmap[i]);
//   });
// });

describe('Test the random function', function(){
  it('Should randomly assign a new value to the colors in the color array ', function(){
    var sampleArray = [0,0];
    expect(transform.random(sampleArray,0,2)).to.not.equal([0,0]);
  });
});
