const express = require("express");
const app = express();

function isOld(req, res, next) {
  if (req.query.age >= 14) {
    next();
  } else {
    res.json({
      msg: "Your age is not suitable to ride",
    });
  }
}
app.get("/ride1", (req, res) => {
  if (isOld(req.query.age)) {
    res.send({
      msg: "YOu can take a ride",
    });
  } else {
    res.send({
      msg: "YOu cant take a ride",
    });
  }
});
app.listen(3000);
