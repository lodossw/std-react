module.exports = {
    entry: './public/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname, 
        /*
        alias: {
            Greeter$ : './public/components'
            GreeterContainer: 'public/components/GreeterContainer.js',
            GreeterForm: 'public/components/GreeterForm.js',
            GreeterMessage: 'public/components/GreeterMessage.js'
        },
        */
        modulesDirectories: [
            'node_modules',
            'public/components'
        ],
        extentions: ['', '.js','jsx']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /{node_modules|bower_components}/
            }
        ]
    }
};