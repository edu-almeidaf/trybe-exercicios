import { NewEntity } from '../interfaces';
import BookModel from '../models/BookModel';
import { IBook } from '../interfaces/books/IBook';
import { IBookModel } from '../interfaces/books/IBookModel';
import { ServiceMessage, ServiceResponse } from '../interfaces/ServiceResponse';

export default class BookService {
  constructor(
    private bookModel: IBookModel = new BookModel(),
  ) { }

  public async getAllBooks(): Promise<ServiceResponse<IBook[]>> {
    const allBooks = await this.bookModel.findAll();
    return { status: 'SUCCESSFUL', data: allBooks };
  }

  public async getBookById(id: number): Promise<ServiceResponse<IBook>> {
    const book = await this.bookModel.findById(id);
    if (!book) return { status: 'NOT_FOUND', data: { message: `Book ${id} not found` } };
    return { status: 'SUCCESSFUL', data: book };
  }

  public async createBook(book: NewEntity<IBook>): Promise<ServiceResponse<IBook>> {
    const newBook = await this.bookModel.create(book);
    return { status: 'SUCCESSFUL', data: newBook };
  }

  public async updateBook(id: number, book: IBook): Promise<ServiceResponse<ServiceMessage>> {
    const bookFound = await this.bookModel.findById(id);
    if (!bookFound) return { status: 'NOT_FOUND', data: { message: `Book ${id} not found` } };

    const updatedBook = await this.bookModel.update(id, book);
    if (!updatedBook) {
      return { status: 'CONFLICT',
        data: { message: `There are no updates to perform in Book ${id}` } };
    }
    return { status: 'SUCCESSFUL', data: { message: 'Book updated' } };
  }

  public async deleteBook(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const bookFound = await this.bookModel.findById(id);
    if (!bookFound) return { status: 'NOT_FOUND', data: { message: `Book ${id} not found` } };

    await this.bookModel.delete(id);
    return { status: 'SUCCESSFUL', data: { message: 'Book deleted' } };
  }

  public async getBookByQuery(q: string): Promise<ServiceResponse<IBook[] | ServiceMessage>> {
    const book = await this.bookModel.findByQuery(q);
    if (book && book.length === 0) {
      return { status: 'NOT_FOUND', data: { message: `Author ${q} not found` } };
    }

    return { status: 'SUCCESSFUL', data: book };
  }

  public async discountBook(id: number, discount: number):
  Promise<ServiceResponse<ServiceMessage>> {
    const book = await this.bookModel.findById(id);
    if (!book) return { status: 'NOT_FOUND', data: { message: `Book ${id} not found` } };

    const newPrice = book.price - (book.price * (discount / 100));
    await this.bookModel.update(id, { price: newPrice });
    return { status: 'SUCCESSFUL', data: { message: 'Book updated' } };
  }
}
