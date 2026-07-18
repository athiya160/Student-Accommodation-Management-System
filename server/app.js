// Code for mongoose config in backend
// Filename - backend/index.js

// To connect with your mongoDB database
const mongoose = require('mongoose');
/*
mongoose.connect('mongodb://localhost:27017/', {
	dbName: 'yourDB-name',
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => err ? console.log(err) : 
	console.log('Connected to yourDB-name database'));
*/

const connectToMongo = async () => {
	await mongoose.connect('mongodb://localhost:27017/HostelDB');
	console.log("Connected to MongoDB");
};

connectToMongo();
/*
const NewUserSchema = new mongoose.Schema({
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
	fathername: {
		type: String,
		required: true,
	},
	mothername: {
		type: String,
		required: true,
	},
	parentphnum: {
		type: String,
		required: true,
	},
	parentaddress: {
		type: String,
		required: true,
	},
	roomallocated: {
		type: String,
		required: true,
	},
	messallocated: {
		type: String,
		required: true,
	},
});

const NewStaffSchema = new mongoose.Schema({
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

const NewRoomAllocateSchema = new mongoose.Schema({
	rname: {
		type: String,
		required: true,
	},
	rtype: {
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
	},
});
*/

//const NewUser = mongoose.model('newuser', NewUserSchema);
//NewUser.createIndexes();
//const NewStaff = mongoose.model('newstaff', NewStaffSchema);
//NewStaff.createIndexes();
//const NewRoom = mongoose.model('newroom', NewRoomSchema);
//NewRoom.createIndexes();
//const NewRoomAllocate = mongoose.model('newroomallocate', NewRoomAllocateSchema);
//NewRoomAllocate.createIndexes();
//const NewMessAllocate = mongoose.model('newmessallocate', NewMessAllocateSchema);
//NewMessAllocate.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", async (req, resp) => {
	resp.send("App is Working");
	// You can check backend is working or not by 
	// entering http://loacalhost:5000

	// If you see App is working means
	// backend working properly
});
/*
app.post("/addnewroom", async (req, resp) => {
	try {
		console.log("Body : ", req.body);
		const newobj = new NewRoom(req.body);
		let result = await newobj.save();
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

app.post("/addnewuser", async (req, resp) => {
	try {
		console.log("Body : ", req.body);
		const newuser = new NewUser(req.body);
		let result = await newuser.save();
		result = result.toObject();
		console.log("Result : ", result);
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
			console.log("Data Inserted Success");
		} else {
			console.log("Sorry User Already Exists");
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.post("/adminallocateroom", async (req, resp) => {
	try {
		console.log("Body : ", req.body);
		const obj = new NewRoomAllocate(req.body);
		let result = await obj.save();
		result = result.toObject();
		console.log("Result : ", result);
		if (result) {
			resp.send(req.body);
			console.log(result);
			console.log("Data Inserted Success");

			const newuser = new NewUser({
				'roomallocated': "Yes",				
				'_id': req.params.userid,
			});
			NewUser.updateOne({ _id: req.params.id }, newuser).then(
				() => {
					console.log("Room updated successfully!")
					resp.status(201).json({
						message: 'Room updated successfully!'
					});
				});
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.post("/addnewstaff", async (req, resp) => {
	try {
		console.log("Body : ", req.body);
		const obj = new NewStaff(req.body);
		let result = await obj.save();
		result = result.toObject();
		console.log("Result : ", result);
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
			console.log("Data Inserted Success");
		} else {
			console.log("Sorry User Already Exists");
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.post("/checkuserlogin", async (req, resp) => {
	try {
		const { username, password } = req.body;
		console.log("Body : ", req.body);
		let user = await NewUser.findOne({ username, password });
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

app.post("/checkstafflogin", async (req, resp) => {
	try {
		const { username, password } = req.body;
		console.log("Body : ", req.body);
		let obj = await NewStaff.findOne({ username, password });
		console.log("Object : ", obj);
		if (obj === null) {
			console.log("Login Not Success");
			let res = {};
			console.log("Result : ", res);
			resp.send(res);
		}
		else {
			console.log("Login Success");
			console.log("Staff : ", obj.toObject());
			resp.send(obj.toObject());
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.get("/staffviewprofile/:staffid", async (req, resp) => {
	try {
		console.log("Staff Id : ", req.params.staffid);
		let obj = await NewStaff.findOne({ "_id": req.params.staffid });
		console.log("Staff : ", obj);
		if (obj === null) {
			console.log("Data Not Found");
			let res = {};
			console.log("Result : ", res);
			resp.send(res);
		}
		else {
			console.log("Data Found");
			console.log("Staff : ", obj.toObject());
			resp.send(obj.toObject());
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.get("/userviewprofile/:userid", async (req, resp) => {
	try {
		console.log("User Id : ", req.params.userid);
		let user = await NewUser.findOne({ "_id": req.params.userid });
		console.log("User : ", user);
		if (user === null) {
			console.log("Data Not Found");
			let res = {};
			console.log("Result : ", res);
			resp.send(res);
		}
		else {
			console.log("Data Found");
			console.log("User : ", user.toObject());
			resp.send(user.toObject());
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.get("/getstaffs", async (req, resp) => {
	const data = await NewStaff.find();
	console.log("Staffs : ", data)
	resp.json(data);
});
app.get("/getusers", async (req, resp) => {
	const data = await NewUser.find();
	resp.json(data);
});
app.get("/getrooms", async (req, resp) => {
	const data = await NewRoom.find();
	resp.json(data);
});

app.get("/admingetallocaterooms", async (req, resp) => {
	const data = await NewRoomAllocate.find();
	resp.json(data);
});

app.get("/usergetallocaterooms/:userid", async (req, resp) => {
	try {
		let userid = req.params.userid
		console.log("User Id : ", req.params.userid);
		const obj = await NewRoomAllocate.find();
		console.log("Room : ", obj);
		data = []
		obj.forEach(element => {
			//console.log(element)
			if (element['userid'] === userid)
				data.push(element)
		});
		resp.json(data);
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.get("/getroomdetails/:roomid", async (req, resp) => {
	try {
		console.log("Room Id : ", req.params.roomid);
		let obj = await NewRoom.findOne({ "_id": req.params.roomid });
		console.log("Room : ", obj);
		if (obj === null) {
			console.log("Data Not Found");
			let res = {};
			console.log("Result : ", res);
			resp.send(res);
		}
		else {
			console.log("Data Found");
			console.log("Room : ", obj.toObject());
			resp.send(obj.toObject());
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
*/
// Importing routes
const mess = require("./routes/mess");
const newmessallocate = require('./routes/newmessallocate');
const newroomallocate = require('./routes/newroomallocate');
const contact = require('./routes/contact');
const user = require('./routes/newuser');
const room = require('./routes/room');
const staff = require('./routes/newstaff');
const complaint = require('./routes/newcomplaint');

// Using routes
app.use("/api/mess", mess);
app.use("/api/newmessallocate", newmessallocate);
app.use("/api/newroomallocate", newroomallocate);
app.use("/api/contact", contact);
app.use("/api/user", user);
app.use("/api/room", room);
app.use("/api/staff", staff);
app.use("/api/complaint", complaint);

app.listen(5000);