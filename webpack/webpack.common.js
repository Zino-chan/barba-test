

module.exports = {
    entry: {
        main: "./src/js/main.js"
    },

    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.html$/,
                use:["html-loader"]
            },
            {
                test: /\.(svg|jpg|gif|png|jpeg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'images',
                        publicPath: 'images'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'fonts',
                        publicPath: 'fonts'
                    }
                }
            }
        ]
    }
};