const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const explorer = require("./explorer.schema");
const host = require("./host.schema");

const user = new Schema({
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	role: String,
	email: String,
	phone: String,
	dob: String,
	imageUrl: String,
	explorer: explorer,
	host: host
}, { collection: "user" });

module.exports = user;
