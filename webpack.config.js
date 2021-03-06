const path = require( 'path' );
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );

const common = {

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
}; // END common {}

const development = {};

const examples  = {};

const production = {};

var config;

// Detect how npm is run and branch based on that
switch( process.env.npm_lifecycle_event ) {
    case 'prod':
        config = merge( common, prodConfig );

        console.log( "Production Build" );

        break;

    default:
        //config = merge( common, devConfig );
        console.log( process.env.npm_lifecycle_event );

} // END switch( process.env.npm_lifecycle_event )

module.exports = config;