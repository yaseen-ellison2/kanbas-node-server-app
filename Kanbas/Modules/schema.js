import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
  name: String,
  description: String,
  course: String,
  lessons: [{
    id: String,
    name: String,
    description: String,
    module: String // Optional, as each lesson already inherently belongs to a module.
  }]
},
  { collection: "modules" }
);
export default moduleSchema;