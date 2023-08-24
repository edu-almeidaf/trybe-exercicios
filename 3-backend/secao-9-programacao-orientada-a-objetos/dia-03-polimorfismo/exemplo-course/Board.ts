import { Pawn } from "./Pawn";
import { Piece } from "./Piece";
import { Rook } from "./Rook";
import { BoardSquare, isBoardSquareInList } from "./types";

export class Board {
  pieces: Piece[] = [];

  constructor() {
    this.addPiece(new Pawn(['C', '2'], this));
    this.addPiece(new Rook(['F', '1'], this));
  }

  private addPiece(piece: Piece): void {
    if (isBoardSquareInList(piece.position, this.occupiedSquares)) return;
    this.pieces.push(piece);
  }

  get occupiedSquares(): BoardSquare[] {
    return this.pieces.map((piece) => piece.position);
  }
}