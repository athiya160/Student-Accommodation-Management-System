const express = require("express");
const NewObject = require("../models/newstaff");
const app = express.Router();

app.get("/get", async (req, resp) => {
	const data = await NewObject.find();
	resp.json(data);
});

app.get("/get/:staffid", async (req, resp) => {
	try {
		console.log("Staff Id : ",req.params.staffid);
		let obj = await NewObject.findOne({ "_id": req.params.staffid});
		console.log("User : ", obj);
		if (obj===null) {
			console.log("Data Not Found");
			let res = {};
			console.log("Result : ", res);
            resp.send(res);
        }
		else{
			console.log("Data Found");
			console.log("User : ", obj.toObject());
			resp.send(obj.toObject());
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.post("/add", async (req, resp) => {
	try {
		console.log("Staff Body : ", req.body);
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

app.post("/checkstafflogin", async (req, resp) => {
	try {
		const { username, password } = req.body;
		console.log("Body : ", req.body);
		let user = await NewObject.findOne({ username, password });
		console.log("User : ", user);
		if (user === null) {
			console.log("Login Not Success");
			let res = {};
			console.log("Result : ", res);
			resp.send(res);
		}
		else {
			console.log("Login Success");
			console.log("User : ", user.toObject());
			resp.send(user.toObject());
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

module.exports = app;