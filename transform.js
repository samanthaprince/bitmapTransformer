'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync(__dirname + '/images/palette-bitmap.bmp');
// var bitmap = fs.readFileSync(__dirname + '/images/' + process.argv[2])

//get bitmap header data and print to console
var bitmapData = {};
function metaData () {
  bitmapData.header = bitmap.toString('ascii', 0, 2);
  bitmapData.size = bitmap.readUInt32LE(2);
  bitmapData.imageStart = bitmap.readUInt32LE(10);
  bitmapData.imageWidth = bitmap.readUInt32LE(18);
  bitmapData.paletteSize = bitmap.readUInt32LE(46);
  bitmapData.paletteStart = (bitmapData.imageStart - bitmapData.paletteColors*4);
  console.log(bitmapData);
}
metaData();

//create function to determine if palette or non palette bitmap

// var newString = bitmap.toString('hex', 54, 182);
// console.log(newString);
//
// var colorArray = newString.match(/.{1,8}/g);
// console.log(colorArray);

//Invert the colors on the bitmap
var invert = function(){
  for (var i = 54; i < 310; i++) {
    bitmap[i] = 255-bitmap[i];
  }
  fs.writeFileSync(__dirname + '/images/newInvertPBitmap.bmp', bitmap);
};


//Greyscale the bitmap with white instead of black
var greyscale = function() {
  for (var i = 54; i < 310; i++) {
    bitmap[i] = 255-i;
  }
  fs.writeFileSync(__dirname + '/images/newGreyPBitmap.bmp', bitmap);
};


// Randomly change the colors in the bitmap with a math.random
var random = function () {
  for (var i = 54; i < 310; i++){
    bitmap[i]= Math.floor(Math.random()*255);
  }
  fs.writeFileSync(__dirname + '/images/newRandomPBitmap.bmp', bitmap);
};

var colorRemove = function (colorOption){
  for (var i = 54; i < 310; i+=4) {
    if (colorOption == 'blue') {
      bitmap[i] = bitmap[i]*0;
    } else if (colorOption == 'green') {
      bitmap[i+1] = bitmap[i]*0;
    } else if (colorOption == 'red') {
      bitmap[i+2] = bitmap[i]*0;
    }
  }
  fs.writeFileSync(__dirname + '/images/' + 'new' + colorOption + 'PBitmap.bmp', bitmap);
};

// remove blue
// for (var i = 54; i < 310; i+=4) {
//   bitmap[i] = bitmap[i]*0;
// }

//remove green
// for (var i = 54; i < 310; i+=4) {
//   bitmap[i+1] = bitmap[i]*0;
// }

//remove red
// for (var i = 54; i < 310; i+=4) {
//   bitmap[i+2] = bitmap[i]*0;
// }

// fs.writeFileSync(__dirname + '/images/newPBitmap.bmp', bitmap);

exports.bitmap = bitmap;
exports.invert = invert;
exports.random = random;
exports.greyscale = greyscale;
exports.colorRemove = colorRemove;
