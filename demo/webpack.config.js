const fs        = require( 'fs' );
const path      = require( 'path' );
const webpack   = require( 'webpack' );

module.exports = {

    devtool: 'inline-source-map',

    entry: fs.readdirSync( __dirname ).reduce( function( entries, dir ){
        var isDraft = dir.charAt( 0 ) === '_' || dir.indexOf( 'components' ) >= 0;

        if( !isDraft && isDirectory( path.join( __dirname, dir ) ) ){
            entries[ dir ] = path.join( __dirname, dir, 'app.js' );
        }
        return entries;
    }, {}),

    output: {
        path: path.join( __dirname, '/__build__' ),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/__build__/'
    },
    // entry: path.join( __dirname, '/src/main.js'),
    //
    // output: {
    //     path: path.join( __dirname, '/__build__' ),
    //     filename: 'main.js',
    //     publicPath: '/__build__/'
    // },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/,
                query:{
                    presets: [ 'es2015', 'react' ]
                }
            }
        ],
    },
    resolve: {
        extensions: [ '', '.js', '.json', '.jsx' ],
        alias: {
            'react-formal': path.resolve( __dirname, '../dist/index.js' )
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin( 'common.js' ),
        new webpack.DefinePlugin( {
            'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV || 'development' )
        } )
    ]
};

function isDirectory( dir ) {
    return fs.lstatSync( dir ).isDirectory();
}