'use strict';

var fs = require('fs');
var transform = require(__dirname + '/transform');
var bitmap = fs.readFileSync(__dirname + '/images/palette-bitmap.bmp');

var bitmapData = {};

function metaData () {
  bitmapData.header = bitmap.toString('ascii', 0, 2);
  bitmapData.size = bitmap.readUInt32LE(2);
  bitmapData.imageStart = bitmap.readUInt32LE(10);
  bitmapData.imageWidth = bitmap.readUInt32LE(18);
  bitmapData.paletteSize = bitmap.readUInt32LE(46);
  bitmapData.paletteStart = (bitmapData.imageStart - bitmapData.paletteSize*4);
  console.log(bitmapData);
}
metaData();
var start = bitmapData.paletteStart;
var end = bitmapData.imageStart;

var filter = String(process.argv[2]).toLowerCase();
var colorOption = String(process.argv[3]).toLowerCase();

if (filter == 'invert') {
  bitmap = transform.invert(bitmap, start, end);
} else if (filter == 'greyscale') {
  bitmap = transform.greyscale(bitmap, start, end);
} else if (filter == 'random') {
  bitmap = transform.random(bitmap, start, end);
} else if (filter == 'colorremove' && (colorOption == 'blue' || colorOption == 'green' || colorOption == 'red')) {
  bitmap = transform.colorRemove(colorOption, bitmap, start, end);
} else {
  console.log('Not a valid option');
}

fs.writeFileSync(__dirname + '/images/' + 'new' + filter + colorOption || '' + 'PBitmap.bmp', bitmap);
