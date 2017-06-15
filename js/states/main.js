var mainState = {
	_map: null,
	_player: null,

	_instance: this,

	create: function() {
		this._map = new Map(this.game, this);
		this._map.initialize(this.game);

		this._player = new Player(this.game, this);
		this._player.initialize();
	},

	update: function()
	{
		this._player.update();
	}
}