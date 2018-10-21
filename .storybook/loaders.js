const fs = require('fs');
const paths = require('./paths');

// Ant customization palette
const palette = require('../src/theme');

module.exports = {
    module: {
        rules: [
            {
                enforce: "pre",
                include: paths.root,
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js$/,
                include: paths.root,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            "react-docgen",
                            ["import", {
                                "libraryName": "antd",
                                "style": true
                            }],
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-function-bind",
                            "@babel/plugin-proposal-export-default-from"
                        ]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: {
                            strictMath: false,
                            noIeCompat: true,
                            javascriptEnabled: true,
                            modifyVars: palette
                        }
                    }
                ],
                include: [
                    paths.src,
                    paths.nm // just for antd
                ]
            },
            {
                test: /\.(ttf|eot|woff|svg)$/,
                loader: "file-loader"
            }
        ]
    }
};
