const express = require("express");
const NewObject = require("../models/newroomallocate");
const NewUser = require("../models/newuser");
const app = express.Router();

app.get("/get/:userid", async (req, resp) => {
	let userid = req.params.userid
	console.log("User Id : ", req.params.userid);
	let obj = await NewObject.findOne({ "userid": req.params.userid});
		console.log("User : ", obj);
		if (obj===null) {
			console.log("Data Not Found");
			let res = {};
			console.log("Result : ", res);
            resp.send(res);
        }
		else{
			console.log("Data Found");
			console.log("User Room Data : ", obj.toObject());
			resp.send(obj.toObject());
		}
});

app.get("/get", async (req, resp) => {
	const data = await NewObject.find();
	resp.json(data);
});

app.post("/add", async (req, resp) => {
	try {
		console.log("Body : ", req.body);
		const obj = new NewObject(req.body);
		let result = await obj.save();
		result = result.toObject();
		console.log("Result : ", result);
		if (result) {
			console.log("Data Inserted Success");			
			const newuser = new NewUser({
				'roomallocated': "Yes",				
				'_id': req.body.userid,
			});
			NewUser.updateOne({ _id: req.body.userid }, newuser).then(
				() => {
					console.log("Room updated successfully!")					
				});
		}
		resp.send(req.body);
		console.log(result);
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
module.exports = app;