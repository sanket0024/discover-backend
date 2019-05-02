const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = require("../schemas/user.schema");
const eventSchema = require("../event/event.schema");

const explorer = new Schema({
	purchasedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: eventSchema, default: [] }],
	likedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: eventSchema, default: [] }],
	followers: [{ type: mongoose.Schema.Types.ObjectId, ref: userSchema, default: [] }],
	following: [{ type: mongoose.Schema.Types.ObjectId, ref: userSchema, default: [] }]
});

module.exports = explorer;