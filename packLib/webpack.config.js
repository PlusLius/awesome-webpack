const path = require('path');
const webpack = require('webpack')

module.exports = {
    context: __dirname,
    mode:"development",
    resolve:{
        extensions:['.js'],
        alias:{
            jquery$:path.resolve(__dirname,'./jquery.min.js')
        }
    },
    module:{
        rules:[
            {
                loader:'imports-loader',
                options:{
                    $:'jquery'
                }
            }
        ]
    },
    entry:{
        app:'./app'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,"dist")
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery"
        })
    ]
}