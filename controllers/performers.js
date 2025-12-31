import { Performer } from '../models/performer.js'

function newPerformer(req, res) {
  Performer.find({})
  .then(performers => {
    res.render('performers/new', {
      title: 'Add Performer',
      performers
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
  })
}

function create(req, res) {
  const birthDate = new Date(req.body.born)
  req.body.born = birthDate.toUTCString()
  Performer.create(req.body)
  .then(performer => {
    res.redirect('/performers/new')
  })
}

export {
  newPerformer as new,
  create,

}