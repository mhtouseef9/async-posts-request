const express = require("express");

const app = express();

// const config = require("./config/config");

// to import .env
require('dotenv').config();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//importing all routes here
const posts = require("./routes/post.routes");

// app.use("/", express.Router().get("/", () => "Welcome"));
app.use("/api/posts", posts);

app.listen(process.env.PORT || 3000, () => console.log('Server started on Port ' + process.env.PORT));

// importing all config
// config;
