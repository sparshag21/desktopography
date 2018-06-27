jQuery(function($) {

	
	$('#text').keyboard({ layout: 'qwerty' });

	$('.version').html( '(v' + $('#text').getkeyboard().version + ')' );

	
	
	
	
	
	$('#qwerty-mod').keyboard({
		lockInput: true, // prevent manual keyboard entry
		layout: 'custom',
		customLayout: {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w e r t y u i o p [ ] \\',
				'a s d f g h j k l ; \' {enter}',
				'{shift} z x c v b n m , . / {shift}',
				'{accept} {space} {left} {right}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{accept} {space} {left} {right}'
			]
		}
	})
	

	



	


	


	
	


});