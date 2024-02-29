import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  enabled: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Category", categorySchema);
