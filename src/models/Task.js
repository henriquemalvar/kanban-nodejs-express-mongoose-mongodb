import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  categories_ids: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  enabled: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Task", taskSchema);
