import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import homework from './api/homework.js'

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

app.use('/api/homework', homework)
//////////////////////////START SERVER////////////////////////////////////////
app.listen(PORT, () => console.log(`server started on ${PORT} port`))

export default app
