// filter/find/findIndex/every/some/reduce

let arr = [
    {name: 'name1', city: 'city1'},
    {name: 'name2', city: 'city2'},
    {name: 'name3', city: 'city3'},
    {name: 'name4', city: 'city4'},
]

// let res = arr.filter( e => {
//     return e.name !== 'name3';
// })

// console.log(res);

// let res = arr.find( e => {
//         return e.name == 'name3';
//     })
    
//     console.log(res);

// let res = arr.findIndex( e => {
//     return e.name == 'name3';
// })
// console.log(res);

// let res = arr.every( e => {
//     return e.name == 'name3';
// })

// console.log(res);

// let res = arr.some( e => {
//     return e.name == 'name3';
// })
// console.log(res);
// let temparr = [1,2,3,4,5]
// let res =  temparr
// .reduce( (ac, cv) => {
//     return ac + cv
// }, 3 )

// ac = 0;
// 0 + 1 = 1
// 1 + 2 = 3
// console.log(res);

let res = arr.reduce( (ac, cv) => {
    return {...ac, [cv.name]:cv}
} , {})

// ac = {}
// ac = {
//     name1: {name: 'name1', city: 'city1'}
// }
// ac = {
//    name1: {name: 'name1', city: 'city1'}
//    name2: {name: 'name2', city: 'city2'}
// }

console.log(res);