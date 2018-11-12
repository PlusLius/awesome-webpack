const path = require('path');

module.exports = {
    context:__dirname,
    mode:'development',
    entry:{
        app:'./app.js'
    },
    output:{
        filename:"[name][hash:8].js",
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:'/node_modules/',
                use:{
                    loader:'babel-loader',
                    // options:{
                    //     presets:[
                    //         [
                    //             '@babel/preset-env',
                    //             {
                    //                 targets:{
                    //                    browsers:['last 2 versions']
                    //                 }
                    //             }
                    //         ],
                        
                    //     ]
                    // },
                },
               
            }
        ]
    }
}