var SimplePeer = require('simple-peer');
// https://github.com/feross/simple-peer#api



var msg = function(txt) {
	var line = document.createElement('p');
	line.appendChild( document.createTextNode(txt) );
	lines.appendChild(line);
	lines.scrollTop = lines.scrollHeight;
};
window.msg = msg;



var hms = function() {
	var d = new Date();
	return d.toISOString().substring(11, 19);
};
window.hms = hms;



window.initiator = function() {
	var peer = new SimplePeer({
		initiator:   true,
		channelName: 'cenas',
		trickle:     false
	});

	peer.on('signal', function(data) {
		console.log('signal to send:\n\n', JSON.stringify(data));
	});

	peer.on('connect', function() {
		msg('CONNECTED');
	});

	peer.on('data', function(data) {
		msg(hms() + ' < ' + data);
	});

	return peer;
};



window.otherGuy = function(signal) {
	var peer = new SimplePeer({
		initiator:   false,
		channelName: 'cenas',
		trickle:     false
	});

	peer.signal(signal);

	peer.on('signal', function(data) {
		console.log('signal to send:\n\n', JSON.stringify(data));
	});

	peer.on('connect', function() {
		msg('CONNECTED');
	});

	peer.on('data', function(data) {
		msg(hms() + ' < ' + data);
	});

	return peer;
};
