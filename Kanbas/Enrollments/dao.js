
import model from "./model.js";


export const findAllEnrollments = () => model.find();

export const findEnrollmentByUser = (user) => model.find({ user: user });

export const createEnrollment = (enrollment) => {
  delete enrollment._id
  return model.create(enrollment);
}

export const updateEnrollment = (eid, enrollment) => model.updateOne({ _id: eid }, { $set: enrollment });

export const deleteEnrollment = (eid) => model.deleteOne({ _id: eid });
