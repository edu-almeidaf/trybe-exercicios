import { Piece } from "./Piece";
import { BoardSquare, boardColumns, boardRows, isBoardSquareInList } from "./types";

export class Rook extends Piece {
  type = 'Torre';
  get availableMoves(): BoardSquare[] {
    const column = this.position[0];
    const columnIndex = boardColumns.indexOf(column);

    const row = this.position[1];
    const rowIndex = boardRows.indexOf(row);

    let availableSquares: BoardSquare[] = [];

    for (let i = rowIndex - 1; i >= 0; i--) {
      const square: BoardSquare = [boardColumns[columnIndex], boardRows[i]];
      if (isBoardSquareInList(square, this.board.occupiedSquares)) break;
      availableSquares.push(square);
    }

    for (let i = rowIndex + 1; i < 8; i++) {
      const square: BoardSquare = [boardColumns[columnIndex], boardRows[i]];
      if (isBoardSquareInList(square, this.board.occupiedSquares)) break;
      availableSquares.push(square);
    }

    for (let i = columnIndex + 1; i < 8; i++) {
      const square: BoardSquare = [boardColumns[i], boardRows[rowIndex]];
      if (isBoardSquareInList(square, this.board.occupiedSquares)) break;
      availableSquares.push(square);
    }

    for (let i = columnIndex - 1; i >= 0; i--) {
      const square: BoardSquare = [boardColumns[i], boardRows[rowIndex]];
      if (isBoardSquareInList(square, this.board.occupiedSquares)) break;
      availableSquares.push(square);
    }

    return availableSquares;
  }
}