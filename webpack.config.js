const path = require('path')        //전역모듈
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue'], //확장자 생략 가능
        alias: {
            '~': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'src/assets')
        }
    },
    entry: './src/main.js',          //파일을 읽어들이는 진입점


    output: {                       //결과물(번들)을 반환하는 설정
        // path: path.resolve(__dirname, 'dist'), //node js에서 필요로 하는 절대 경로를 명시해줘야함, dirname은 현재 파일이 있는 경로
        // filename: 'main.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.s?css$/,     //.css로 끝나는 애를 test로 매칭한다. ?: s라는 단어가 있을수도 있고 없을수도 있다(정규표현식)
                use: [
                    //순서 중요하고 맨 위에것이 제일 마지막에 해석됨
                    'vue-style-loader', 
                    'style-loader', // js에서 해석한 css를 index.html에 삽입하는 로더
                    'css-loader',    // js에서 css를 해석하기 위한 로더
                    'postcss-loader',   //공급업체 prefix를 사용하는 로더
                    'sass-loader'    //웹팩에서 해당하는 scss 파일을 읽어낼 수 있고 sass 모듈을 통해 해석함
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: 'file-loader'
            }
        ]
    },

    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({    //이 플러그인을 통해 위의 static 폴더가 dist로 복사됨
            patterns: [
                {from: 'static'}
            ]
        }),
        new VueLoaderPlugin()
    ],

    devServer: {
        host: 'localhost'
    }
}