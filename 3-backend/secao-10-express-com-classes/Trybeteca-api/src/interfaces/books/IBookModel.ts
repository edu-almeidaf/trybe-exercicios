import { ICRUDModel } from '../ICRUDModel';
import { IBook } from './IBook';

export interface IBookModel extends ICRUDModel<IBook> {
  findByQuery(q: string): Promise<IBook[]>;
}
