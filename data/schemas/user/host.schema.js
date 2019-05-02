const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const eventSchema = require("../event/event.schema");

const host = new Schema({
	hostedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: eventSchema, default: [] }],
});

module.exports = host;
