const path = require('path')

exports.modifyWebpackConfig = ({config, stage}) => {
  config.merge({
    resolve: {
      alias: {
        React: path.resolve(__dirname, './node_modules/react/'),
        ReactDOM: path.resolve(__dirname, './node_modules/react-dom/')
      }
    }
  })

  return config
}