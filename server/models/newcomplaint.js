const mongoose = require("mongoose");

const NewComplaintSchema = new mongoose.Schema({
	userid: {
		type: String,
		required: true,
	},
	fname: {
		type: String,
		required: true,
	},
	lname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phnum: {
		type: String,
		required: true,
	},	
	date: {
		type: Date,
		default: Date.now,
	},
	complaint: {
		type: String,
		required: true,
	}
});


module.exports = mongoose.model("newcomplaint", NewComplaintSchema);