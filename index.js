'use strict';

var transform = require(__dirname + '/transform');

var filter = String(process.argv[2]).toLowerCase();
var colorOption = String(process.argv[3]).toLowerCase();

if (filter == 'invert') {
  transform.invert();
} else if (filter == 'greyscale') {
  transform.greyscale();
} else if (filter == 'random') {
  transform.random();
} else if (filter == 'colorremove' && (colorOption == 'blue' || colorOption == 'green' || colorOption == 'red')) {
  transform.colorRemove(colorOption);
} else {
  console.log('Not a valid option');
}
