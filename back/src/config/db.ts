import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://admin:admin01@localhost:27017"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectionDB;
