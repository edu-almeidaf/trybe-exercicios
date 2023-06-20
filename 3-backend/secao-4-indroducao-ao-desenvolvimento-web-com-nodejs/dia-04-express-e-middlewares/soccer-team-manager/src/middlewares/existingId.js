const existingId = (req, res, next) => {
  const { id } = req.params;

  const idAsNumber = Number(id)
  if (Number.isNaN(idAsNumber)) {
    return res
      .status(400)
      .send({ message: 'ID inválido! Precisa ser um número' });
  } else {
    next()
  }
}

module.exports = existingId;