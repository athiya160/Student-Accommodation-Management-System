const mongoose = require("mongoose");

const NewMessAllocateSchema = new mongoose.Schema({
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
  messid: {
    type: String,
    required: true,
  },
  mname: {
    type: String,
    required: true,
  },
  mtype: {
    type: String,
    required: true,
  },
  price: {
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
  },
},
  {
    timestamps: true,
  });

module.exports = mongoose.model("newmessallocate", NewMessAllocateSchema);
