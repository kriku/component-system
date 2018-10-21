const merge = require('webpack-merge');

const entry = require('./entry');
const loaders = require('./loaders');
const resolve = require('./resolve');
const output = require('./output');

module.exports = merge(
    entry,
    output,
    loaders,
    resolve
);
