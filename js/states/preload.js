var preloadState = {
	preload: function () {
		this.load.image('map_tileset', '../../assets/_spritesheets/map_tileset.png');
		this.load.tilemap('lvl1', "../../assets/maps/level1.json", null, Phaser.Tilemap.TILED_JSON);

		this.load.spritesheet('player_idle_spritesheet', '../../assets/_spritesheets/girl_sp.png', 416, 454);
	},

	create: function(){
		console.log('preload done, go to menu...');
		game.state.start('menu');
	}
}