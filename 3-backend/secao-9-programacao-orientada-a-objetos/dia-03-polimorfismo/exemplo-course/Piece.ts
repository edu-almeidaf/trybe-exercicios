import { Board } from "./Board";
import { BoardSquare, isBoardSquareInList } from "./types";

export abstract class Piece {
  protected _position: BoardSquare;
  abstract type: string;

  constructor(position: BoardSquare, protected board: Board) {
    this._position = position;
  }

  get position() { return this._position; }

  abstract get availableMoves(): BoardSquare[];

  move(newPosition: BoardSquare) {
    console.log(
      `MOVENDO ${this.type} DA CASA ${this._position} PARA A CASA ${newPosition}`
    )
    if (!isBoardSquareInList(newPosition, this.availableMoves)) return false;
    this._position = newPosition;
    return true;
  }
}