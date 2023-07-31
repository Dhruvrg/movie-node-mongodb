import mongoose from "mongoose";
let isConnected = false;
const MONGODB_URI =
  "mongodb+srv://twitter108drg:twitter108drg@cluster0.cu8egm9.mongodb.net/?retryWrites=true&w=majority";

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "mydb",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
