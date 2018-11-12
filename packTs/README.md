# 打包ts文件

```
1. 下载对应的ts-loader,并配置tsconfig
  cnpm install typescript ts-loader awesome-typescript-loader --save-dev
  (1)tsconfig.json
       配置选项：官网/docs/handbook/compiler-options.html
  (2)常用选项
       compilerOptions
       include
       outclude

2. 配置webpack
const path = require('path');

module.exports = {
    context:__dirname,
    mode:'development',
    resolve:{
        extensions:['.js','.ts']
    },
    entry:{
        app:'./app'
    },
    output:{
        filename:"[name][hash:8].js",
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:{
                    loader:'ts-loader'
                }
            }
        ]
    }
}
3. 配置tsconfig.json文件

4. 与js语法混用，cnpm install -D lodash
5. 声明文件，cnpm install -D @types/lodash @types/vue 用来检测传入类型 或者装 cnpm install typings -g, typings install lodash
{
  "compilerOptions": {
      "module": "commonjs",
      "target": "es5",
      "allowJs":true,
      "typeRoots":[ //配置声明文件查找入口，作用是检测接口
         "./node_modules/@type",
         "./typings/modules"   
      ]
  },
  "include":[
      "./*"
  ],
//   "exclude": [
//       "node_modules"
//   ]
}
```