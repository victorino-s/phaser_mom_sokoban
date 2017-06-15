var Map = function (game, state) {
	this.state = state;
	this.caisses = null;
	this.objectifs = null;
	this.playerSpawnPos = null;
	this.validCaisses = [];
	this.renderLayer = null;
	this.collideLayer = null;
	Phaser.Tilemap.call(this, game, 'lvl1');
	this.addTilesetImage('map_tileset', 'map_tileset');
}

Map.prototype = Object.create(Phaser.Tilemap.prototype);
Map.prototype.constructor = Map;

Map.prototype.initialize = function (game) {



	this.renderLayer = this.createLayer('ground');
	this.collideLayer = this.createLayer('map_render');

	this.setCollisionBetween(1, 10000, true, 'map_render');

	this.renderLayer.resizeWorld();

	this.objectifs = game.add.group();
//	this.objectifs.enableBody = true;

	this.caisses = game.add.group();
	//this.caisses.enableBody = true;


	this.createFromObjects('objectifs', 18, 'cible', 0, true, false, this.objectifs);
	this.createFromObjects('caisses', 11, 'caisse', 0, true, false, this.caisses);
}

Map.prototype.initializeCaisses = function () {
	var c = 0;
	this.caisses.forEach(function (element) {
		game.physics.arcade.enable(element, Phaser.Physics.ARCADE);
		element.body.drag.setTo(10000);
		element.body.mass = 100;
		element.name = 'caisse_' + c++;
		element["isValid"] = false;
	}, this);
}

Map.prototype.initializeObjectifs = function () {
	this.objectifs.forEach(function (element) {
		game.physics.arcade.enable(element, Phaser.Physics.ARCADE);
		element.body.setSize(32, 32, 48, 48);
		element['isValid'] = false;
		var child = element.addChild(game.make.sprite(48,48,'objbody'));
		game.physics.arcade.enable(child, Phaser.Physics.ARCADE);
	}, this);
}

Map.prototype.update = function () {

//	game.physics.arcade.overlap(this.caisses, this.objectifs, this.checkOverlap, null, this);
	
	this.caisses.forEach(function(caisse) {
		for(var i = 0; i < this.objectifs.children.length; i++) {
			if(caisse.overlap(this.objectifs.children[i].children[0])) {
				console.log(caisse.name);
				caisse.isValid = true;
				break;
			} else {
				caisse.isValid = false;
			}
		}

		if(caisse.isValid) {
			if(caisse.key != 'caisse_valide')
				caisse.loadTexture('caisse_valide');
		} else {
			if(caisse.key != 'caisse')
				caisse.loadTexture('caisse');
		}
	}, this);

	this.checkWin();

}

Map.prototype.checkWin = function() {
	var boxes_count = this.caisses.length;
	var validBoxes = 0;
	this.caisses.forEach(function(e) {
		if(e.isValid)
			validBoxes++;
	}, this);
	if(validBoxes == boxes_count)
		game.state.start('menu');
}