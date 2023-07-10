const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });
  return books;
}

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: { author },
    order: [['title', 'ASC']],
  });
  return books;
}

const create = async ({ title, author, pageQuantity, publisher }) => {
  const book = await Book.create({ title, author, pageQuantity, publisher });
  return book;
};

const update = async (id, { title, author, pageQuantity, publisher }) => {
  const [updated] = await Book.update(
    {
      title,
      author,
      pageQuantity,
      publisher,
    },
    { where: { id } }
  );

  return updated;
};

const remove = async (id) => {
  const removed = await Book.destroy({ where: { id } });

  return removed;
}

module.exports = {
  getAll,
  getById,
  getByAuthor,
  create,
  update,
  remove,
}