monogatari.script ({
	// The game starts here.
	'newGameD': [
		'show character n normalTalk_done at left with fadeIn',
		'show character m normalTalk at center with fadeIn',
		'show character r normalTalk_done at right with fadeIn',
		'm Thats awesome!',
		'show character n normalTalk at left',
		'n Then you are ready to go ahead and create an amazing Game!',
		'show character r normalTalk at right',
		'r I can’t wait to see what story you’ll tell! pero un dia sin mas todo en fin la gente de silvania que silva y baila puesto que no se sabe lo que un nosesaurio conoce la conocida de mi tia baila sin su silla baila y baila y hasta el pozo llegaba o que triste llora la silla de la vida',
		'show character n normalTalk at left',
		'n I can’t wait to see what story you’ll tell!',
		'show character r normalTalk at right',
		'r I can’t wait to see what story you’ll tell!',
		'show character n normalTalk at left',
		'n I can’t wait to see what story you’ll tell!',
		'show character r normalTalk at right',
		'r I can’t wait to see what story you’ll tell!',
		'show character n normalTalk at left',
		'n I can’t wait to see what story you’ll tell!',
		'show character r normalTalk at right',
		'r I can’t wait to see what story you’ll tell!',
		'hide character n with fadeOut ',
		'hide character r with fadeOut ',
		'show scene #000000 with fadeIn',
		'centered ....',
		'centered Lluvia....',
		'centered Truenos...',
		'centered Hay pasos fuera de la casa',
		'centered Golpean la puerta',
		'centered Se oyen gritos fuera, pero el golpe de las olas me impide distinguir lo que dicen',
		'centered Los golpes se hacen mas fuertes',
		'centered Mas fuertes',
		'centered Mas fuertes',
		'centered Mas.....',
		'centered ...',
		'centered .......',
		'centered ...... La puerta cede.....',
		{
			'Choice': {
				'Dialog': 'y Have you already read some documentation?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'm:default Thats awesome!',
		'r Then you are ready to go ahead and create an amazing Game!',
		'r I can’t wait to see what story you’ll tell!',
		'r I can’t wait to see what story you’ll tell!',
		'r I can’t wait to see what story you’ll tell!',
		'r I can’t wait to see what story you’ll tell!',
		'r I can’t wait to see what story you’ll tell!',
		'r I can’t wait to see what story you’ll tell!',
		'r I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'y You can do it now.',

		'show message Help',

		'l Hola soy la prota del juego',
		'l I can’t wait to see what story you’ll tell!',
		'end'
	]
});



/*
		'show character r normal at center',
		monogatari.on ('didFinishTyping', () => {
			// Something here
		  }),
		'r Thats awesome!',
				`${mySpecialString}`,
		'r Then you are ready to go ahead and create an amazing Game!',
		'r I can’t wait to see what story you’ll tell!',
		'r I can’t wait to see what story you’ll tell!',
		'r I can’t wait to see what story you’ll tell!',
		'r I can’t wait to see what story you’ll tell!',
*/
