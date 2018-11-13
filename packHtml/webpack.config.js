const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: __dirname,
    mode:"development",
    resolve:{
        extensions:['.js']
    },
    entry:{
        app:'./app'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,"dist")
    },
    plugins:[
      new HtmlWebpackPlugin({
          filename:'index.html',
          template:'./index.html',
          inject:true,
          chunks:['app'], //指定入口chunk是否插入页面
          minify:{
              collapseWhitespace:true //压缩html
          }
      })
    ]
}