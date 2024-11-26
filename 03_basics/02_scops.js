//just don't use var 
let a = 3000

if (true) {
    let a = 10
    const b = 20
    // console.log("inner:",a);
    
}


// console.log(a);

function one(){
    let userName = "jesse"
    function two() {
        let webSite = "youtube"
        console.log(userName);
        
    }
    // console.log(webSite);
    
    two()
}
one()

if (true) {
    const name = "jesse"
    if (name === "jesse") {
        let webSite = " youtube"
        console.log(name+webSite);
        
    }

    
}

//+++++++++++++interesting++++++++++++++++++++++++

function name(params) {
    
}