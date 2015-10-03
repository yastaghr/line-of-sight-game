/**
*Creates a gameboard with an array of Piece objects, ints for board length and width in pixels and number
*of rows and columns.
*@author Liana Bardallis
*@version 1.0
*/
class Board{
  private Piece[] pieces;
  //number of each piece each side has
  private static final int NUM_PATHCHANGER = 1;
  private static final int NUM_PARTICIAN = 2;
  private static final int NUM_BODYGUARD = 2;
  private static final int NUM_TARGET = 1;
  private static final int NUM_ASSASIN = 1;
  private static final int NUM_PIECES = 2*(NUM_PATHCHANGER + NUM_PARTICIAN + NUM_BODYGUARD + NUM_TARGET + NUM_ASSASIN);
  
  private int length, width, rows, columns;
  private static final int SQUARE_SIZE = 64;
  
  public static final int NO_1_WAY_MIRROR = 0;
  public static final int HAS_1_WAY_MIRROR = 1;
  
  public Board(int numRows, int numColumns, int has1WayMirror){
  	rows = numRows;
  	width = rows * SQUARE_SIZE;
  	columns = numColumns;
  	length = columns * SQUARE_SIZE;
  	pieces = new Piece[(NUM_PIECES+(2*has1WayMirror))];
  	if (has1WayMirror == 1){
  		populateArray(pieces);
  		\\pieces[(pieces.length -2)] = OneWayMirror(BLUE);
  		\\pieces[(pieces.length -1)] = OneWayMirror(WHITE);
  	}
  	else{
  		populateArray(pieces);
  	}
  	
  	private static void populateArray(Piece[] array){
  	}
  }
}
