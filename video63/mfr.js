let arr  =[1,13,2,4,5,6,88];
// let newArr = [];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element + 10);
// }

// console.log(newArr);

let newArr = arr.map((a)=>{
    return a + 10;
})
console.log(newArr);
const greaterThan5 = (value) => {
    if(value > 5){
        return true;
    }   
    else{
        return false;
    }
}
console.log(arr.filter(greaterThan5));