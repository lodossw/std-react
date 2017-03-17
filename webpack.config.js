module.exports = {
    entry: './public/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extentions: ['','.js','.jsx']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/
            }
        ]
    }
};