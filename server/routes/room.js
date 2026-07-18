const express = require("express");
const NewObject = require("../models/room");
const app = express.Router();

app.get("/get", async (req, resp) => {
	const data = await NewObject.find();
	resp.json(data);
});

app.get("/get/:roomid", async (req, resp) => {
	try {
		console.log("Room Id : ",req.params.roomid);
		let obj = await NewObject.findOne({ "_id": req.params.roomid});
		console.log("Room : ", obj);
		if (obj===null) {
			console.log("Data Not Found");
			let res = {};
			console.log("Result : ", res);
            resp.send(res);
        }
		else{
			console.log("Data Found");
			console.log("Room : ", obj.toObject());
			resp.send(obj.toObject());
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.post("/add", async (req, resp) => {
	try {
		console.log("Body : ", req.body);
		const obj = new NewObject(req.body);
		let result = await obj.save();
		result = result.toObject();
		console.log("Result : ", result);
		if (result) {
			resp.send(req.body);
			console.log(result);
			console.log("Data Inserted Success");
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
module.exports = app;