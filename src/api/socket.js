import openSocket from 'socket.io-client';

const socket = openSocket('http://192.168.1.2:1337');

export function newAnswer(cb) {
  socket.on('newAnswer', res => cb(res));
}

export function newQuestion(cb) {
  socket.on('newQuestion', res => cb(res));
}

export function newDocument(cb) {
  socket.on('newDocument', res => cb(res));
}

export function newMessage(carrera, cb) {
  socket.on(`newMessage${carrera}`, res => cb(res));
}
