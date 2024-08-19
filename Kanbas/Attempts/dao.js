import model from "./model.js";

export const findAllAttempts = () => model.find();

export const findAttemptByUser = (taker) => model.find({ taker: taker });

export const createOrUpdateAttempt = async (attempt) => {
  const existingAttempt = await model.findOne({ taker: attempt.taker, quiz: attempt.quiz });

  if (existingAttempt) {
    return model.updateOne(
      { _id: existingAttempt._id },
      {
        $set: {
          answers: attempt.answers,
          submittedDate: attempt.submittedDate,
          score: attempt.score,
        },
        $inc: { attempt_number: 1 }
      }
    );
  } else {
    delete attempt._id;
    attempt.attempt_number = 1;
    return model.create(attempt);
  }
};

export const updateAttempt = (atid, attempt) => model.updateOne({ _id: atid }, { $set: attempt });

export const deleteAttempt = (atid) => model.deleteOne({ _id: atid });
