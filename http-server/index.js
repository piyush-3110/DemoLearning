const express = require("express");
const port = 3000;
const app = express();
const bodyparser = require("body-parser");
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`I am sending you something on ${port}`);
});

app.post("/convo", (req, res) => {
  const message = req.query.msg;
  console.log(message);
  res.json({
    msg: "Hey there",
  });
});
app.listen(port, () => {
  console.log("Listening to port");
});
