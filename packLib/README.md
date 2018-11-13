# 处理第三方js库

```
1. 远程cdn引入
2. 本地webpack.ProvidePlugin注入第三方变量
3. 本地node_modules中没有jquery,通过resolve
4. cnpm i -D imports-loader 用来imports就可以不用ProvidePlugin
5. webpack配置
const path = require('path');
const webpack = require('webpack')

module.exports = {
    context: __dirname,
    mode:"development",
    resolve:{
        extensions:['.js'],
        alias:{
            jquery$:path.resolve(__dirname,'./jquery.min.js')
        }
    },
    module:{
        rules:[
            {
                loader:'imports-loader',
                options:{
                    $:'jquery'
                }
            }
        ]
    },
    entry:{
        app:'./app'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,"dist")
    },
    plugins:[
        // new webpack.ProvidePlugin({
        //     $:"jquery"
        // })
    ]
}
```