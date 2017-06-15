var Player = function(game, state)
{
    this.state = state;

    this.cursors = game.input.keyboard.createCursorKeys();
    this.restartKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

    this.restartKey.onDown.add(function() {
        game.state.start('main');
    }, this);


    
    
}
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.initialize = function() {
    var x = this.state._map.objects.spawn[0].x;
    var y = this.state._map.objects.spawn[0].y;

    Phaser.Sprite.call(this, game, x, y, 'player_spritesheet');
    this.anchor.setTo(.5,.5);
    game.add.existing(this);
    game.physics.arcade.enable(this);
    game.camera.follow(this);
}
Player.prototype.update = function() {
    if(this.cursors.left.isDown) {
        this.position.x -= 2;
        this.scale.x = -1;
    } else if(this.cursors.right.isDown) {
        this.position.x += 2;
        this.scale.x = 1;
    }

    if(this.cursors.up.isDown) {
        this.position.y -= 2;
    } else if(this.cursors.down.isDown) {
        this.position.y += 2;
    }

    game.physics.arcade.overlap(this, this.state._map.objectifs, this.overlapObjectifs, null, this);

    // For collisions,  move with velocity
}

Player.prototype.overlapObjectifs = function(player, objectif) {
    console.log('overlap objectfi');
}