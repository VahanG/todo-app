const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/../public/`,
        filename: 'scripts/bundle.js',
    },
    watch: true,
    devtool: 'source-map',
    mode:'development',
    module:{
        rules: [
            {
                test: /\.js$/,
                loader:'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets:[ 'es2015', 'react', 'stage-2' ]
                }
            }
        ]
    }
});