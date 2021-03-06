web-hanabi
==========

Web based version of the card game Hanabi

Development
-----------

To run `web-hanabi` you need have `Node.js` installed.
Once installed, go to the `web-hanabi` directory and type

	node server.js

on the command line to start the `web-hanabi` server.
If all goes well, a message will be printed stating that
a server was successfully started on port 3000.  You can then
access `localhost:3000` from your web browser.

Files listed under the `public/` directory are served
statically.
  * `websockets_test.html`:
	 Navigate to `localhost:3000/tests/websockets_test.html`
	 to test the websockets code.  If you navigate
	 to that page from several different browser windows
	 and click the 'Send Random Message' button,
	 a message should be sent between all instances of
	 browsers at that page!

	 If you want to see syncronization between different
	 computers, navigate a browser on another computer
	 to `<your IP>:3000/tests/websockets_test.html`

How to play
-----------

The rules of the game can be found in the PDF called [The Rules.pdf](/The Rules.pdf) - [link here](https://www.villagehome.org/blog/attachment/index.php/4923/1/regle_en_hanabi.pdf)

Be sure to understand the rules before continuing!

Once you have confirmed installation of Node and confirmed your server is working, Navigate to `localhost:3000/tests/lobby.html` and instruct the other players to go to `<your IP>:3000/tests/lobby.html`once you have the required number of players click on `I'm Ready!` to begin the game.
