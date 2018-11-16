module.exports = {
    '/.+':{
        target:'https://m.weibo.cn',
        changeOrigin:true, //设置跨域信息，
        logLevel:'debug',//调试
        pathRewrite:{ //代理路径
            '^/comments':'/api/comments'
        },
        headers:{ //给代理加认证身份
            'Cookie':'xxx'
        }
    }
}
