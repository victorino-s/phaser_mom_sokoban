var game = new Phaser.Game(720,1280, Phaser.AUTO, 'game-container');

game.state.add('main', mainState);

game.state.start('main');

