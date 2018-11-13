const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
    context: __dirname,
    mode:"development",
    entry:{
        app:'./src/app'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.(eot|woff2?|woff|ttf|svg)$/,
                use:[
                    {
                        loader:'url-loader' //处理字体文件
                    }
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    // {
                    //     loader:'file-loader',
                    //     options:{
                    //         useRelativePath:true,
                    //         publicPath:"../assets/imgs"
                    //     }
                    // },
                    {
                        loader:'url-loader',
                        options:{
                            // limit: 8024, //1024B = 1024KB 
                            useRelativePath:true,
                            publicPath:"../assets/imgs"
                        }
                    },
                    {
                        loader:'img-loader', //压缩图片
                        options:{
                            pngquant:{
                                quality:1024
                            }
                        }
                    }
                ]
            },
            {
                test:/\.less$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:{
                        loader:'style-loader'
                    },
                    use:[
                        {
                          loader:'css-loader'
                        },
                        {
                          loader:'postcss-loader',
                          options:{
                              ident:'postcss',
                              plugins:[
                                require('postcss-sprites')({
                                    spritePath:'packImg/dist/assets/imgs/sprites',
                                    retina:true //高清屏
                                }),
                                require('postcss-cssnext')()
                              ]
                          }
                        },
                        {
                          loader:'less-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin({
            filename:"css/[name].min.css"
        })
    ]
}