import { Piece } from "./Piece";
import { BoardSquare, boardRows, isBoardSquareInList } from "./types";

export class Pawn extends Piece {
  type = 'Peão';

  get availableMoves(): BoardSquare[] {
    const column = this.position[0];
    const row = this.position[1];
    const rowIndex = boardRows.indexOf(row);
    if (rowIndex === 7) {
      return [];
    }

    const nextSquare: BoardSquare = [column, boardRows[rowIndex + 1]];
    if (isBoardSquareInList(nextSquare, this.board.occupiedSquares)) {
      return [];
    }

    return [nextSquare];
  }
}