// // Arrow function tương đương
// const sumArrow = (a, b) => {
//   return a + b;
// };


// //rút gọn lại
// const sumShort = (a, b) => a + b;

// function tinhTong(a, b) {
//     const c = a + b;
//     return c;
// };

// const displayFullName = (firstName, lastName) => {
//     `Họ và tên: ${firstName} ${lastName}`;
// };
// const sumAb = (a, b) => {
//     const a2 = a * b;
//     return a2 + b;
// }; // tong a va b return

// const createUser = (name, age) => ({ name, age });


// LAB 3
// chuyển đổi hàm thông thường sang arrow function
// Bài Tập 1: Chuyển đổi hàm
// funtion 1
const multiply = (a, b) => a * b;
// funtion 2
const isPositive = (number) => number > 0;
// funtion 3
const getRandomNumber = () => Math.random();
// funtion 4
// document.addEventListener("click", () => {
//     console.log("Clicked!");
// });




// Bài Tập 2: sử dụng default parameters
const createUser = (name = "Anonymous", age = 18, isAdmin = false) => ({
  name,
  age,
  isAdmin,
});
console.log("createUser:", createUser());


// Bài Tập 3: rest và spread
// hàm hợp mergeArrays nhât nhiều mảng lại
const mergeArrays = (...arrays) => [].concat(...arrays);
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log("mergeArrays:", mergeArrays([1,2], [3,4], [5,6]));
// hàm sumAll tính tổng tất cả các số truyền vào 
const sumAll = (...numbers) => numbers.reduce((sum, n) => sum + n, 0);
console.log(sumAll(1, 2, 3, 4, 5));
console.log("sumAll:", sumAll(1,2,3,4,5));
// hàm createProduct nhận thông tin sản phẩm và trả về object sản phẩm với giá trị mặc định
const createProduct = (name = "Unknown", price = 0, stock = 0) => ({
  name,
  price,
  stock,
});
console.log(createProduct("iPhone", 20000, 10));
console.log(createProduct());




// Bài Tập 4: Ứng dụng thực tế
// tạo hàm shoppingCart
const shoppingCart = (customerName, ...products) => ({
    customerName,
    products,
    total: products.length,
});
console.log(shoppingCart("Hiếu", "iPhone", "Samsung", "Oppo"));
