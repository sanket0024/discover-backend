module.exports = () => {
	const mongoose = require("mongoose");
	var uri = "";
	mongoose.connect(uri, {
		useNewUrlParser: true, useFindAndModify: false
	});
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "MongoDB connection error:"));
}