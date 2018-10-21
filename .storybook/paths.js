const path = require('path');
const fs = require('fs');

const root = fs.realpathSync(process.cwd());

module.exports = {
    root: root,
    src: path.resolve(root, 'src'),
    nm: path.resolve(root, 'node_modules'),
    package: path.resolve(root, 'package.json'),
    output: path.resolve(root, 'umd')
};
