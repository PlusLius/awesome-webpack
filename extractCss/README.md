## 提取css插件

```
1. cnpm i --save extract-text-webpack-plugin 如果是4.0版本使用cnpm i --save extract-text-webpack-plugin@next 

2. 配置webpack
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
    context: __dirname,
    mode:"development",
    plugins:[
        new ExtractTextWebpackPlugin({
            filename:'[name].min.css',
        })
    ],
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
                test:/\.css$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback: { //不提取时怎么把css加载到页面中
                        loader:'style-loader'
                    },
                    use:[ //提取时用什么处理
                        {
                          loader:'css-loader'
                        }
                    ]
                })
            }
        ]
    }
}
```