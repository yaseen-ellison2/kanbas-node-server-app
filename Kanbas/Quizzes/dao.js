
import model from "./model.js";


export const findAllQuizzes = () => model.find();

export const findQuizzesByCourse = (course) => model.find({ course: course });

export const createQuiz = (quiz) => {
  delete quiz._id
  return model.create(quiz);
}

export const updateQuiz = (mid, quiz) => model.updateOne({ _id: mid }, { $set: quiz });

export const deleteQuiz = (mid) => model.deleteOne({ _id: mid });
