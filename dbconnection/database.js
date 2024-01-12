import mongoose from "mongoose";

let isConnected = false;

export default async function connectToDatabase() {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("database is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}
