const mongoose = require("mongoose");

const NewRoomSchema = new mongoose.Schema({
	rname: {
		type: String,
		required: true,
	},
	rtype: {
		type: String,
		required: true,
	},
	numofstudents: {
		type: String,
		required: true,
	},
	details: {
		type: String,
		required: true,
	}, price: { type: String, required: true },
	date: {
		type: Date,
		default: Date.now,
	},
});


module.exports = mongoose.model("newroom", NewRoomSchema);