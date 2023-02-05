import HomeworkModel from '../models/Homework.js'
export const postHomework = async (req, res) => {
	try {
		const doc = new HomeworkModel({
			lessonTitle: req.body.lessonTitle,
			homework: req.body.homework,
		})
		const homework = await doc.save()
		res.json(homework)
	} catch (err) {
		res.status(200)
	}
}

export const getHomework = async (req, res) => {
	try {
		const homeworks = await HomeworkModel.find()
		res.status(200).json(homeworks)
	} catch (err) {}
	res.status(200)
}

export const removeHomework = async (req, res) => {
	try {
		const homeworkId = req.params.id
		await HomeworkModel.findOneAndDelete({ _id: homeworkId }, (err, doc) => {
			res.status(200).json({ sucsess: 'da' })
		})
	} catch (err) {
		res.status(200)
	}
}
