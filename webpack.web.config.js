const getConfig = require('startupjs/bundler').webpackWebConfig

module.exports = getConfig(undefined, {
  forceCompileModules: [
    'react-native-collapsible',
    'react-native-status-bar-height',
    '@startupjs/app',
    '@startupjs/ui'
  ],
  alias: {}
})
