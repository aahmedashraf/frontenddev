// const circle = {
//   redius: 1,
// };
// // circle.colour = "yellow";
// circle.draw = function () {
//   console.log("draw");
// };
// delete circle.colour;

// console.log(circle);

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("hehe");
//   };
// }
// const another = new Circle(1);

//enumurating
// for (let key in circle) {
//   console.log(key, circle[key]);
// }

//cloning an object
// const another = {};
// for (let key in circle) {
//   another[key] = circle[key];
// } //is equivalent to the below
// another1 = Object.assign({}, circle);
// console.log(another);

//template literal ` $(name)
// const another = ` this is my
// first message`;
// console.log(another);

// const date = new Date();
// const date1 = new Date("July 2 2022 11:22");
// //on console; date1.toDateString()

//Ex1
// const address = {
//   Street: "Saadilane",
//   city: "Karachi",
//   zip: 75500,
// };

// function showaddress() {
//   for (let key in address) {
//     console.log(address[key]);
//   }
// }
// showaddress(address);

// ex2
// function address(street, city, zip) {
//   return { street, city, zip };
// }
// let add = address("a", "b", "c");
// console.log(add);

// function Address1(street1, city1, zip1) {
//   this.street1 = street1;
//   this.city1 = city1;
//   this.zip1 = zip1;
// }
// let add1 = new Address1("a", "b", "c");
// console.log(add1);

//Ex3
// function Address1(street1, city1, zip1) {
//   this.street1 = street1;
//   this.city1 = city1;
//   this.zip1 = zip1;
// }
// let address1 = new Address1("a", "b", "c");
// let address2 = new Address1("a", "b", "c");

// function isequal(address1, address2) {
//   return (
//     address1.street1 === address2.street1 &&
//     address1.city1 === address2.city1 &&
//     address1.zip1 === address2.zip1
//   );
// }
// console.log(isequal(address1, address2));
// console.log(issame(address1, address2));

// function issame(address1, address2) {
//   return address1 == address2;
// }
// issame();
//ex4
// let post = {
//   title: "a",
//   body: "b",
//   author: "c",
//   views: 10,
//   comments: [
//     { author: "a", body: "b" },
//     { author: "b", body: "c" },
//   ],
//   islive: true,
// };
// console.log(post);

//ex5
// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = 0;
//   this.comments = [];
//   this.islive = false;
// }
// let post = new Post("a", "b", "c");
// console.log(post);

// let pricerange = [
//   { label: "$", tooltip: "inexpensive", minprice: 0, maxprice: 10 },
// ];
// let resteraunts = [{ avgpp }];
