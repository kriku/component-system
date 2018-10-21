const merge = require('webpack-merge');

const resolve = require('./resolve');
const loaders = require('./loaders');

module.exports = merge(
    loaders,
    resolve
);
