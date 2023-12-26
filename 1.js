const express = require("express");
const app = express();
const zod = require("zod");

const schema = zod.string();
app.use(express.json());
function mid1(req, res, next) {
  const username = req.headers.username;
  if (username != "Piyush") {
    res.send("You are not the right user ");
  } else {
    next();
  }
}
app.post("/health-checkup", mid1, (req, res) => {
  const response = schema.safeParse(req.body.kidneys);
  if (!response.success) {
    res.send("You are giving something invalid input");
  } else {
    res.send("You are right");
  }
});
app.listen(3000);
