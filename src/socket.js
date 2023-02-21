import { io } from "socket.io-client";
const server_url = "http://localhost:4000/";
const socket = io(server_url, {
  transports: ["websocket"],
});
export default socket;
