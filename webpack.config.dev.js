const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.js');
const {configBasic, configDataTable, config_, config_dt_} = require('./webpack.config.js')
module.exports = [merge(configBasic, {
    mode: 'development',
    devtool: 'source-map'
    //watch: true
    // ... (environment-specific settings)
}), merge(configDataTable, {
    mode: 'development',
    devtool: 'source-map'
    // ... (environment-specific settings)
}),merge(config_, {
    mode: 'development',
    devtool: 'source-map'
    // ... (environment-specific settings)
}),merge(config_dt_, {
    mode: 'development',
    devtool: 'source-map'
    // ... (environment-specific settings)
})
]