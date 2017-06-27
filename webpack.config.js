const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'plugins.js',
        path: path.resolve(__dirname, 'dist')
    }
};