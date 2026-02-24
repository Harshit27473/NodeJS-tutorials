const names = require('./4-firstModule');

const sayHi = require('./5-utilsModule');
require('./6-addNewReq');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);