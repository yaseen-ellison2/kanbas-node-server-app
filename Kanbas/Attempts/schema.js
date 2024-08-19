import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema({
  taker: String,
  quiz: String, // id of quiz
  attempt_number: {
    type: Number,
    default: 0
  },
  submittedDate: String,
  answers: [
    {
      qqid: String, // question id
      question: String, // question words
      answer: mongoose.Schema.Types.Mixed  // student's answer
    }
    
  ],
  score: {
    type: Number,
    default: 0
  }
},
  { collection: "attempts" });

// Add compound unique index
attemptSchema.index({ taker: 1, quiz: 1 }, { unique: true });

export default attemptSchema;
