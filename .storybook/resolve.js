const path = require('path');
const paths = require('./paths');

module.exports = {
    resolve: {
        modules: [paths.src, paths.nm]
    }
};
