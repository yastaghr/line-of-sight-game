//object constructor for a piece
function Piece(type, xCoord, yCoord, direction) {
    this.type = type;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.direction = direction;
    this.image = getImage(this.type);
}
function Emmiter(xCoord, yCoord, direction){
  Piece.apply(this, arguements);
  this.type = 'emitter';
  this.xCoord = xCoord;
  this.yCoord = yCoord;
  this.direction = direction;
  this.image = getImage(this.type);
}

getImage = function(type){
  var filename;
  //determines which image to use
  switch (type){
    case 'emitter':
      filename = 'emitter.png';
      break;
    case 'angle':
      filename = 'angle.png';
      break;
    default:
      filename = 'angle.png';
  }
  return filename;
};

//big variables
var numRows = 6;
var numColumns = 10;
var squareSize = 10;
var p1hasWon;
var p2hasWon;

//piece objects
var emmiter1 = new Piece(Emmiter, 0, 0, 'S');

 drawBoard = function(){
  //draws a blank board onto screen

  //storing w/h of browser
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
};

drawPieces = function(arrangement){
  //draws pieces onto board
  var emitters = 2;
  var target = 2;
  var block = 4;
  var angle = 6;
  var mirror = 4;
  switch (arrangement) {
    case 's':
      drawSimple(emitters, target, block, angle, mirror);
      break;
    case 'a':
      drawAdvanced(emitters, target, block, angle, mirror);
      break;
    case 'i':
      drawInsane(emitters, target, block, angle, mirror);
      break;
    default:
      drawSimple(emitters, target, block, angle, mirror);
  }
};

drawSimple = function(emitters, target, block, angle, mirror){
  //e---BTB---
  //--A-------
  //a---mM---A
  //a---Mm---A
  //-------a--
  //---btb---E
};

drawAdvanced = function(emitters, target, block, angle, mirror){

};

drawInsane = function(emitters, target, block, angle, mirror){

};

askMove = function(player){
  //asks player what move they want to make
  var trial = true;
  var piece, newX, newY, newDirection;
  while (trial){
    var clickedPiece =
    //asks if last trial is final move
    trial = !confirm(('Is that your final move, player ' +(player+1)+'?'));
  }
  movePiece(piece, newX, newY, newDirection);
};

findClickedPiece = function(){
  var x = mouseX;
  var y = mouseY;
  if (x<=squareSize && y<=squareSize){
    return emmiter1;
  }
  else if (x>=(squareSize*(numColumns-1)) && y>=(squareSize*(numRows-1))){
    return emmiter2;
  }
  //check if any of other pieces
};

movePiece = function(piece, newX, newY, newDirection){
  //draws piece that has been moved into new position
};

checkSightLine = function(side){
  //checks the line of sight from that player's light caster
  return true; //return if has hit enemy
};

playGame = function(){
  //runs game
  drawBoard();
  var arrangement = prompt('Which arrangement do you want to play with? \n type \'s\' for Simple, \'a\' for advanced, and \'i\' for insane.');
  drawPieces(arrangement);
  p1hasWon = false;
  p2hasWon = false;
  var turn = 0;
  var player;
  while (!p1hasWon && !p2hasWon){
    player = turn%2 +1;
    askMove(player);
    turn++;
    //exit of loop check
    checkForVictory();
  }
  if (confirm("Player "+(player)+" has won! Do you want a rematch?")) playGame();
};

checkForVictory = function(){
  //checks if either player has won
  if (checkSightLine(1)){
    p1hasWon = true;
  }
  if (checkSightLine(2)){
    p2hasWon = true;
  }
};
