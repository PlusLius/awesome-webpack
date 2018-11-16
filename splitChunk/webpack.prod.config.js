let HTMLWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
const UglifyJs = require('uglifyjs-webpack-plugin') //压缩

module.exports = {
    context:__dirname,
    mode:'production',
    entry:{
        'app':'./src/index'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:[
                    path.resolve(__dirname,'src')
                ],
                use:[
                    {
                        loader:'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            filename:'index.html',
            inject:true,
            template:path.resolve(__dirname,'index.html')
        })
    ],
    optimization:{
        // minimize:false //打包压缩控制
        minimizer:[
            // new UglifyJs({
            //     uglifyOptions:{
            //         keep_classnames:true,
            //         keep_fnames:true,
            //         ecma:6,
            //         cache:true,
            //         parallel:true
            //     }
            // })
        ],
        runtimeChunk:true, //提取webpack内置代码
        splitChunks:{ //代码切换用于提取公共代码块
            name:true,
            minSize:0,
            cacheGroups:{ //提取第三方库代码块
                preact:{
                    // test:/(preact)|(loadash)/,
                    test:/preact/,
                    chunks:'initial'
                },
                loadash:{
                    test:/lodash/,
                    chunks:'all'
                }
            }
        }
    }
}