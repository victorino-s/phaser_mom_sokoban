var preloadState = {
	preload: function () {
		this.load.image('map_tileset', '../../assets/_spritesheets/map_tileset.png');
		this.load.tilemap('lvl1', "../../assets/maps/level1.json", null, Phaser.Tilemap.TILED_JSON);

		this.load.spritesheet('player_spritesheet', '../../assets/_spritesheets/girl_sp.png', 104, 113.5);

		this.load.image('caisse', '../../assets/sprites/crate_02.png');
		this.load.image('caisse_valide', '../../assets/sprites/crate_12.png');
		this.load.image('cible', '../../assets/sprites/environment_01.png');
	},

	create: function(){
		console.log('preload done, go to menu...');
		game.state.start('menu');
	}
}