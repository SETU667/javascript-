// const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(myArray.push(10));
// console.log(myArray.push(11));
// console.log(myArray.push(12));
// console.log(myArray.push(13));
// console.log(myArray);
// console.log(myArray.pop())
// let a=myArray.shift(5)
// let a=myArray.shift(5)
// const mysym = Symbol("key1");
// //objects
// const js = {
//   name: "setu",
//   [mysym]: "my key 1",
//   roolNo: 52,
//   location: "india",
//   email: "@gamail.com",
// };
// console.log(js.email);
// console.log(js["email"]);
// console.log(js["name"]);
// console.log( js[mysym]);

// js.email="setu"
// console.log(js.email);

// Object.freeze(js)
// console.log(js.email);

// js.email="singh"
// console.log(js.email);

// js.man = function () {
//   console.log("setu singh");
// };
// console.log(js.man());

// js.man2 = function () {
//   console.log(`hello js user, ${this.roolNo}`);
// };
// console.log(js.man2());

// const apple = new Object();
// //singleton oblject

// console.log(apple);

// const a = {}
// a.id="486"
// a.name="singh setu"
// console.log(a.id);

const user = {
  email: "@gamaial",
  fullname: {
    userfullname: {
      firstname: "singh setu",
    },
  },
};
console.log(user.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

const obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4);

const obj5 = [
  {
    id: 1,
    emaild: "setu@gmail.com",
  },
  {
    i2: 5,
    emild: "set@gmail.com",
  },
  {
    id: 1,
    emaild: "setu@gmail.com",
  },
  {
    id: 1,
    emaild: "setu@gmail.com",
  },
  {
    id: 1,
    emaild: "setu@gmail.com",
  },
];
console.log((obj5[1].emaild = "setu"));

const js = {
  name: "setu",
  roolNo: 52,
  location: "india",
  email: "@gamail.com",
};
console.log(Object.values(js));
console.log(Object.entries(js));
// console.log(js.hasOwnproperty('roolNo'));

