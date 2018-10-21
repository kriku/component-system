const path = require('path');
const paths = require('./paths');

module.exports = {
    context: paths.root,
    entry: {
        index: paths.src,
        decorators: path.resolve(paths.src, 'decorators'),
        sdk: path.resolve(paths.src, 'sdk'),
        utils: path.resolve(paths.src, 'utils')
    }
};
