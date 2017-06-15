var menuState = {
	lvlone: null,
	lvltwo: null,
	lvlthree: null,
	lvlfour: null,
	lvlfive: null,

	create: function () {



		this.lvlone = game.add.sprite(10, 180, 'chooseLevelBloc');
		this.lvltwo = game.add.sprite(290, 180, 'chooseLevelBloc');
		this.lvlthree = game.add.sprite(590, 180, 'chooseLevelBloc');
		this.lvlfour = game.add.sprite(160, 360, 'chooseLevelBloc');
		this.lvlfive = game.add.sprite(440, 360, 'chooseLevelBloc');


		var style = { font: "52px Arial", fill: "#000000", align: "center" };
		var textOne = game.add.text(60, 230, "1", style);
		textOne.anchor.set(0.5);

		var textTwo = game.add.text(340, 230, "2", style);
		textTwo.anchor.set(0.5);

		var textThree = game.add.text(640, 230, "3", style);
		textThree.anchor.set(0.5);

		var textFour = game.add.text(210, 410, "4", style);
		textFour.anchor.set(0.5);

		var textFive = game.add.text(490, 410, "5", style);
		textFive.anchor.set(0.5);

		this.lvlone.inputEnabled = true;
		this.lvltwo.inputEnabled = true;
		this.lvlthree.inputEnabled = true;
		this.lvlfour.inputEnabled = true;
		this.lvlfive.inputEnabled = true;

		this.lvlone.events.onInputDown.add(function () {
			choosedLevel = 1;
			this.start();
		}, this);

		this.lvltwo.events.onInputDown.add(function () {
			choosedLevel = 2;
			this.start();
		}, this);

		this.lvlthree.events.onInputDown.add(function () {
			choosedLevel = 3;
			this.start();
		}, this);

		this.lvlfour.events.onInputDown.add(function () {
			choosedLevel = 4;
			this.start();
		}, this);

		this.lvlfive.events.onInputDown.add(function () {
			choosedLevel = 5;
			this.start();
		}, this);

		var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		enterKey.onDown.addOnce(this.start, this);
	},

	start: function () {
		console.log('end of menu, starting main...');
		game.state.start('main');
	}


}