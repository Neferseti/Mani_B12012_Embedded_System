#!/usr/bin/env node

var b = require('bonescript');

var port = '/dev/i2c-2'; // Use i2c bus 2

var gy = 0x68;

var ms = 2000; // Repeat time in ms

b.i2cOpen(port, gy);

b.i2cWriteBytes(port, 0x6b, [0]); // Write data to i2c bus

setInterval(readData, ms)

function readData() {

b.i2cReadBytes(port, 0x3b, 14, displayData); // Read data from i2c bus

}

function displayData(x) {

var gy;

if(x.event === 'return') {

gy = {

accel: {

x: (((x.return[0]<<8 | x.return[1])<<16)>>16),

y: (((x.return[2]<<8 | x.return[3])<<16)>>16),

z: (((x.return[4]<<8 | x.return[5])<<16)>>16)

},
temp:{
    x: (((x.return[6]<<8 | x.return[7])<<16)>>16)
    
},
gyro: {

gx: ((((x.return[8]<<8) | x.return[9])<<16)>>16),


gyr: (((x.return[10]<<8 | x.return[11])<<16)>>16),

gz: (((x.return[12]<<8 | x.return[13])<<16)>>16)

},

}

};

console.log(gy);

}


