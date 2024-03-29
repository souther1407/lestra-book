import { io } from "socket.io-client";

export class Socket {
  constructor() {
    this.socket = null;
    this.id = "";
  }
  connect(
    name,
    onMsg,
    onSomeoneIsWriting,
    onSomeoneIsStopWriting,
    onConnected,
    onDisconnected
  ) {
    console.log(import.meta.env.VITE_URL_CHAT);
    this.socket = io(import.meta.env.VITE_URL_CHAT + "?name=" + name);
    this.socket.on("msg", onMsg);
    this.socket.on("start-writing", onSomeoneIsWriting);
    this.socket.on("end-writing", onSomeoneIsStopWriting);
    this.socket.on("connected", onConnected);
    this.socket.on("disconnected", onDisconnected);
    this.socket.on("connect", () => {
      this.id = this.socket.id;
    });
  }

  sendMsg(msg) {
    this.socket.emit("msg", msg);
  }

  startWriting() {
    this.socket.emit("start-writing");
  }
  stopWriting() {
    this.socket.emit("end-writing");
  }

  disconnect() {
    this.socket.disconnect();
    this.socket = null;
  }
}
