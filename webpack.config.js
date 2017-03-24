module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: 'public/assets/bundle.js'
    },
    resolve: {
        root: __dirname, 
        modulesDirectories: [
            'node_modules',
            'app/components',
            'app/containers'
        ],
        /*
        alias: {
            Greeter$ : './public/components'
            GreeterContainer: 'public/components/GreeterContainer.js',
            GreeterForm: 'public/components/GreeterForm.js',
            GreeterMessage: 'public/components/GreeterMessage.js'
        },
        modulesDirectories: [
            'node_modules',
            'app/components'
        ],
        */
        extentions: ['', '.js','jsx','css']
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