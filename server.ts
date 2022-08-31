import app from "./src/app";
import http from "http";
require("dotenv").config();

const PORT = process.env.PORT || 8001;
const server = http.createServer(app);

server.listen(PORT, () => console.log(`server listen with localhost:${process.env.PORT}`));
