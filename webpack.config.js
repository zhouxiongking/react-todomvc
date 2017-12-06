const path = require('path');

let filePath = path.resolve(__dirname, 'component/app.jsx');

module.exports = {
    entry: filePath,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    // webpack-dev-server配置
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        inline: true,
        port: 8000
    }
};
