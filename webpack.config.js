const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProduction) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
};

const filename = ext => isDevelopment ? `[name].${ext}` : `[name].${ext}`;

const cssLoaders = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDevelopment,
                reloadAll: true
            }
        }, 'css-loader'
    ];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
};

const babelOptions = preset => {

    const options = {
        presets: [
            '@babel/preset-env'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    };

    if (preset) {
        options.presets.push(preset);
    }

    return options;
};

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions()
    }];

    if (isDevelopment) {
        loaders.push('eslint-loader');
    }

    return loaders;
};

const plugins = () => {
    const base = [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            }
        ]),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ];

    if (isProduction) {
        base.push(new BundleAnalyzerPlugin());
    }

    return base;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.js'],
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(),
    devServer: {
        port: 8888,
        hot: isDevelopment
    },
    devtool: isDevelopment ? 'source-map' : '',
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: jsLoaders()
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
        ]
    }
};
