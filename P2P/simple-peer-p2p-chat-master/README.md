A simple real-world example of simple-peer for webrtc data exchange.  
Notice you must exchange signals via other transport.  
They'll be printed on the console log.

How to set it up:

	[sudo] npm install
	[sudo] npm install -g beefy
	beefy main.js

visit: <http://127.0.0.1:9966/1.html> for the initiator. press the **have signal** button to paste the other guy's signal and start communicating
and  
visit: <http://127.0.0.1:9966/2.html> for the other guy, once you have the initiator's signal in the clipboard
