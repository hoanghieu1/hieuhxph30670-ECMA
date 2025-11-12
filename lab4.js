// const [variable1, variable2, ...rest] = array;

// const red = colors[0];// "red"
// ES6
// const [red, green, blue, yellow] = colors;

// console.log(red, green, blue, yellow);

// const numbers = [1, 2, 3, 4, 5];// red green blue yellow  undefined

// const  [, second, ,four] = numbers;
// console.log(second, four); // 2 4

// const user = ["password", "name", "age", "email"];

// const [ , name, , email] = user;
// console.log(name, email); // name email



                                                                        //LAB 4
                                                            // Bài tập Array Destructuring
// Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng

function getFirstLast([first, ...rest]) {
    const [last] = rest.slice(-1);
    return [first, last];
}
console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]

// Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng

function swapElements(arr) {
    const newArr = [...arr];
    [newArr[1], newArr[3]] = [newArr[3], newArr[1]];
    return newArr;
}
console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]




                                                            // Bài tập Object Destructuring
// Bài 1: Viết hàm extract thông tin user
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
  const {
    personalInfo: {
      name,
      contact: { email },
    },
  } = user;
  return { name, email };
}
console.log(getUserInfo(user));

// Bài 2: Viết hàm với tham số mặc định
function createProduct({ name, price, category = "general", inStock = true }) {
  return { name, price, category, inStock };
}
const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }



                                                            // Lập trình bất đồng bộ
// Bài 1: viết hàm delay trả về Promise
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
delay(2000).then(() => console.log("2 seconds passed"));

// Bài 2: Viết hàm fetchMultipleData

function fakeFetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: `Data from ${url}` }), 1000);
  });
}

function fetchMultipleData(urls) {
  const requests = urls.map((url) => fakeFetch(url));
  return Promise.all(requests);
}

fetchMultipleData(["/api/user/1", "/api/user/2"])
  .then((users) => console.log(users))
  .catch((err) => console.error("Error:", err));


                                                                 // Async/Await
// BÀI 1: Viết lại callback hell bằng async/await với API 
async function processOrder(userId) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) throw new Error("Không tìm thấy người dùng!");
    const user = await res.json();

    console.log("Thông tin người dùng:", user);
  } catch (error) {
    console.error("Lỗi khi xử lý đơn hàng:", error.message);
  }
}

// Test
processOrder(1);   //  Thành công
processOrder(9999); //  Lỗi (không có user này)


// BÀI 2: Xử lý lỗi với async/await
async function safeApiCall(apiFunction, ...args) {
  try {
    const result = await apiFunction(...args);
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message || error };
  }
}

// Hàm fetchData gọi API thật
async function fetchData(userId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!res.ok) throw new Error("Không tìm thấy dữ liệu!");
  const data = await res.json();
  return data;
}

// Test safeApiCall
(async () => {
  const res1 = await safeApiCall(fetchData, 2);
  console.log("Kết quả thành công:", res1);

  const res2 = await safeApiCall(fetchData, 9999);
  console.log("Kết quả lỗi:", res2);
})();

