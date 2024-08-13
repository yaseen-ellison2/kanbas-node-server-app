

import model from "./model.js";


export const createCourse = (course) => {
  delete course._id
  return model.create(course);
}  

export const findAllCourses = () => model.find();

export const updateCourse = (cid, course) => model.updateOne({_id: cid}, {$set: course});

export const deleteCourse = (cid) => model.deleteOne({_id: cid });
