/**
*Parent class for all movable Pieces in game.
*@author Liana Bardallis
*@version 1.0
*/
abstract MovingPiece extends Piece{
  private boolean isDead;
  
  /**
   * 
   */
  public MovingPiece(int colour){
  	Piece(colour);
  	isDead = false;
  }
  
  public void movePiece(int newXSquare, int newYSquare){
  	
  }
  
  /**
       * Will take an incoming laser and determine what its interaction with the Piece is (eg. reflection, kill, etc).
       * Action is an enum, as is Direction.
       * @param Direction direction of origin for incoming line
       * @return Action action performed by laser
       * @since 1.0
       */
  abstract public Affect interact(Direction incoming);
  
  /**
   * Rotates Piece 90deg with specified rotation.
   * @since 1.0
   */
  public void rotate(boolean clockwise){
  	
  }
  
}
