var b = require('bonescript');

var outputs = ["USR0", "USR1", "USR2", "USR3", "P9_11", "P9_13", "P9_15", "P9_17", "P9_23"];
var inputs = ["P8_7", "P8_9", "P8_11", "P8_13", "P8_15"];

var gridSize=10;

var x = new Array(gridSize);
for (var i = 0; i < gridSize; i++) { // initialize a 2d array grid of size gridSize
  x[i] = new Array(gridSize);
}

for (var i = 0; i < gridSize; i++) { // assign NULL Values to each element of the grid
  for (var j = 0; j < gridSize; j++){
      x[i][j] =' ';
  }
}

function gridPrint(){ //to print the grid in a particular format 
  var combinedString0="X\t"
  for(var i=0;i<gridSize;i++) combinedString0+=i+1+"\t";
  console.log(combinedString0);
  for(var i=0;i<gridSize;i++){
    var combinedString1=i+1+":\t"
    for(var j=0;j<gridSize;j++) combinedString1+=x[i][j]+"\t";
    console.log(combinedString1);  
  }
  var separator="-------------------------------------------------------------------------------------";
  console.log(separator);
    
}

var m=0,n=0;
x[m][n]='0'; // set first value of grid as zero which tells the current position of the pointer

for(var i in outputs) { //set the pin mode of outputs array as OUTPUT
    b.pinMode(outputs[i], b.OUTPUT);
}

for(var i in inputs) {//set the pin mode of inputs array as INPUT
    b.pinMode(inputs[i], b.INPUT);
}

for(var i in outputs) {  // set LOW value of elements in OUTPUT
    b.digitalWrite(outputs[i], b.LOW);
}


setInterval(check,100); // probe the function check after 100ms


gridPrint(); // print the grid

function check(){ // reads the values of inputs
    b.digitalRead(inputs[0], checkButton0);
    b.digitalRead(inputs[1], checkButton1);
    b.digitalRead(inputs[2], checkButton2);
    b.digitalRead(inputs[3], checkButton3);
    b.digitalRead(inputs[4], checkButton4);
}



function checkButton0(d) { //check the state of button 0 and take appropriate actions
  if(d.value == 1){
    b.digitalWrite(outputs[4], b.HIGH);
    b.digitalWrite(outputs[0], b.HIGH);
    if(n>=0&&n<gridSize-1) {
      x[m][n]='*';
      n++;
      x[m][n]='0';
      gridPrint();
    }
  }
  else{
    b.digitalWrite(outputs[4], b.LOW);
    b.digitalWrite(outputs[0], b.LOW);
  }
}

function checkButton1(d) { //check the state of button 1 and take appropriate actions
  if(d.value == 1){
    b.digitalWrite(outputs[5], b.HIGH);
    b.digitalWrite(outputs[1], b.HIGH);
    if(n>0&&n<gridSize) {
      x[m][n]='*';
      n--;
      x[m][n]='0';
      gridPrint();
    }
    
  }
  else{
    b.digitalWrite(outputs[5], b.LOW);
    b.digitalWrite(outputs[1], b.LOW);
  }
}

function checkButton2(d) { //check the state of button 2 and take appropriate actions
  if(d.value == 1){
    b.digitalWrite(outputs[6], b.HIGH);
    b.digitalWrite(outputs[2], b.HIGH);
    if(m>=0&&m<gridSize-1) {
      x[m][n]='*';
      m++;
      x[m][n]='0';
      gridPrint();
    }
  }
  else{
    b.digitalWrite(outputs[6], b.LOW);
    b.digitalWrite(outputs[2], b.LOW);
  }
}

function checkButton3(d) { //check the state of button 3 and take appropriate actions
  if(d.value == 1){
    b.digitalWrite(outputs[7], b.HIGH);
    b.digitalWrite(outputs[3], b.HIGH);
    if(m>0&&m<gridSize) {
      x[m][n]='*';
      m--;
      x[m][n]='0';
      gridPrint();
    }
    
  }
  else{
    b.digitalWrite(outputs[7], b.LOW);
    b.digitalWrite(outputs[3], b.LOW);
  }
}

function checkButton4(y) { //check the state of button 4 and take appropriate actions
  if(y.value == 1){
    b.digitalWrite(outputs[8], b.HIGH);
    b.digitalWrite(outputs[0], b.HIGH);
    b.digitalWrite(outputs[1], b.HIGH);
    b.digitalWrite(outputs[2], b.HIGH);
    b.digitalWrite(outputs[3], b.HIGH);
    for (var i = 0; i < gridSize; i++) {
      for (var j = 0; j < gridSize; j++){
        x[i][j] =' ';
      }
    }
    m=0;
    n=0;
    x[m][n]='0';
    gridPrint();
  }
  else{
    b.digitalWrite(outputs[8], b.LOW);
    b.digitalWrite(outputs[0], b.LOW);
    b.digitalWrite(outputs[1], b.LOW);
    b.digitalWrite(outputs[2], b.LOW);
    b.digitalWrite(outputs[3], b.LOW);
  }
}
