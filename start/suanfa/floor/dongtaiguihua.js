function getFloorWays(n) {
    if(n<1){
        return 0;
    }
    if(n===1){
        return 1;
    }
    if(n===2){
        return 2;
    }
    let a = 1;
    let b = 2;
    let temp = 0;

    for(let i=3;i<=n;i++){
        temp = a+b;
        a=b;
        b=temp;
    }
    return temp
}

console.log(getFloorWays(10))
