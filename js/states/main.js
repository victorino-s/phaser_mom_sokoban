

var mainState = {
	_map: null,
	_player: null,

	_instance: this,
	_wallsCG: null,
	_playerCG: null,
	_caissesCG: null,

	create: function () {
		game.physics.startSystem(Phaser.Physics.ARCADE);

		this._wallsCG = this.game.add.group();
		this._map = new Map(this.game, this);
		this._map.initialize(this.game);
		this._map.initializeCaisses();
		this._map.initializeObjectifs();
		this._player = new Player(this.game, this);
		this._player.initialize();
		this._player.initializeAnimations();
		game.camera.follow(this._player);
		/* -- Collisions -- */
		/*		this._wallsCG = game.physics.arcade.createCollisionGroup();
		
				for (var wall in this._map.walls) {
					this._map.walls[wall].setCollisionGroup(this.wallCG);
					this._map.walls[wall].collides(this._playerCG);
				}
		*/
		
		/*this._map.objects.coll_objects.forEach(function (element) {
			console.log(this);
		//	this._wallsCG.add(element);
		}, this);*/
	},

	update: function () {
		this._player.update();
		game.physics.arcade.collide(this._player, this._map.caisses, this.slowPlayer, null, this);
		game.physics.arcade.collide(this._map.caisses, this._map.caisses);
		game.physics.arcade.collide(this._player, this._map.collideLayer);
		game.physics.arcade.collide(this._map.caisses, this._map.collideLayer);
		
		this._map.update();
	},
/*
	render: function() {
		game.debug.body(this._player);
		this._map.objectifs.forEach(function(element) {
		//	game.debug.body(element);
			game.debug.body(element.children[0]);
		}, this);
		
	},
*/
	slowPlayer: function() {
		
		this._player.speed = 200;
	}
}