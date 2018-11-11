# 打包ES6文件

```
1. cnpm install babel-loader@8.0.0-beta.0 @babel/core
处理es6文件

2. cnpm install @babel/preset-env --save-dev //设置preset指定babel-loader将文件打包成指定的样子

3.cnpm install babel-polyfill  --save-dev//全局垫片下载后直接主入口引入即可,为开发应用而准备
4.cnpm install @babel/plugin-transform-runtime  @babel/runtime  --save-dev //局部垫片，为开发框架而准备 .babelrc进行配置

6.编写webpack配置文件，使用全局垫片babel-polyfill的配置
module:{
    rules:[
        {
            test:/\.js$/,
            use:{
                loader:'babel-loader',
                options:{  //options + loader一起出现
                    presets:[ //下载@babel/presets-env告诉babel-loader根据浏览器版本进行es6语法支持
                        ['@babel/presets-env',{
                            targets:{
                                browsers:['last 2 versions']
                            }
                        }]
                    ]
                }
            },
            exclude:/node_modules/ //排除调node_modules转译
        }
    ]
}

7. 使用babel-runtime的配置
//.babelrc
{ 
    "presets":[ 
        ["@babel/presets-env",{
            "targets":{
                browsers:["last 2 versions"]
            }
        }]
    ],  
    "plugins":["transform-runtime"]       
}
```
