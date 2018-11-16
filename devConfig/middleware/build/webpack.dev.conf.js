
const webpack = require('webpack')
const path = require('path');
const proxy = require('./proxy');
const historyFallback = require('./historyfallback')

module.exports = {
    devtool:"cheap-module-source-map",
    devServer:{
        overlay:true,//报错浏览器显示
        hot:true,//开启模块热更新
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: 9000,
        // inline:false,
        historyApiFallback:historyFallback,
        proxy:proxy
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin(), //开启模块热更新
      new webpack.NamedModulesPlugin()//开启模块热更新
    ]
}