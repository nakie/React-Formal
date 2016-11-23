path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: 'index.js',
        publicPath: '/static/',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: path.join( __dirname, 'src' ),
                exclude: /node_modules/,
                query:{
                    presets: [ 'es2015', 'react' ]
                }
            }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx' ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify( 'production' )
            }
        })
    ],
};