var path = require('path');

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
    pixi = path.join(phaserModule, 'build/custom/pixi.js'),
    p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts', '.webpack.js', '.web.js', '.js'],
        alias: {
            'phaser': phaser,
            'pixi.js': pixi,
            'p2': p2
        }
    },
    watch: true,
    module: {
        loaders: [
            /*{
                test: /pixi\.js/,
                loader: 'script'
            },*/
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '/dist')
    }
};