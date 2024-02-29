import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    // Encerrar o processo com falha
    process.exit(1);
  }
}

export default connectDB;
