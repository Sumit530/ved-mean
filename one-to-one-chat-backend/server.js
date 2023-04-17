const express = require("express");
const app = express();

const cors = require("cors");
const http = require("http");

const server = http.Server(app);

const port = 3000;
app.use(cors());
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

global.users = new Map();

server.listen(port, () => {
  console.log("Server is listening at port 3000");
});

io.on("connection", (socket) => {
  socket.on("add-user", (data) => {
    users.set(data.username, socket.id);
    socket.join(data.username, socket.id);
    socket.broadcast.to(data.room).emit("user joined");
  });

  socket.on("join", (data) => {
    socket.join(data.room);
  });

  socket.on("message", (data) => {
    console.log(data)
    io.in(data.room).emit("new-message", {
      users: data.user,
      message: data.message,
    });
  });
}); 
