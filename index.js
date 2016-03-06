'use strict';

var fs = require('fs');
// var invert = exports = module.exports = {};

var bitmap = fs.readFileSync(__dirname + '/images/palette-bitmap.bmp');
// var bitmap = fs.readFileSync(__dirname + '/' + process.argv[2])
var bitmapData = {};

//get bitmap header data and print to console
bitmapData.size = bitmap.readUInt32LE(2);
bitmapData.imageStart = bitmap.readUInt32LE(10);
bitmapData.imageWidth = bitmap.readUInt32LE(18);
bitmapData.paletteColors = bitmap.readUInt32LE(46);
bitmapData.paletteStart = bitmap.readUInt32LE(54);

console.log(bitmapData);
// var newString = bitmap.toString('hex', 54, 182);
// console.log(newString);
//
// var colorArray = newString.match(/.{1,8}/g);
// console.log(colorArray);

//invert
// var invert = function(){
//   for (var i = 54; i < 310; i++) {
//     bitmap[i] = 255-bitmap[i];
//   }
// };
// invert();

//greyscale
for (var i = 54; i < 310; i++) {
  bitmap[i] = 255-i;
}
//remove blue
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

fs.writeFileSync(__dirname + '/images/newPBitmap.bmp', bitmap);
