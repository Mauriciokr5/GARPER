const path = require('path');

module.exports = {
    entry: './src/components/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/src/public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: path.resolve(__dirname, 'src/public'),
        port: 3000,
        hot: true
    },
};
