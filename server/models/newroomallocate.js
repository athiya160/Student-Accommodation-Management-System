const mongoose = require("mongoose");

const NewRoomAllocateSchema = new mongoose.Schema({
	rname: {
		type: String,
		required: true,
	},
	rtype: {
		type: String,
		required: true,
	},
  price: {
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
	userid: {
		type: String,
		required: true,
	},
	roomid: {
		type: String,
		required: true,
	},
	details: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},},
  {
    timestamps: true,
  });

module.exports = mongoose.model("newroomallocate", NewRoomAllocateSchema);
