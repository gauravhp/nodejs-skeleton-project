var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");

// Import custom middleware
var customLogger = require("./middleware/logger");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// Use morgan for development logging
app.use(morgan("dev"));

// Use our custom logger middleware
app.use(customLogger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
