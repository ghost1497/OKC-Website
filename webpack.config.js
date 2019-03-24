const path = require('path');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');
const webpack = require('webpack');
const CopyWebpackPlugin = require('CopyWebpackPlugin');
const dotenv = require('dotenv');

module.exports = () => {
//     entry: `${SRC_DIR}/index.jsx`,
//     output: {
//         path: DIST_DIR,
//         filename: 'bundle.js',
//     },
//     resolve: {
//         extensions: ['.js', '.jsx', '.json', '.css']
//     },
//     module : {
//         rules : [
//             {
//                 test: /\.css$/,
//                 loader: 'style-loader!css-loader'
//             },
//             {
//                 test: /\.png$/,
//                 loader: 'url-loader?limit=100000&minetype=image/png'
//             },
//             {
//                 test: /\.jpg/,
//                 loader: 'file-loader'
//             },
//             {
//                 test : /\.jsx?/,
//                 include : SRC_DIR,
//                 loader : 'babel-loader',
//                 query: {
//                     presets: ['react', 'es2015']
//                 }
//             }
//         ]
//     },
//     plugins: [
//         new webpack.DefinePlugin({
//             'process.env.NODE_ENV': JSON.stringify('production')
//         })
//     ]
// };

    // call dotenv and it will return an Object with a parsed key
    const env = dotenv.config().parsed;

    // reduce it to a nice object, the same as before
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {
        plugins: [
            new webpack.DefinePlugin(envKeys),
            new CopyWebpackPlugin([
                // relative path is from src
                {from: './static/favicon.ico'} // <- your path to favicon
            ])]
    }

};
