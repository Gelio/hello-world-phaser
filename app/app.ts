/// <reference path="../node_modules/phaser/typescript/phaser.d.ts"/>
import { TitleState } from './states/TitleState';
import { GameRunningState } from './states/GameRunningState';

class SimpleGame {
    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content');

        this.game.state.add('TitleState', TitleState, false);
        this.game.state.add('GameRunningState', GameRunningState, false);

        //this.game.state.start('TitleState', true, true);
        this.game.state.start('GameRunningState', true, true);

    }
}


window.onload = () => {
    var game = new SimpleGame();
};
