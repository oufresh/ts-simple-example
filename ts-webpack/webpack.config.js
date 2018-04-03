const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

/**
 * to add typings-for-css-modules-loader, da capire come usarlo
 * probabilmente non per i file globali di css ma per quelli interni
 * o al posto di css-loader
 */

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',//'inline-source-map',
    devServer: {
       contentBase: './dist'
    },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 
            { 
                loader:'css-loader',
                options: {
                    modules: true,
                    importLoaders: 1,
                    sourceMap: true,
                }
            },
            /*{
                loader: 'typings-for-css-modules-loader',
                options: {
                  modules: true,
                  namedExport: true
                }
            },*/
            {
                loader:'postcss-loader',
                options: {
                    // Necessary for external CSS imports to work
                    // https://github.com/facebookincubator/create-react-app/issues/2677
                    ident: 'postcss',
                    plugins: () => [
                      //require('postcss-flexbugs-fixes'),
                      autoprefixer({
                        browsers: [
                          '>1%',
                          'last 4 versions',
                          'Firefox ESR',
                          'not ie < 9', // React doesn't support IE8 anyway
                        ],
                        flexbox: 'no-2009',
                      }),
                    ],
                  }
            }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyWebpackPlugin([{
        from: './src/index.html',
        to: './index.html'
    }])
  ]
};