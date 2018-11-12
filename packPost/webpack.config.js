const path = require('path');

module.exports = {
    context: __dirname,
    mode:"development",
    resolve:{
        extensions:['.js','.less']
    },
    entry:{
        app:'./app.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
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
                            // require('autoprefixer')(),
                            require('postcss-cssnext')(),
                        ]
                      }
                    },
                    {
                      loader:'less-loader'
                    }
                ]
            }
        ]
    }
}