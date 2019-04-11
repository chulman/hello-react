
const webpack = require('webpack');

module.exports = {
    // 의존성 그래프의 시작점, index.js 파일의 임포트되는 모든 파일을 번들링
    entry: [
        'react-hot-loader/patch',
        './src/index.js',
        './src/state.js',
        './src/mapping.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }

};