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