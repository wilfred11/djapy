const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.js');
const {configBasic, configDataTable, config_} = require('./webpack.config.js')
module.exports = [merge(configBasic, {
    mode: 'development',
    //watch: true
    // ... (environment-specific settings)
}), merge(configDataTable, {
    mode: 'development',
    // ... (environment-specific settings)
}),merge(config_, {
    mode: 'development',
    // ... (environment-specific settings)
})
]