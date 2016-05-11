/// <reference path="../node_modules/phaser/typescript/phaser.d.ts"/>

class SimpleGame {
    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create });
    }

    create() {
        var text = "Hello World!";
        var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
        this.game.add.text(0, 0, text, style);
    }

}

window.onload = () => {
    var game = new SimpleGame();
};
