
const webpack = require('webpack')
const path = require('path');


module.exports = {
    devtool:"cheap-module-source-map",
    devServer:{
        overlay:true,//报错浏览器显示
        hot:true,//开启模块热更新
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: 9000,
        // inline:false,
        historyApiFallback:{
            rewrites:[{
                from:/^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
                to:function(context){
                    return '/' + context.match[1] + context.match[2] + '.html' 
                }
            }]
        }, //根据uri匹配路径
        proxy:{
            '/':{
                // target:'https://m.weibo.cn',
                // changeOrigin:true, //设置跨域信息，
                // logLevel:'debug',//调试
                // pathRewrite:{ //代理路径
                //     '^/comments':'/api/comments'
                // },
                // headers:{ //给代理加认证身份
                //     'Cookie':'xxx'
                // }
            }
        }
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin(), //开启模块热更新
      new webpack.NamedModulesPlugin()//开启模块热更新
    ]
}