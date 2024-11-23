let socket = new WebSocket("wss://our-server-gouki-b0b00dec60cf.herokuapp.com:443");


//Page1
document.getElementById("click-left-1").onclick = function () {
	socket.send(JSON.stringify({ "happy": 1 }));

};
document.getElementById("click-right-1").onclick = function () {
	socket.send(JSON.stringify({ "sad": 1 }));

};

//Page2
document.getElementById("click-left-2").onclick = function () {
	socket.send(JSON.stringify({ "caution": 1 }));

};
document.getElementById("click-left-2").onclick = function () {
	socket.send(JSON.stringify({ "angry": 1 }));

};

//Page3
document.getElementById("click-left-3").onclick = function () {
	socket.send(JSON.stringify({ "confidence": 1 }));

};
document.getElementById("click-right-3").onclick = function () {
	socket.send(JSON.stringify({ "fear": 1 }));

};

//Page4
document.getElementById("click-left-4").onclick = function () {
	socket.send(JSON.stringify({ "surprise": 1 }));

};
document.getElementById("click-right-4").onclick = function () {
	socket.send(JSON.stringify({ "disgust": 1 }));

};
