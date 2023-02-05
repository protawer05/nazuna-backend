import mongoose from 'mongoose'

const HomeworkSchema = new mongoose.Schema(
	{
		lessonTitle: { type: String, required: true },
		homework: { type: String, required: true },
	},
	{ timestamps: true }
)

export default mongoose.model('Homework', HomeworkSchema)
