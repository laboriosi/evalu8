const { override, addWebpackResolve } = require('customize-cra')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.paths.json')

module.exports = {
  webpack: override(addWebpackResolve({ plugins: [new TsconfigPathsPlugin()] })),
  jest: function (config) {
    config.moduleNameMapper = {
      ...config.moduleNameMapper,
      ...pathsToModuleNameMapper(compilerOptions.paths),
    }
    config.moduleDirectories = ['src', 'node_modules']

    return config
  },
}
