public class Move {
		
	private boolean take;
	private boolean check;
	private boolean checkmate;

	private String piece;
	private int difference;

	public Move(boolean _take, boolean _check, boolean _checkmate, String _piece, int _difference) {
		take = _take;
		check = _check;
		checkmate = _checkmate;
		piece = _piece;
		difference = _difference;
	}

	public boolean getTake() {return take;}
	public boolean getCheck() {return check;}
	public boolean getCheckmate() {return checkmate;}

	public String getPiece() {return piece;}
	public int getDifference() {return difference;}

}