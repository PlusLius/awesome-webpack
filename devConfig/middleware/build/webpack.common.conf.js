const path = require('path');
const productionConfig = require('./webpack.prod.conf')
const developmentConfig = require('./webpack.dev.conf')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = env => {
    let config = env === 'production' ? productionConfig : developmentConfig
    return merge(generateConfig(env),config)
}

const generateConfig = env => {
    const extractLess = new ExtractTextWebpackPlugin({
        filename:"css/[name].min.css"
      })

    const scriptLoader = [].concat(env === 'production' ? [] : [{
            loader:'eslint-loader',
            options:{
                fomatter:require('eslint-friendly-formatter')
            }
    }])

    const cssLoaders = [
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
                   require('postcss-cssnext')()
                ]
            }
        },
        {
            loader:'less-loader'
        }
    ]

    const fileLoader = env === 'production' ? [{
        loader:'file-loader',
        options:{
            name:'[name]-[hash:5].[ext]',
            outputPath:'/dist/imgs/'
        }
    }] :  [{
        loader:'url-loader',
        options:{
            name:'[name]-[hash:5].[ext]',
            limit: 1000, //1024B = 1024KB 
            useRelativePath:true, //使用相对路径转换后的css保持相对路径
            // publicPath:"../imgs" //相当于绝对路径
        }
    }]
    
    const styleLoader = env === 'production' ? extractLess.extract({
        fallback:'style-loader',
        use:cssLoaders
    }) : [{
        loader:'style-loader'
    }].concat(cssLoaders)

    return {
        mode: env ? 'development' : 'production',
        context: path.join(__dirname,"../"),
        plugins:[
            extractLess,
            new HtmlWebpackPlugin({
                filename:'index.html',
                template:'./index.html',
                inject:true,
                //chunks:['app'], //指定入口chunk是否插入页面
                minify:{
                  //   collapseWhitespace:true //压缩html
                }
            }),
            new webpack.ProvidePlugin({
                '$':'jquery'
            }),
        ],
        resolve:{
            extensions:['.js'],
            alias:{
                'jquery$':path.join(__dirname,'../jquery.min.js')
            }
        },
        entry:{
            app:'./app'
        },
        output:{
            filename:'[name].js',
            path:path.resolve(__dirname,"../dist"),
            publicPath:'/'
        },
        module:{
            rules:[
                {
                    test:/\.less$/,
                    use:styleLoader
                },
                {
                    test:/\.js$/,
                    include:[path.resolve(__dirname,'dist')],
                    use:scriptLoader
                },
                {
                    test:/\.(jpg|jpeg?|png|gif)$/,  
                    use:fileLoader.concat(env === 'production' ? {
                        loader:'img-loader',
                        options:{
                            pngquant:{
                                quality:80
                            }
                        }
                    }: []) 
                },
                {
                    test:/\.(eot|woff2?|woff|ttf|svg)$/,
                    use:fileLoader
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
        }
    }
}