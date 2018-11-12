## postcss 

```
1.插件
  Autoprefixer //写兼容的,
  css-nano //css压缩,
  css-next //使用css未来的语法

2.cnpm i -D postcss postcss-loader autoprefixer cssnano postcss-cssnext

3.webpack配置
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
                use:[
                    {
                      loader:'style-loader'
                    },
                    {
                      loader:'css-loader'
                    },
                    {
                      loader:'postcss-loader',
                      options:{
                        ident:'postcss',
                        plugins:[
                            // require('autoprefixer')(),
                            require('postcss-cssnext')(),
                        ]
                      }
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