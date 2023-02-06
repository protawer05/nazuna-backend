import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import {
	postHomework,
	getHomework,
	removeHomework,
} from '../controllers/HomeworkController.js'
//////////////////////////CONNECT DB///////////////////////////////////////
mongoose
	.connect(process.env.DB_URL)
	.then(() => console.log('db is ok'))
	.catch(err => console.log(`db error: ${err}`))
/////////////////////////////////////////////////////////////////////////////
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 4444
//////////////////////////POST HOMEWORK///////////////////////////////////////
app.post('/homework', postHomework)
//////////////////////////GET ALL HOMEWORKS////////////////////////////////////////
app.get('/homework', getHomework)
//////////////////////////REMOVE HOMEWORK////////////////////////////////////////
app.delete('/homework/:id', removeHomework)
//////////////////////////START SERVER////////////////////////////////////////
module.exports = app
