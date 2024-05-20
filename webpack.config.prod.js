const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.js');
module.exports = merge(commonConfig[0], {
    mode: 'production',
    // ... (environment-specific settings)
});

module.exports = merge(commonConfig[1], {
    mode: 'production',
    // ... (environment-specific settings)
});