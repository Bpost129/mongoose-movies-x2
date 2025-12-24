import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()

// GET localhost:3000/movies
router.get('/', moviesCtrl.index)
router.get('/new', moviesCtrl.new)
router.get('/:movieId', moviesCtrl.show)
router.get('/:movieId/edit', moviesCtrl.edit)
router.post('/', moviesCtrl.create)
router.delete('/:movieId', moviesCtrl.delete)

export { router }
