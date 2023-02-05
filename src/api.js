import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import serverless from 'serverless-http'
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
//////////////////////////POST HOMEWORK///////////////////////////////////////
app.post('/.netlify/functions/api/homework', postHomework)
//////////////////////////GET ALL HOMEWORKS////////////////////////////////////////
app.get('/.netlify/functions/api/homework', getHomework)
//////////////////////////REMOVE HOMEWORK////////////////////////////////////////
app.delete('/.netlify/functions/api/homework/:id', removeHomework)
//////////////////////////START SERVER////////////////////////////////////////

module.exports.handler = serverless(app)
