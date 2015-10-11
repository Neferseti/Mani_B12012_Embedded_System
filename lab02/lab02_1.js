var b = require('bonescript');

b.pinMode('P8_19', b.INPUT); // set the mode of pin P8_19 as INPUT
b.pinMode('P8_13', b.OUTPUT);// set the mode of pin P8_13 as OUTPUT
setInterval(check,100); // probe the function check after 100ms


function check(){ // reading the signal at P8_19 pin and calling function checkButton
b.digitalRead('P8_19', checkButton);
}

function checkButton(x) { //if the Input at P8_19 is 1, then the state of LED at P8_13 will be high, otherwise low
  if(x.value == 1){
    b.digitalWrite('P8_13', b.HIGH);
  }
  else{
    b.digitalWrite('P8_13', b.LOW);
  }
}
