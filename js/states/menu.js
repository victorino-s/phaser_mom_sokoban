var menuState = {
	create: function() {
		var style = { font: "65px Arial", fill: "#ff0044", align: "center"};
		var text = game.add.text(game.world.centerX, game.world.centerY, "1. Lvl1 , 2. Lvl2", style);
		text.anchor.set(0.5);

		var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		enterKey.onDown.addOnce(this.start, this);
	},

	start: function() {
		console.log('end of menu, starting main...');
		game.state.start('main');
	}


}