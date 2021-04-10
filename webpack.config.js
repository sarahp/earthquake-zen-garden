const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    importLoaders: 1,
                    modules: true
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        port: 3000,
        publicPath: "/build/",
        open: true,
        overlay: true
    }
};