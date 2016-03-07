'use strict';

//TODO:create function to determine if palette or non palette bitmap

//Invert the colors on the bitmap
var invert = function(bitmap, start, end){
  for (var i = start; i < end; i++) {
    bitmap[i] = 255-bitmap[i];
    console.log(bitmap[i]);
  }
  return bitmap;
};

//Greyscale the bitmap with white instead of black
var greyscale = function(bitmap, start, end) {
  console.log(start);
  console.log(end);
  for (var i = start; i < end; i++) {
    bitmap[i] = 255-i;
  }
  return bitmap;
};

// Randomly change the colors in the bitmap with a math.random
var random = function (bitmap, start, end) {
  for (var i = start; i < end; i++){
    bitmap[i]= Math.floor(Math.random()*255);
  }
  return bitmap;
};

// Color remove function, takes one parameter and removes the specified color
var colorRemove = function (colorOption, bitmap, start, end){
  for (var i = start; i < end; i+=4) {
    if (colorOption == 'blue') {
      bitmap[i] = bitmap[i]*0;
    } else if (colorOption == 'green') {
      bitmap[i+1] = bitmap[i]*0;
    } else if (colorOption == 'red') {
      bitmap[i+2] = bitmap[i]*0;
    }
  }
  return bitmap;
};

//exports functions
exports.invert = invert;
exports.random = random;
exports.greyscale = greyscale;
exports.colorRemove = colorRemove;
