const express = require("express");
const colors = require("colors");
const dbConnect = require("./db.js");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const path = require("path")

dbConnect();
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.use(express.json());


// Main routes
app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/notification", notificationRoutes);


// -----------------------------------------------------------------------------


// First route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello from apex Chat App server",
    });
});

// -----------------------------------------------------------------------------


const server = app.listen(PORT, () => {
    console.log(
        colors.brightMagenta(`\nServer is aed ru UP and running on PORT ${process.env.SERVER_PORT}`)
    );
    console.log(`Visit  ` + colors.underline.blue(`localhost:${PORT}`));
});
