const paths = require('./paths');
const package = require(paths.package);

module.exports = {
    output: {
        path: paths.output,
        library: package.name,
        libraryTarget: "umd",
        filename: "[name].js"
    },
    mode: "production",
    optimization: {
        minimize: false
    },
    target: "node"
};
