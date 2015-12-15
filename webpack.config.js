var path = require('path');

var PATHS = {
    build: path.join(__dirname, 'public')
};

module.exports = {
    entry: path.join(__dirname, 'client-render.jsx'),
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel']
            }
        ]
    }
}
