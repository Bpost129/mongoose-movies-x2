import { Movie } from '../models/movie.js'

function newMovie(req, res) {
  res.render('movies/new', {
    title: 'Add Movie',
  })
}

function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  if (req.body.cast) {
    req.body.cast = req.body.cast.split(', ')
  }
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Movie.create(req.body)
  .then(movie => {
    res.redirect('/movies')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies/new')
  })
}

function index(req, res) {
  Movie.find({})
  .then(movies => {
    res.render('movies/index', {
      title: 'All Movies',
      movies: movies
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Movie.findById(req.params.movieId)
  .then(movie => {
    res.render('movies/show', {
      title: 'Movie Details',
      movie: movie
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  newMovie as new,
  create,
  index,
  show,

}