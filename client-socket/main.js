const socket = io("http://localhost:5000");

const msg = Math.floor(Math.random()*100);
let id;

function main() {
  socket.on("connect", () => {
    id = socket.id;
    socket.emit("send-message", {
      id,
      msg,
    });
    socket.on("receive-message", ({ id, msg }) => {
      console.log(`👉 ${id} says his fav number is ${msg}`);
    });
  });
}

main();
