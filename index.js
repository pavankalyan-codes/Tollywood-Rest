const express = require("express");
const bodyParse = require("body-parser");

const cors = require("cors");

const PORT = process.env.PORT || 8080;
const api = require("./routes/api");

const app = express();
var server = require("http").createServer(app);

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use(bodyParse.json());

app.use("/api", api);
app.get("/", function (req, res) {
  res.send("Hello from server");
});

server.listen(PORT, function () {
  console.log("Server is Up and running");
});
