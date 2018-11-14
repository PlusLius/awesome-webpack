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
    module:{
        rules:[
            {
                test:/\.(jpg|jpeg?|png|gif)$/,  
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit: 1000, //1024B = 1024KB 
                            useRelativePath:true,
                            publicPath:"./imgs"
                        }
                    }
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader', //处理html图片路径
                        options:{
                            attrs:['img:src','img:data-src']
                        }
                    }
                ]
            }
        ]
    },  
    plugins:[
      new HtmlWebpackPlugin({
          filename:'index.html',
          template:'./index.html',
          inject:true,
          chunks:['app'], //指定入口chunk是否插入页面
          minify:{
            //   collapseWhitespace:true //压缩html
          }
      })
    ]
}