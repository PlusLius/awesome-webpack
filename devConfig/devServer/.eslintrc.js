module.exports = {
    root:true,
    extends:'standard',
    plugins:[
        'html',

    ],
    env:{
        browser:true,
        node:true
    },
    rules:{
        indent:['error',4],
        'eol-last':['erroe','never']
    }
}