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
    if (x.event === 'return') {
        gy = {
                temp: {
                x: (((x.return[6] << 8 | x.return[7]) << 16) >> 16)

            }
            
        }
    };
    console.log(gy);
}
