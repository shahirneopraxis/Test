const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/RenderPopup.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'RenderPopup.bundle.[chunkhash].js',
      library: 'RenderPopup',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: 'this'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                ['@babel/plugin-transform-react-jsx', { pragma: 'React.createElement' }],
                '@babel/plugin-transform-react-jsx-self',
              ]
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
      ],
    },
  };