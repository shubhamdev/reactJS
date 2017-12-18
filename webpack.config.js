var config = {
   entry: './app/main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   watch: true,
   devServer: {
      inline: true,
      port: 3002
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            // $exceptionHandlerude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;