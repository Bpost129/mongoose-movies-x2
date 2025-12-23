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
  Movie.create(req.body)
  .then(movie => {
    res.redirect('/movies')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies/new')
  })
}

export {
  newMovie as new,
  create,

}