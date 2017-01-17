//webpack ./public/app.js ./public/bundle.js

var webpack = require('webpack');

var path = require('path');

module.exports ={
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals:{
        jquery: 'jQuery'
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':        'jquery',
            'jQuery':   'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories:[
            'node_modules',
            './app/components',
            './app/api',
            './app/actions'
        ],
        alias:{            
            //Main:           'app/components/Main.jsx',
            //Nav:            'app/components/Nav.jsx',     
            //TodoList:       'app/components/TodoList.jsx',
            //Todo:           'app/components/Todo.jsx',      
            actions:        'app/actions/actions.jsx',
            appStyles:      'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]        
    },
    sassLoader:{
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    }
};