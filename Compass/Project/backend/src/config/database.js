/** @format */

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseConnection = () => {
  mongoose
    .connect(process.env.USERS_MONGO_URI)
    .then(() => {
      console.log("mongodb connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default databaseConnection;