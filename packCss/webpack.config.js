const path = require('path');

module.exports = {
    context: __dirname,
    mode:"development",
    resolve:{
        extensions:['.js']
    },
    entry:{
        app:'./app'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                      loader:'style-loader'
                    },
                    {
                      loader:'css-loader'
                    }
                ]
            }
        ]
    }
}