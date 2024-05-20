const { merge } = require('webpack-merge');
const {configBasic, configDataTable, config_} = require('./webpack.config.js')

module.exports = [merge(configBasic, {
    mode: 'production',
    // ... (environment-specific settings)
}), merge(configDataTable, {
    mode: 'production',
    // ... (environment-specific settings)
}),merge(config_, {
    mode: 'production',
    // ... (environment-specific settings)
})
]