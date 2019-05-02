const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const hostSchema = require("../user/host.schema");

const event = new Schema({
	originalId: Number,
	name: String,
	price: String,
	image_url: String,
	totalLikes: Number,
	hosted: Boolean,
	host: hostSchema,
}, { collection: "event" });

module.exports = event;