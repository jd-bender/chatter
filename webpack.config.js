const path = require("path");

module.exports = (env) => ({
    entry: "./src/app.js",
    mode: env === 'production' ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devtool: env === 'production' ? '' : 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        compress: true,
        historyApiFallback: true,
        port: 3000
    }
});