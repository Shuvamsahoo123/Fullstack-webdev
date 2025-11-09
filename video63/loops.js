let a = [2,56,5,98,8,4,3,2,1,0];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

a.forEach((value, index, array) => {
    console.log(value, index, array);
});