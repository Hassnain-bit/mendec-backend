import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  university_name: {
    type: String,
  },
  phone_no: {
    type: Number,
  },
});
export default mongoose.model("User", userSchema);
