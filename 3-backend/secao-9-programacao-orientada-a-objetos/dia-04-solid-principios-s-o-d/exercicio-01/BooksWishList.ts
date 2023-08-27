type Book = {
  book: string;
  author: string;
  genre: string;
}

class WishList {
  private wishlist: Book[];

  constructor(book: Book) {
    this.wishlist = [];
    this.addToWishlist(book);
  }

  addToWishlist(newBook: Book): void {
    this.wishlist.push(newBook);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

const wishList = new WishList({
  book: 'The Road',
  author: 'Cormac McCarthy',
  genre: 'Dystopia' 
});
wishList.addToWishlist({
  book: 'Misery',
  author: 'Stephen King',
  genre: 'Thriller' 
});
wishList.showWishlist();