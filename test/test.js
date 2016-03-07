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

describe('greyscale function', function(){
  it('takes an index, subtracts it from 255, and returns a new index', function(){
    var sampleArray = [0,0];
    expect(transform.greyscale(sampleArray,0,2)).to.eql([255,254]);
  });
});

describe('invert function', function(){
  store bitmpap[i] in a variable
  frun the funciton
  it('takes ', function(){
    expect(''what bitmapi was to be equal to bitmap i - 255);
  });
});

// describe('random function', function(){
//   it('takes', function(){
//     expect('');
//   });
// });
// describe('test the random function', function() {
//   beforeEach(function(done) {
//     oldBitmap = fs.readFileSync(__dirname + '/images/palette-bitmap.bmp')
//     oldBitmap.transform.random
//     done()
//     it('should randomly change one color in the palette to another color', function(){
//       oldBitmap = fs.readFileSync(__dirname + '/images/palette-bitmap.bmp')
//       newBitmap = fs.readFileSync(__dirname + '/images/newrandomundefinedPBitmap.bmp')
//       expect();
//
//   })
//   });
// });
