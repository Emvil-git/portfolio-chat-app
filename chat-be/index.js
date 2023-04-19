const http = require("http");
const express = require("express");
const session = require("express-session");
const socket = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");

// const MongoStore = require("connect-mongo")(session);

const app = express();

app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@batch230.cqzdm3c.mongodb.net/port-chat?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

mongoose.connection.once("open", () => console.log("Now connected to Villanueva-Mongo DB Atlas"));

app.listen(process.env.PORT || 4000, () => 
	{ console.log(`API is now online on port ${process.env.PORT || 4000} `)
});

