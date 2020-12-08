import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const app = express();
const PORT = 4000;

const handleGet = (req, res) => {
  res.render("home");
};

const handleListening = () => {
  console.log(`Server is running`);
};

app.set("view engine", "pug");
app.set("views", join(__dirname + "/views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", handleGet);

const server = app.listen(PORT, handleListening);

const io = socketIO(server);

io.on("connection", (socket) => {
  socket.on("helloGuys",() => console.log(`the client said hello`));
});
