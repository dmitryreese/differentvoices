const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node-modules/],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}
