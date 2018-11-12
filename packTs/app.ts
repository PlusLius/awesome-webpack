import * as _ from "lodash";
const NUM = 8
console.log(_.chunk(6))
interface Cat {
    name:String,
    gender:String
}

function touchCat (cat:Cat){
    console.log('miao~ ',cat.name)
}

touchCat({
    name:'tom',
    gender:'male'
})