/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	'l': {
		name: 'Lise',
		color: '#5bcaff'
	},
	'r': {
		name: 'Rina',
		color: '#5bcaff',
		directory: "Rina",
        sprites: {
            angry: 'normal.png',
            happy: 'happy.png',
            normalTalk: "normalTalk.webp",
            normalTalk_done: "normalTalk_done.webp",
            surprised: 'surprised.png',
        },
        expressions: {
            angry: 'expressions/normal.png',
            happy: 'expressions/happy.png',
            normal: 'expressions/normal.png',
            sad: 'expressions/sad.png',
            surprised: 'expressions/surprised.png',
        },
	
	},
    'n': {
        name: 'Nariette',
        color: "#facade",
		directory: "Nariette",
		sprites: {
            angry: 'normal.png',
            happy: 'happy.png',
            normalTalk: "normalTalk.webp",
            normalTalk_done: "normalTalk_done.webp",
            surprised: 'surprised.png',
        },

    },
    'm': {
        name: 'Marlina',
        color: "#facade",
		directory: "Marlina",
		sprites: {
            angry: 'normal.png',
            happy: 'happy.png',
            normalTalk: "normalTalk.webp",
            normalTalk_done: "normalTalk_done.webp",
            surprised: 'surprised.png',
        },

    },
});



