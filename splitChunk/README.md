## webpack4 

```
mode
 --production
 --development
 --none
零配置
optimization.splitChunks
optimization.minimizer(uglifyjs) //uglifyjs废弃

1. src目下建文件即可，运行命令即可自动打包
2. 配置生产环境webpack --mode production,配置开发环境 webpack-dev-server --mode development

3. 报错处理 Support for the experimental syntax 'dynamicImport' isn't currently enabled (7:1):

cnpm i -D  babel-plugin-syntax-dynamic-import

.babelrc 中加上插件

{
    "plugins": ["syntax-dynamic-import"]}
这样就解决这个问题了！

4. cnpm i -D uglifyjs-webpack-plugin
5. cnpm i -D preact
6. cnpm i -D lodash

7. webpack4可以零配置运行
   支持tree shaking ES6
   runtimeChunk提取webpack内置代码到单独模块
   splitChunks切分代码块
```