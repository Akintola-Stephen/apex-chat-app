const express = require("express");
const colors = require("colors");
const dbConnect = require("./db.js");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

dbConnect();
const app = express();
app.use(express.json());

// Main routes
app.use("/api/users", userRoutes);

// -----------------------------------------------------------------------------


// First route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello from apex Chat App server",
    });
});

// -----------------------------------------------------------------------------


const server = app.listen(process.env.PORT || 5000, () => {
    console.log(
        colors.brightMagenta(`\nServer is UP on PORT ${process.env.SERVER_PORT}`)
    );
    console.log(`Visit  ` + colors.underline.blue(`localhost:${5000}`));
});
