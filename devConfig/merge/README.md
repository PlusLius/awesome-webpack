# 将生成环境和开发环境合并

```
1. 区分生成环境与开发环境
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
      
2. cnpm i -D webpack-merge
```