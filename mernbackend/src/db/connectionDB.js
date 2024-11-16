const mongoose = require("mongoose");
const connectDB = (url) => {
  return mongoose
    .connect(url, {})
    .then(() => {
      console.log("connecting successfully to mongoDB");
    })
    .catch((e) => {
      console.log("facing error while connecting to mongoDB");
    });
};
module.exports = connectDB;
