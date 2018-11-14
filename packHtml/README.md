# 生成html

```
1. 自动生成html
2. 场景优化
3. htmlWebpackPlugin
     options
          template
          filename
          minify
          chunks
          inject
4. cnpm i -D html-webpack-plugin
5. HTML中引入图片 html-loader
     options 
        attrs:[img:src]
6. cnpm i -D html-loader
7. 实际作用就是转换html各种src但是自己不转换需要url-loader转换
8. webpack配置

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
```