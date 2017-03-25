module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: 'public/assets/js/app.js'
    },
    resolve: {
        root: __dirname, 
        modulesDirectories: [
            'node_modules',
            'src/controllers',
            'src/components'
        ],
        extensions: ['', '.js','jsx','css']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.js?$/,
                exclude: /{node_modules|bower_components}/
            },
            {       
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                //loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]'
                //loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[local]'
            }
        ]
    }
};