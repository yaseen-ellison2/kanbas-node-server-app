import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: String,
  description: String,
  course: String,
  points: Number,
  due_date: Date,
  available_date: Date,
  available_until_date: Date,
  num_questions: Number,
  published: {
    type: String,
    enum: ["False", "True"],
    default: "False",
  },
  quiz_type: {
    type: String,
    enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"],
    default: "GRADED_QUIZ",
  },
  assignment_group: {
    type: String,
    enum: ["QUIZ", "EXAM", "ASSIGNMENT", "PROJECT"],
    default: "QUIZ",
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
    // _id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   default: null,
    // },
    question: {
      type: String,
      required: true
    },
    answer: [{
      type: String,
    }],
    quiz: String, // This corresponds to the quiz ID
    points: {
      type: Number,
      default: 0,
    },
    type: {
      type: String, // Represents the dropdown value (e.g., "multiple_choice")
      enum: ["multiple_choice", "true_false", "fill_in_the_blanks"],
      default: "multiple_choice",
    },
    options: [{
      type: String,
    }],
  }]
}, 
  { collection: "quizzes" }
);

export default quizSchema;
