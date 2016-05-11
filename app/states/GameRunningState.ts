import {CONFIG} from '../config';
import {Player} from '../Player';

const SPEED = 5;

export class GameRunningState extends Phaser.State {
    game:Phaser.Game;
    background:Phaser.Sprite;
    fighterSprite:Phaser.Sprite;
    cursors:Phaser.CursorKeys;
    player:Player;
    enemies:Phaser.Group;

    constructor() {
        super();
    }

    preload() {
        this.game.load.spritesheet('fighter', 'images/Planes1.png', 64, 64);
        this.game.load.image('space', 'images/space.png');
        this.game.load.image('enemy', 'images/enemy.png');
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.background = this.game.add.sprite(0, 0, 'space');

        // Player
        this.fighterSprite = this.game.add.sprite(0, 0, 'fighter');
        this.fighterSprite.crop(new Phaser.Rectangle(0, this.fighterSprite.height / 3, this.fighterSprite.width, this.fighterSprite.height / 3), false);
        this.game.physics.enable(this.fighterSprite, Phaser.Physics.ARCADE);
        this.player = new Player(this.fighterSprite);

        // Enemies
        this.enemies = new Phaser.Group(this.game);

        for (var i = 0; i < 10; i++) {
            this.enemies.create(Math.random()*this.game.width, Math.random()*this.game.height, 'enemy');
        }
        this.game.physics.enable(this.enemies, Phaser.Physics.ARCADE);
        this.enemies.forEach((enemy: Phaser.Sprite) => enemy.body.velocity.set(-10, 0), this);

        this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    update() {
        this.game.input.update();

        var acceleration = new Phaser.Point(0, 0);

        if (this.cursors.down.isDown)
            acceleration.y++;
        if (this.cursors.up.isDown)
            acceleration.y--;
        if (this.cursors.left.isDown)
            acceleration.x--;
        if (this.cursors.right.isDown)
            acceleration.x++;

        acceleration = acceleration.multiply(CONFIG.player.acceleration, CONFIG.player.acceleration);
        this.player.accelerate(acceleration);

        this.player.update();
    }

    render() {

    }
}
