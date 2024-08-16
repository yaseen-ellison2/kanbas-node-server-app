
import model from "./model.js";


export const findAllQuizzes = () => model.find();

export const findQuizzesByCourse = (course) => model.find({ course: course });

export const createQuiz = (quiz) => {
  delete quiz._id
  return model.create(quiz);
}

export const updateQuiz = (qid, quiz) => model.updateOne({ _id: qid }, { $set: quiz });

export const deleteQuiz = (qid) => model.deleteOne({ _id: qid });
