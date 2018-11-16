import 'preact'
import 'lodash'

class Hello {
    constructor(x,y){
        console.log("HELLO WORLD")
    }
}

let hello = new Hello()
console.log(hello)

// import { add } from "./modules/moduleA"
// add(1,2)
// add(3,4)

// console.log(Hello)
// import(/* webpackChunkName: "moduleA" */'./modules/moduleA.js');

//处理动态import合并，改变chunkName即可
import(/* webpackChunkName: "moduleA" */'./modules/moduleB.js');
import(/* webpackChunkName: "moduleA" */'./modules/moduleC.js');
import(/* webpackChunkName: "moduleA" */'./modules/moduleD.js');

