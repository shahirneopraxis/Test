const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/MainPopup.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'MainPopup.bundle.[chunkhash].js',
      library: 'MainPopup',
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