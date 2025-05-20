let user1={
    name:"rohit",
    age:20,
}
let user2={
    amount:200,
    money:1000,
}
user2.__proto__=user1;
console.log(user2.name);
