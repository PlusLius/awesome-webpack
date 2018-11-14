## 搭建开发环境

```
1. webpack watch mode
    webpack -watch
    webpack -w

2. webpack-dev-server
   live reloading
   路径重定向
   https
   浏览器中显示编译报错
   接口代理
   模块热更新
   deverServer
       inline
       contentBase
       port
       historyApiFallback
       https
       proxy
         options
            target
            changeOrigin
            headers
            logLevel
            pathRewrite
       hot 
            module.hot
            module.hot.accept
            module.hot.decline
            //生效必须加上2个插件
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
            //css默认热更新是通过sytle-loader进行的
       openpage
       lazy
       overlay //配合EsLint使用
       sourcemap调试
          Devtool
             eval
             eval-source-map
             cheap-eval-source-map
             cheap-module-eval-source-map
          Production
             source-map
             css-loader.option.sourcemap
             less-loader.option.sourcemap
             sall-loader.option.sourcemap

          webpack.SourceMapDevToolPlugin
          webpack.EvalSourceMapDevToolPlugin
        EsLint 检查代码格式
          eslint
            配置EsLint
            webpack config
            .eslintrc.*
            package.json中的eslintConfig
          eslint-loader
            options.failOnWarning
            options.failOnError
            options.formatter
          eslint-plugin-html //html里的js风格检测
          eslint-friendly-formatter //报错输出警告
       

3. express + webpack-dev-middleware

4. cnpm i -D clean-webpack-plugin

5. cnpm i -D webpack-dev-server

6. cnpm i -D eslint eslint-loader eslint-plugin-html eslint-friendly-formatter
   cnpm i -D eslint-config-standard eslint-plugin-promise eslint-plugin-node eslint-plugin-import eslint-plugin-standard

7. 区分生成环境与开发环境
    开发环境
      模块热更新
      sourceMap
      接口代理
      代码规范检测
    生产环境
      提取公用代码
      压缩混淆
      文件压缩，或是base64编码
      去除无用的代码
    共同点
      同样的入口
      同样的代码处理(loader处理)
      同样的解析配置
    如何做
      webpack-merge
      webpack.dec.conf.js
      webpack.prod.conf.js
      webpack.common.conf.js

```