const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'tipu': "./src/index.ts"
    },
    externals: {
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../lib'),
        libraryTarget: 'commonjs2',
        library: 'tipu',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                exclude: '/node_modules/',
                loader: 'ts-loader',
                test: /\.tsx?$/,
                options: {}
            }]
    },
    resolve: {
        extensions: [".ts", ".json", ".js"]
    },
    plugins: []
}
