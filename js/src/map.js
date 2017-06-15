var Map = function (game, state) {
	this.state = state;
	this.caisses = null;
	this.objectifs = null;
	this.playerSpawnPos = null;

	Phaser.Tilemap.call(this, game, 'lvl1');
	this.addTilesetImage('map_tileset', 'map_tileset');
}

Map.prototype = Object.create(Phaser.Tilemap.prototype);
Map.prototype.constructor = Map;

Map.prototype.initialize = function (game) {
	
	var layerGroup = game.add.group();
	layerGroup.add(this.createLayer('ground'));
	layerGroup.add(this.createLayer('map_render'));
	layerGroup.forEach(function (element) {
		element.renderSettings.enableScrollDelta = true;
	}, this);

	this.setCollision(3);

	game.physics.startSystem(Phaser.Physics.ARCADE);

	this.objectifs = game.add.group();
	this.caisses = game.add.group();

	this.objectifs.enableBody = true;
	this.caisses.enableBody = true;

	this.createFromObjects('objectifs', 18, 'cible', 0, true, false, this.objectifs);
	this.createFromObjects('caisses', 11, 'caisse', 0, true, false, this.caisses);
	
}