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
}