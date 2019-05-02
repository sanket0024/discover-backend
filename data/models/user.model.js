const mongoose = require("mongoose");
const userSchema = require("../schemas/user/user.schema");

module.exports = mongoose.model("users", userSchema);
