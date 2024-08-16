import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: String,
  description: String,
  course: String,
  points: Number,
  due_date: Date,
  available_date: Date,
  available_until_date: Date,
  quiz_type: {
    type: String,
    enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"],
    default: "GRADED_QUIZ",
  } ,
  assignment_group: {
    type: String,
    enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS","PROJECT"],
    default: "QUIZZES",
  },
  shuffle_answers: {
    type: String,
    enum: ["False", "True"],
    default: "True",
  },
  time_limit: String,
  multiple_attempts: {
    type: String,
    enum: ["False", "True"],
    default: "False",
  },
  num_attempts: Number,
  show_correct: {
    type: String,
    enum: ["False", "True"],
    default: "False",
  },
  access_code: String,
  one_q_at_a_time: {
    type: String,
    enum: ["False", "True"],
    default: "False",
  },
  webcam_required: {
    type: String,
    enum: ["False", "True"],
    default: "False",
  },
  lock_q_after_answer: {
    type: String,
    enum: ["False", "True"],
    default: "False",
  },
  questions: [{
    _id: String,
    question: {
      type: String,
      required: true
    },
    answer: String,
    quiz: String // Optional, as each lesson already inherently belongs to a quiz.
  }]
},
  { collection: "quizzes" }
);
export default quizSchema;