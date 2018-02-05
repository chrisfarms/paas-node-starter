const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeModules = require('webpack-node-externals')
const DEV_MODE = process.env.NODE_ENV !== 'production'

// const extractSass = new ExtractTextPlugin({
//   filename: '[name].[contenthash].css',
//   disable: false
// })

module.exports = {
  // mode: 'production',
  target: 'node',

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },

  externals: DEV_MODE ? [nodeModules({whitelist: [
    '@govuk-frontend'
  ]})] : ['chokidar'],

  stats: {
    warningsFilter: [
      // Express uses a dynamic require in view.js but we don't care
      /node_modules\/express\/lib\/view\.js/
    ]
  },

  performance: {
    // Performance hints not that useful for target:node
    hints: false
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|ico|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(s?css)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, '../node_modules')
              ]
            }
          }
        ]
      },
      {
        test: /\.(njk|nunjucks)$/,
        use: [
          {
            loader: path.resolve(__dirname, '../src/njk-loader/loader.js'),
            options: {
              includePaths: ['@govuk-frontend']
            }
          },
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href', 'script:src']
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href']
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // extractSass
  ]
}
