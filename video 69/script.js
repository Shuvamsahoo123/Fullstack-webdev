let a = 6

function factorial (number) {
    let arr = Array.from(Array(number+1).keys())
    console.log(arr);
    let c= arr.slice(1,).reduce((a, b)=>{
        return a*b
    })

    return c
}

factorial(a) 


function factfor(number) {
    let fact = 1
    for (let index = 1; index <= number; index++) {
        fact = fact * index
        
    }
    return fact
}

console.log(factfor(a));