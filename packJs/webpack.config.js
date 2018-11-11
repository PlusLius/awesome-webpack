const path = require('path');
module.exports = {
    context:__dirname,
    mode:'development',
    devtool:'inline-source-map',
    entry: {
        app:'./app.js'
    },
    output: {
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}