const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://piyush3110:piyush123@cluster1.mixoqps.mongodb.net/user1"
);

const User = mongoose.model("Users", {
  name: String,
  username: String,
  password: String,
});

const user = new User({
  name: "Piyush Das",
  username: "pjahfj2@gmail.com",
  password: "andfna",
});

user.save().then(() => {
  console.log("sucessfully saved");
});
