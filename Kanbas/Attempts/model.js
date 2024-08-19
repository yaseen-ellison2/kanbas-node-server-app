import mongoose from "mongoose";
import attemptSchema from "./schema.js";
const attemptModel = mongoose.model("AttemptModel", attemptSchema);
export default attemptModel;

