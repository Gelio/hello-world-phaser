import { CONFIG } from './config';

export class Player {
    game: Phaser.Game;

    constructor(public sprite: Phaser.Sprite) {
        this.game = sprite.game;
        this.sprite.body.maxVelocity = CONFIG.player.maxVelocity;
        this.sprite.body.drag.set(CONFIG.player.drag, CONFIG.player.drag);
        this.sprite.body.collideWorldBounds = true;
    }

    accelerate(acceleration: Phaser.Point) {
        this.sprite.body.acceleration.set(acceleration.x, acceleration.y);
    }

    update() {

    }
}