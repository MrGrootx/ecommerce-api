import mongoose from "mongoose";
import CFG from "../config/config";

const connectDb = () => {
  mongoose
    .connect(CFG.Server?.database as string)
    .then((a) => {
      console.log("Connected to MongoDB");
    })
    .catch((e) => {
      console.error(e);
    });
};

export default connectDb;
