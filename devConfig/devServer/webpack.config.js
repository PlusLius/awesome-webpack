const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')


module.exports = {
    context: __dirname,
    devtool:'cheap-module-source-map',
    mode:"development",
    devServer:{
        overlay:true,//报错浏览器显示
        hot:true,//开启模块热更新
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        // inline:false,
        historyApiFallback:{
            rewrites:[{
                from:/^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
                to:function(context){
                    return '/' + context.match[1] + context.match[2] + '.html' 
                }
            }]
        }, //根据uri匹配路径
        proxy:{
            '/':{
                target:'https://m.weibo.cn',
                changeOrigin:true, //设置跨域信息，
                logLevel:'debug',//调试
                pathRewrite:{ //代理路径
                    '^/comments':'/api/comments'
                },
                // headers:{ //给代理加认证身份
                //     'Cookie':'xxx'
                // }
            }
        }
    },
    resolve:{
        extensions:['.js'],
        alias:{
            'jquery$':path.resolve(__dirname,'jquery.min.js')
        }
    },
    entry:{
        app:'./app'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,"dist"),
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:[path.resolve(__dirname,'dist')],
                use:[
                    // {
                    //     loader:'babel-loader',
                    //     options:{
                    //         presets:['env']
                    //     }
                    // },

                    {
                        loader:'eslint-loader',
                        options:{
                            fomatter:require('eslint-friendly-formatter')
                        }
                    }
                ]
            },
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
                            require('postcss-cssnext')()
                            ]
                        }
                    },
                    {
                        loader:'less-loader'
                    }
                ]
            },
            {
                test:/\.(jpg|jpeg?|png|gif)$/,  
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit: 1000, //1024B = 1024KB 
                            useRelativePath:true, //使用相对路径转换后的css保持相对路径
                            // publicPath:"../imgs" //相当于绝对路径
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
      }),
      new HtmlWebpackPlugin({
        filename:'pages/a.html',
        template:'pages/a.html',
        inject:true,
        minify:{
          //   collapseWhitespace:true //压缩html
        }
        }),
      new cleanWebpackPlugin(['dist']),
      new ExtractTextWebpackPlugin({
        filename:"css/[name].min.css"
      }),
      new webpack.ProvidePlugin({
          '$':'jquery'
      }),
      new webpack.HotModuleReplacementPlugin(), //开启模块热更新
      new webpack.NamedModulesPlugin()//开启模块热更新
    ]
}