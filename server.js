const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const indexRouter = require("./routes/indexRouter");
const aboutRouter = require("./routes/aboutRouter");
const timerRouter = require("./routes/timerRouter");
const breakactivitiesRouter = require("./controllers/activitiesController");
const usersRouter = require("./controllers/usersController");


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Display connection details
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

// Require static assets from public folder
app.use(express.static(path.join(__dirname, "static")));

// Set 'views' directory for any views
// being rendered res.render()
app.set("views", path.join(__dirname, "views"));

// Set view engine as EJS
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/home", indexRouter);
app.use("/about", aboutRouter);
app.use("/timer", timerRouter);
app.use("/breakactivities", breakactivitiesRouter);
app.use("/users", usersRouter);

app.listen(3000, () => console.log("Server started on port 3000"));
