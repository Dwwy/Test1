const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { hasUncaughtExceptionCaptureCallback } = require("process");

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// app.use(log.LogResponse);
app.get("/down", (req, res) => {
  process.exit(1);
  res.send(test);
});
app.get("*", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.NODE_ENV === "production" ? 4007 : 4006;
app.listen(4006, () => {
  console.log(`Server is running on port ${PORT}`);
});
