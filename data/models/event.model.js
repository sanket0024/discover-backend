const mongoose = require("mongoose");
const eventSchema = require("../schemas/event/event.schema");

module.exports = mongoose.model("events", eventSchema);
