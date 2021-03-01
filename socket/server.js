const io = require("socket.io")(5000, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  const id = socket.handshake.issued;
  console.log("server-handshake", id);

  socket.on("send-message", ({ id, msg }) => {
    console.log("server-send", id);
    socket.broadcast.emit("receive-message", { id, msg });
  });
});
