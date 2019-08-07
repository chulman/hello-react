
const webpack = require('webpack');

module.exports = {
    //entry 부분이 웹팩이 파일을 읽어들이기 시작하는 부분
    // 의존성 그래프의 시작점, index.js 파일의 임포트되는 모든 파일을 번들링
    // 여기서부터 import 되어있는 다른 스크립트를 불러온다
    entry: [
        'react-hot-loader/patch',
        './src/index.js',
        './src/state.js',
        './src/mapping.js'
    ],

    /**
     * mode 웹팩4에서 추가
     * development or production
     * production이면 알아서 최적화함
     *
     */
    // mode: 'development',

    module: {
        rules: [
            {
                // test는 일반적으로 파일 확장명을 일치시키는데 사용
                test: /\.(js|jsx)$/,
                // exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    //웹팩이 알아서 경로나 확장자를 처리할 수 있게 도와주는 옵션
    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js', '.jsx']
    },

    // 파일을 합치고 /bundle.js 에 저장한다.
    output: {
        path: __dirname + '/dist',
        // publicPath는 브라우저에서 참조될때 출력 파일의 공용 URL 주소를 지정
        publicPath: '/',
        // http://localhost:3000/bundle.js
        filename: 'bundle.js'
    },
    plugins: [
        //reload 없이 모듈의 추가 삭제 변동이 실행중에 가능한 플러그인
        new webpack.HotModuleReplacementPlugin()
    ],

    //dev server를 통해 빠르게 앱 개발을 할 수 있음
    devServer: {
        host: "0.0.0.0",
        port: 3000,
        // proxy: {
        //     '/api': 'http://localhost:3000'
        // },
        contentBase: './dist',
        hot: true
    }

    /**
     * 의존성 그래프에서 엔트리로 그래프의 시작점을 설정하면 웹팩은 모든 자원을 모듈로 로딩한 후 아웃풋으로 묶어준다.
     * 로더로 각 모듈별로 바벨, 사스변환 등의 처리하고 이 결과를 플러그인이 받아 난독화, 텍스트 추출 등의 추가 작업을 한다.
     */

};