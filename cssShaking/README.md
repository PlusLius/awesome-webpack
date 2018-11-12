## Css Tree Shaking

```
1. purgecss-webpack-plugin
   https://github.com/FullHuman/purgecss-webpack-plugin
2. options
     path:glob.sync([])
     cnpm i -D glob-all --save-dev

3. 安装
    cnpm i -D purgecss-webpack-plugin glob-all

4. webpack配置
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const PATHS = {
    src: path.join(__dirname, 'src')
}

module.exports = {
    context: __dirname,
    mode:"development",
    plugins:[
        new ExtractTextWebpackPlugin({
            filename:'[name].min.css'
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
        })
    ],
    resolve:{
        extensions:['.js','.css']
    },
    entry:{
        app:'./src/app'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,"dist"),
        publicPath:__dirname
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