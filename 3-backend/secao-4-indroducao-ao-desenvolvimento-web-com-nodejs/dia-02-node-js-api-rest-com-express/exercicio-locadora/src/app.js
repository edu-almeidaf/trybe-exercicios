const express = require('express')
const fs = require('fs').promises
const path = require('path')

const app = express()
app.use(express.json())

const MOVIES = './movies.json'
const moviesPath = path.resolve(__dirname, MOVIES)

const getMovies = async () => {
  try {
    const data = await fs.readFile(moviesPath)
    return JSON.parse(data)
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`)
  }
}

app.get('/movies', async (req, res) => {
  try {
    const movies = await getMovies()

    if (!movies) {
      throw new Error('Filmes não encontrados')
    }

    res.status(200).json(movies)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query
    const movies = await getMovies()

    if (q) {
      const filteredMovies = movies.filter(({ movie }) =>
        movie.toLowerCase().includes(q.toLowerCase()),
      )
      return res.status(200).json(filteredMovies)
    }
    // res.status(200).end()
  } catch (error) {
    res.status(404).send({ message: error.message })
  }
})

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params

  try {
    const movies = await getMovies()
    const movie = movies.find(({ id: movieId }) => movieId === Number(id))

    if (!movie) {
      throw new Error('Filme não encontrado')
    }

    res.status(200).json(movie)
  } catch (error) {
    res.status(404).send({ message: error.message })
  }
})

app.post('/movies', async (req, res) => {
  try {
    const movies = await getMovies()
    const { movie, price } = req.body
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    }
    const allMovies = JSON.stringify([...movies, newMovie], null, 2)
    await fs.writeFile(moviesPath, allMovies)
    res.status(201).json(newMovie)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { movie, price } = req.body
    const movies = await getMovies()
    const index = movies.findIndex((element) => element.id === Number(id))

    if (index === -1) {
      throw new Error('Filme não encontrado')
    }

    movies[index] = { id: Number(id), movie, price }

    const updatedMovies = JSON.stringify(movies, null, 2)
    await fs.writeFile(moviesPath, updatedMovies)
    res.status(200).json(movies[index])
  } catch (error) {
    res.status(404).send({ message: error.message })
  }
})

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params
    const movies = await getMovies()
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id))

    if (movies.length === filteredMovies.length) {
      throw new Error('Filme não encontrado')
    }

    const updatedMovies = JSON.stringify(filteredMovies, null, 2)
    await fs.writeFile(moviesPath, updatedMovies)
    res.status(204).end()
  } catch (error) {
    res.status(404).send({ message: error.message })
  }
})

module.exports = app
