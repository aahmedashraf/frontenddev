// const numbers = [3, 4];

// numbers.unshift(1, 2);

// console.log(numbers);
// numbers.splice(2, 0, "a", "b");
// console.log(numbers.includes(1));
// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];
// const course = courses.find(function (course) {
//   return course.name === "a";
// });
// console.log(course);

//ex1
// function arrayfromrange(min, max) {
//   let arr = [];
//   let count = 0;
//   for (let i = min; i <= max; i++) {
//     arr[count] = i;
//     count++;
//   }
//   return arr;
// }
// const numbers = arrayfromrange(-10, 4);
// console.log(numbers);
//ex2
// const numbers = [1, 2, 3, 4];
// function includes(array, search) {
//   let contains = false;
//   for (let i in array) {
//     if (array[i] === search) {
//       contains = true;
//       break;
//     }
//   }
//   return contains;
// }
// console.log(includes(numbers, 4));
//ex3
// const numbers = [1, 2, 3, 4, 4];
// function except(array, remove) {
//   for (let i in remove) {
//     for (let j in array) {
//       if (remove[i] === array[j]) {
//         array.splice(j, 1);
//       }
//     }
//   }
//   return array;
// }
// const ans = except(numbers, [3, 4]);
// console.log(ans);
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1);
// console.log(arr);
// function move(array, index, offset) {
//   array.splice(index, 1);//remove 1 element
//   array.splice(offset,0\,)
// }

function occurence(array, element) {
  let count = 0;
  for (let i in array) {
    if (array[i].includes(element)) {
      count++;
    }
  }
  return count;
}
const numbers = [1, 2, 3, 1, 2, 4, 1, 1];
console.log(occurence(numbers, 1));
