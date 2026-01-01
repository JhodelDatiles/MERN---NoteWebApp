import mongoose from "mongoose";

export const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB IS CONNECTED SUCCESSFULLY!");
  } catch (error){
    console.error("error connecting to mongodb!", error);
    process.exit(1); // 1 mean failure 0 mean succes
  }
}