export class TitleState extends Phaser.State {
    game:Phaser.Game;

    constructor() {
        super();
    }

    preload() {
        this.game.load.image('title', 'images/wyrywanie zęba.png');
    }

    create() {
        this.game.add.sprite(0, 0, 'title');

        var style = {font: '65px Arial', fill: '#ff0000', align: 'center'};
        this.game.add.text(0, 0, 'Click here to start!', style);
        this.input.onTap.addOnce(this.titleClicked, this);
    }


    titleClicked() {
        this.game.state.start('GameRunningState');
    }
}