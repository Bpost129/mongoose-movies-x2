import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()

// GET localhost:3000/movies
router.get('/new', moviesCtrl.new)
router.post('/', moviesCtrl.create)

export { router }
