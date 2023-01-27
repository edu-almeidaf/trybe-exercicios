const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// const authorName = books.find((author) => author.author.birthYear === 1947);
// console.log(authorName.author.name);

const authorBornIn1947 = () => {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}

// O primeiro operador é o not (!) antes de nameBook. Fazemos isso porque, como a variável nameBook não guarda nenhum valor, ela retorna undefined por padrão, e consequentemente o JavaScript a interpreta como um valor falsy, que se traduz como false. Desta maneira, ao utilizar o operador not (!) antes de nameBook, você nega que ele seja falso, ou seja, converte-o para true.

const smallerName = () => {
  let namebook;

  books.forEach((book) => {
    if (!namebook || book.name.length < namebook.length) {
      namebook = book.name;
    }
  })

  return namebook;
}



const bookTwentySixCharacters = () => {
  const nameBook = books.find((book) => book.name.length === 26);
  return nameBook.name;
}



const getBirth = () => {
  return books.every((book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000);
};

const verifyBookRelease = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}

const authorUnique = () => {
  return books.every((book) => {
    !books.some((bookSome) => {
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name);
    })
  })
}

console.log(authorBornIn1947());
console.log(smallerName());
console.log(bookTwentySixCharacters());
console.log(getBirth());
console.log(verifyBookRelease());
console.log(authorUnique());