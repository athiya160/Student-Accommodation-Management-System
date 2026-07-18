const express = require("express");
const router = express.Router();
const NewAdmin = require("../models/newadmin");

router.post("/add", async (req, resp) => {
	try {
		console.log("Body : ", req.body);
		const obj = new NewAdmin(req.body);
		let result = await obj.save();
		result = result.toObject();
		console.log("Result : ", result);
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
			console.log("Admin Inserted Success");
		} else {
			console.log("Sorry Admin Already Exists");
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

router.post("/checkadminlogin", async (req, resp) => {
	try {
		const { username, password } = req.body;
		console.log("Body : ", req.body);
		let obj = await NewAdmin.findOne({ username, password });
		console.log("Object : ", obj);
		if (obj === null) {
			console.log("Login Not Success");
			let res = {};
			console.log("Result : ", res);
			resp.send(res);
		} else {
			console.log("Login Success");
			console.log("Admin : ", obj.toObject());
			resp.send(obj.toObject());
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

module.exports = router;
