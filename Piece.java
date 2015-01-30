/**
* Object for a piece on a gameboard in a line of sight/laser game, complete with
* colour,status(dead/not dead), position, and an array of Side objects
* cooresponding to each side's qualities and orientation. 
*@author Liana Bardallis
*@version 1.0
*/
class Piece{
      //sides always arranged up, down, left, right
      protected Side[] sides;
      private static final int NUM_SIDES = 4;
    
      private boolean isDead;
      
      private int colour;
      /**
      *Representative static final variable of pieces colour for BLUE.
      *@since 1.0
      */
      public static final int BLUE = 0;
      /**
      *Representative static final variable of pieces colour for WHITE.
      *@since 1.0
      */
      public static final int WHITE = 1;

      private int rowPosition, columnPosition;

      /**
      *Constructor for Piece object.
      *@param int colour that piece is
      *@since 1.0
      */
      public Piece(int colour){
      	     this.colour = colour;
	     sides = new Side[NUM_SIDES];
      }
}
