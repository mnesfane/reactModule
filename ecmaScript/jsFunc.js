function sayHello(){
    console.log('h1')
    // return function(){
    return ()=>{
        console.log('h2')
    }
}

let fn = (sayHello())
fn()