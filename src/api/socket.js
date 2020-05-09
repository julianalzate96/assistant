import openSocket from "socket.io-client";

const socket = openSocket("http://192.168.1.18:1337");

export function newAnswer(cb) {
  socket.on("newAnswer", res => cb(res));
}