import {
	postHomework,
	getHomework,
	removeHomework,
} from '../controllers/HomeworkController.js'
import express from 'express'
const router = express.Router()

router.post('/', postHomework)
router.get('/', getHomework)
router.delete('/:id', removeHomework)

export default router
