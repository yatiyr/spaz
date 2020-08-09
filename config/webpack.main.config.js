/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const rules = require('./webpack.rules');

const cesiumPath = require('./path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DefineGlobalPlugin } = require("define-global-webpack-plugin");

const cesiumConfig = {
    resolve: {
        alias: {
            cesiumSource: cesiumPath.cesiumSource,
        },
    },
    amd: {
        toUrlUndefined: true
    },
    output: {
        sourcePrefix: '',
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: cesiumPath.cesiumWorkers, to: 'Workers' },
                { from: cesiumPath.cesiumSourceAssets, to: 'Assets'},
                { from: cesiumPath.cesiumSourceWidgets, to: 'Widgets'},
            ]
        }),
        new DefineGlobalPlugin({
            // Define relative base path in cesium for loading assets
            CESIUM_BASE_URL: JSON.stringify('./')
          }),
    ],
};

function srcPaths(src) {
    return path.join(__dirname, src);
}

module.exports = {
    ...cesiumConfig,
    mode: 'development',
    devtool: 'source-map',
    target: 'electron-main',
    entry: './src/main/main.ts',
    module: {
        rules
    },
    resolve: {
        alias: {
            '@main': srcPaths('src/main'),
            '@models': srcPaths('src/models'),
            '@renderer': srcPaths('src/renderer'),
            ...cesiumConfig.resolve.alias,
        },
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
    },

    plugins: [
        ...cesiumConfig.plugins,
    ]
};