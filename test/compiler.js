import path from 'path'
import webpack from 'webpack'
import nodeModules from 'webpack-node-externals'

export default (fixture, options = {}) => {
  // const fs = new MemoryFS()

  const compiler = webpack({
    context: __dirname,
    target: 'node',
    entry: `./${fixture}`,
    externals: [nodeModules({whitelist: ['nunjucks']})],
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.njk$/,
        use: {
          loader: path.resolve(__dirname, '../src/njk-loader/loader.js'),
          options: {
            root: path.resolve(__dirname),
            name: 'Alice'
          }
        }
      }]
    }
  })

  // compiler.outputFileSystem = fs

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      console.log(stats.toString())
      if (err) reject(err)

      resolve({stats})
    })
  })
}
