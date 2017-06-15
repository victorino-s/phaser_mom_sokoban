var Player = function (game, state) {
	this.state = state;
	this.speed = 300;

	this.movingLeft = false;
	this.movingRight = false;
	this.movingUp = false;
	this.movingDown = false;

	this.leftButton = game.add.sprite(280, 1160, 'arrowKey');
	this.leftButton.anchor.setTo(.5, .5);
	this.leftButton.scale.setTo(.5, .5);
	this.leftButton.angle = -90;

	this.rightButton = game.add.sprite(400, 1160, 'arrowKey');
	this.rightButton.anchor.setTo(.5, .5);
	this.rightButton.scale.setTo(.5, .5);
	this.rightButton.angle = 90;

	this.upButton = game.add.sprite(340, 1100, 'arrowKey');
	this.upButton.anchor.setTo(.5, .5);
	this.upButton.scale.setTo(.5, .5);

	this.downButton = game.add.sprite(340, 1220, 'arrowKey');
	this.downButton.anchor.setTo(.5, .5);
	this.downButton.scale.setTo(.5, .5);
	this.downButton.angle = 180;

	this.restartButton = game.add.sprite(200, 1060, 'restartKey');
	this.restartButton.anchor.setTo(.5, .5);
	this.restartButton.scale.setTo(.5, .5);

	this.leftButton.inputEnabled = true;
	this.rightButton.inputEnabled = true;
	this.upButton.inputEnabled = true;
	this.downButton.inputEnabled = true;
	this.restartButton.inputEnabled = true;

	this.leftButton.fixedToCamera = true;
	this.rightButton.fixedToCamera = true;
	this.upButton.fixedToCamera= true;
	this.downButton.fixedToCamera = true;
	this.restartButton.fixedToCamera = true;

	// LEFT
	this.leftButton.events.onInputDown.add(function () {
		this.movingLeft = true;
	}, this);

	this.leftButton.events.onInputUp.add(function () {
		this.movingLeft = false;
	}, this);
	// RIGHT
	this.rightButton.events.onInputDown.add(function () {
		this.movingRight = true;
	}, this);

	this.rightButton.events.onInputUp.add(function () {
		this.movingRight = false;
	}, this);
	// UP
	this.upButton.events.onInputDown.add(function () {
		this.movingUp = true;
	}, this);

	this.upButton.events.onInputUp.add(function () {
		this.movingUp = false;
	}, this);
	// DOWN
	this.downButton.events.onInputDown.add(function () {
		this.movingDown = true;
	}, this);

	this.downButton.events.onInputUp.add(function () {
		this.movingDown = false;
	}, this);
	// RESTART
	this.restartButton.events.onInputDown.add(function () {
		game.state.start('main');
	}, this);



	this.cursors = game.input.keyboard.createCursorKeys();
	this.restartKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

	this.restartKey.onDown.add(function () {
		game.state.start('main');
	}, this);




}
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.initializeAnimations = function () {
	this.animations.add('walk', [0,1,2,3,4,6,7,8,9,10,12,13,14,15,16,18,19,20,21,22], 5,true);
	this.animations.add('idle', [5,11,17,23,24,25,26,27,28,29,30,31,32,33,34,35], 5, true);
	this.animations.play('idle');
}

Player.prototype.initialize = function () {
	var x = this.state._map.objects.spawn[0].x;
	var y = this.state._map.objects.spawn[0].y;

	Phaser.Sprite.call(this, game, x, y, 'player_spritesheet');
	this.anchor.setTo(.5, .5);
	game.add.existing(this);

	game.physics.arcade.enable(this);
	this.enableBody = true;
	this.body.mass = 1.5;
	this.body.setSize(64, 112, 24, 4);
	//this.body.immovable = true;
}
Player.prototype.update = function () {
	if (this.cursors.left.isDown || this.movingLeft) {
		this.body.velocity.x = -this.speed;
		this.scale.x = -1;
	} else if (this.cursors.right.isDown || this.movingRight) {
		this.body.velocity.x = this.speed;
		this.scale.x = 1;
	} else {
		this.body.velocity.x = 0;
	}

	if (this.cursors.up.isDown || this.movingUp) {
		this.body.velocity.y = -this.speed;
	} else if (this.cursors.down.isDown || this.movingDown) {
		this.body.velocity.y = this.speed;
	} else {
		this.body.velocity.y = 0;
	}

	if(this.body.velocity.x != 0 || this.body.velocity.y != 0) {
		this.animations.play('walk');
	} else {
		this.animations.play('idle');
	}
	game.physics.arcade.overlap(this, this.state._map.objectifs, this.overlapObjectifs, null, this);

	// For collisions,  move with velocity
}

Player.prototype.overlapObjectifs = function (player, objectif) {
	//console.log('overlap objectfi');
}