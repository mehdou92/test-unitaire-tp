const axios = require('axios');

function getRooms() {
    return axios.get('http://localhost:3000/room');
}

function getRoom(roomId) {
    return axios.get(`http://localhost:3000/room/${roomId}`);
}

function createRoom(formData){
    return axios.post('http://localhost:3000/room', formData);
}

function updateRoom(roomId, formData){
    return axios.put(`http://localhost:3000/room/${roomId}`, formData);
}

function deleteRoom(roomId) {
    return axios.delete(`http://localhost:3000/room/${roomId}`);
}

function getFormateur(){
    return axios.post('http://localhost:3000/formateur');
}

function deleteFormateur(formateurId){
    return axios.delete(`http://localhost:3000/formateur/${formateurId}`);
}

function createFormateur(formData){
    return axios.post('http://localhost:3000/formateur', formData);
}

function getSession(){
    return axios.get('http://localhost:3000/session');
}

function deleteSession(sessionId){
    return axios.delete(`http://localhost:3000/${sessionId}`);
}

module.exports = { getRoom, getRooms, createRoom, deleteRoom, createFormateur, updateRoom };