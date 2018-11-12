# 打包less文件

```
1. cnpm i -D less-loader less sass-loader node-sass

2. webpack配置
const path = require('path');

module.exports = {
    context: __dirname,
    mode:"development",
    resolve:{
        extensions:['.js','.less']
    },
    entry:{
        app:'./app.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.less$/, 
                use:[ //如果项目要混用less和css可以单独配置一个rule，loader解析顺序从后往前解析
                    {
                      loader:'style-loader'
                    },
                    {
                      loader:'css-loader'
                    },
                    {
                      loader:'less-loader'
                    }
                ]
            }
        ]
    }
}

```