// function promiseRace(promises) {
//     return new Promise((resolve, reject) => {
//         promises.forEach(p =>
//             Promise.resolve(p)
//                 .then(res => {
//                     resolve(res)
//                 })
//                 .catch(rej => reject(rej))
//         )
//     })
// }
//
// const a = [1,2,3,4,5,6,7,8,9]
// const c = a.filter(item=> {
//     return item>5
//     }
// )
// console.log(c)

const a =(defaultSelectedRowKeys,dataSource,primaryKey)=>{
    let selectedRowKeys = [];
    if ((defaultSelectedRowKeys.length !== 0) && (dataSource.length !== 0)) {
        selectedRowKeys = defaultSelectedRowKeys.filter(
            item => !!dataSource.find(j => j[primaryKey] === item)
        );
    }
    return selectedRowKeys
}

const defaultSelectedRowKeys = [

]
