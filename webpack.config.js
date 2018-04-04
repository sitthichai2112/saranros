const path = require('path');

module.exports = {
    // เปิดใช้งาน sourcemap ด้วยโหมด eval
    devtool: 'eval',

    // ตรงจุดนี้สำคัญครับ! จุดเริ่มต้นของโปรแกรมเราคือ index.js
    // Dashboard.js หรือ Article.js จะเข้าถึงได้ก็ต้องผ่านไฟล์นี้
    // เราจึงบอกว่า index.js เป็น "entry" หรือทางเข้าถึงของโมดูลอื่น
    entry: {
        app: [
            './app/index'
        ]
    },
    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'env', 'stage-0']
                },
            },
            { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file" },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.sass']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './public'
    }
};