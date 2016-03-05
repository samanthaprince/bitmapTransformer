'use strict';

var fs = require('fs');

var bitmap = fs.readFileSync(__dirname + '/images/pallette-bitmap');
var bitmapData = {};

var size = bitmap.readUInt32LE(2);
var imageStart = bitmap.readUInt32LE(10);





var newBitmap = fs.writeFileSync(__dirname _ '/images/newPBitmap.bmp', bitmap);

 
