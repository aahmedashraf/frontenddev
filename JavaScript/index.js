// console.log("Ola Senorita");
// let namee = "Aahmed";
// console.log("Unnn");
// const id = "2128559";
// console.log(id);
// //object
// let person = {
//   namee,
//   age: 21,
//   id,
// };
// console.log(person);
// //dot notation
// person.namee = "Hasnain";
// console.log(person.namee);
// //arrays
// let selectedcolors = ["red", "yellow"];
// selectedcolors[2] = "green";
// console.log(selectedcolors);
// //function
// function greet(name) {
//   console.log("hellow " + name);
// }
// greet("aahmeds");

// let a = "red";
// let b = "blue";
// let c;

// console.log(a);
// console.log(b);

// c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// const colors = ["red", "yellow", "green"];
// for (let index in colors) {
//   console.log(index, colors[index]);
// }

// for (let color of colors) {
//   console.log(color);
// }

// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// let ans = max(2, 3);
// console.log(ans);

// function islandscape(width, height) {
//   let anss = width > height ? "landcape" : "portrait";
//   return anss;
// }

// let ansss = islandscape(2, 3);
// console.log(ansss);

// function fizzbuzz(num) {
//   if ((num / 3) % 1 === 0 && (num / 5) % 1 === 0) {
//     return "Fizzbuzz";
//   } else if ((num / 3) % 1 === 0 && (num / 5) % 1 != 0) {
//     return "fizz";
//   } else if ((num / 3) % 1 != 0 && (num / 5) % 1 === 0) {
//     return "Buzz";
//   } else if (typeof num !== "number") {
//     return "not a number";
//   } else if ((num / 3) % 1 != 0 && (num / 5) % 1 != 0) {
//     return num;
//   }
// }
// console.log(fizzbuzz("bla"));
// function checkspeed(numb) {
//   let points = 0;
//   if (numb <= 74) {
//     return "ok";
//   }

//   let subtracted = numb - 70;
//   points = subtracted / 5;
//   if (points >= 12) {
//     return "License Suspended";
//   } else {
//     return Math.floor(points);
//   }
// }
// console.log(checkspeed(70));

// function evenorodd(max) {
//   let val;
//   for (let i = 1; i <= max; i++) {
//     if (i % 2 == 0) {
//       val = "even";
//     } else {
//       val = "odd";
//     }
//     console.log(i, val);
//   }
// }
// evenorodd(15);

// const array = [1, "", 4, 6, 7, , 0, "john"];

// function counttruthy(arr) {
//   let truthy = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i]) {
//       truthy++;
//     }
//   }
//   return truthy;
// }
// console.log(counttruthy(array));

// const Employee = {
//   name: "Aahmed",
//   Age: 21,
//   Lastname: "Ashraf",
// };

// function showprop(obj) {
//   for (let i in obj) {
//     if (typeof obj[i] === "string") {
//       console.log(i, obj[i]);
//     }
//   }
// }
// showprop(Employee);
// function sum(num) {
//   let ans, ans1;
//   let total = 0;
//   for (let i = 1; i < num; i++) {
//     ans = 3 * i;
//     if (ans > num) {
//       break;
//     }
//     total += ans;
//   }
//   for (let j = 1; j < num; j++) {
//     ans1 = 5 * j;
//     if (ans1 > num) {
//       break;
//     }
//     total += ans1;
//   }
//   return total;
// }
// console.log(sum(10));

// function calcgrade(arr) {
//   let total = 0;
//   let avg;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   avg = total / arr.length;

//   switch (true) {
//     case avg >= 1 && avg <= 59:
//       return "F";
//     case avg >= 60 && avg <= 69:
//       return "D";
//     case avg >= 70 && avg <= 79:
//       return "C";
//     case avg >= 80 && avg <= 89:
//       return "B";
//     case avg >= 90 && avg <= 100:
//       return "A";
//   }
// }
// array = [66, 76, 90, 50];
// console.log(calcgrade(array));

// function showstars(rows) {
//   for (let i = 1; i <= rows; i++) {
//     for (let j = 0; j < i; j++) {
//       document.write("*");
//     }
//     document.write("<br />");
//   }
// }
// showstars(8);

// function showprimes(num)
// {
//    for (let i = 2; i <= num; i++)
//    {
//       for (let j = 1; j <= i; j++)
//       {
//         for (let k = 1; k <= i; k++)
//          {
//           j*k
//          }
//       }
//    }
// }
