module.exports = () => {
	const mongoose = require("mongoose");
	var uri = "mongodb://discover:discover1@ds151076.mlab.com:51076/discover";
	mongoose.connect(uri, {
		useNewUrlParser: true,
		useFindAndModify: false
	});
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "MongoDB connection error:"));
}
