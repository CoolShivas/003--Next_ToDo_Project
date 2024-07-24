import mongoose from "mongoose";

const mongDbConnect = async () => {
  try {
    await mongoose.connect(
      // "mongodb+srv://shivas2710cool00:nQssjRRPOMiWmEMi@cluster0.rjhyllp.mongodb.net/create-todos"
      process.env.MONGODB_URI
    );
    console.log("connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default mongDbConnect;
