const mongoose = require('mongoose');

const NewAdminSchema = new mongoose.Schema({
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
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const NewAdmin = mongoose.model('newadmin', NewAdminSchema);
NewAdmin.createIndexes();
module.exports = NewAdmin;
