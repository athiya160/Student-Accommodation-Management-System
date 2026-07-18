const mongoose = require("mongoose");

const messSchema = new mongoose.Schema(
  {
    mname: { type: String, required: true },
    mtype: { type: String, required: true },
    numofstudents: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("newmess", messSchema);