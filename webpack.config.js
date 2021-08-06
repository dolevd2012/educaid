const path = require('path');

module.exports = {
    entry: './src/App.js',
    output:{
        path: path.join(__dirname,'public'),
        filename:'bundle.js',
        publicPath: '/'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
    {
        test:/css$/,
        use:[
            'style-loader',
            'css-loader',
        ]
    }]
    },

    devtool:'cheap-module-eval-source-map',
    devServer:{
        port: 3000,
        historyApiFallback: true,
        contentBase: path.join(__dirname,'public')
    }
};

