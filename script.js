// let pro1 = {
//     username: 'username1',
//     email: 'email1',
//     print : function (city) {
//         return `Your username is ${this.username} and email is ${this.email} and you belongs to ${city}`
//     }
// }

let pro1 = {
    username: 'username1',
    email: 'email1',
}

let pro2 = {
    username: 'username2',
    email: 'email2',
}

function print(city) {
    return `Your username is ${this.username} and email is ${this.email} and you belongs to ${city}`
};

console.log(print.call(pro1, 'bhopal'))
// let res= pro1.print.call(pro2, 'indore');
// console.log(res)

// let res= pro1.print.apply(pro2, ['indore']);
// console.log(res)

let res= print.bind(pro2);
console.log(res('indore'))