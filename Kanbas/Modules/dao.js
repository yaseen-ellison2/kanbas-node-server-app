

import model from "./model.js";


export const findAllModules = () => model.find();

export const findModulesByCourse = (course) => model.find({course: course});

export const createModule = (module) => {
  delete module._id
  return model.create(module);
}

export const updateModule = (mid, module) => model.updateOne({ _id: mid }, { $set: module });

export const deleteModule = (mid) => model.deleteOne({ _id: mid });
