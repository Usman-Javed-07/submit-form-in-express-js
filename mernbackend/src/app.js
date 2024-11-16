const express = require("express");
const connectDB = require("./db/connectionDB");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.send("welcome to my home page......");
});

app.listen(port, () => {
  console.log(`server is listing on port ${port}`);
  console.log("server running ......");
});
