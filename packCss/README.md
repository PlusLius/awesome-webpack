# 打包css

```
1. 处理css文件要用到css-loader,style-loader
2. 配置webpack配置文件
const path = require('path');

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
                test:/\.css$/,
                use:[ //处理多个loader时use使用数组
                    {
                      loader:'style-loader'
                    },
                    {
                      loader:'css-loader'
                    }
                ]
            }
        ]
    }
}
```