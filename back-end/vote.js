const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
	host: "localhost",
	user: "hokutofes_mako",
	password: "ZUq8UDoMp6",
	database: "hokutofes_vote",
	port: 10022,
});

connection.connect((err) => {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("success");
});

app.get("/", (req, res) => {
	connection.query("SELECT * FROM users", (error, results) => {
		console.log(results);
		res.render("hello.ejs");
	});
});

app.listen(3000);
