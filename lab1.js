//bài 1
function calculateBMI(weight, height) {

  const bmi = weight / (height * height);

 
  let category = "";

  if (bmi < 18.5) category = "Thiếu cân";
  else if (bmi < 25) category = "Bình thường";
  else if (bmi < 30) category = "Thừa cân";
  else category = "Béo phì";

  return `BMI: ${bmi.toFixed(2)} - Phân loại: ${category}`;
}

// Ví dụ chạy thử
console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(50, 1.6));
console.log(calculateBMI(90, 1.7));

//bài 2

function createBook(title, author, year, price) {
  // computed property name ví dụ tạo key động cho năm xuất bản
  const yearKey = "published_" + year;

  return {
    // shorthand properties
    title,
    author,
    year,
    price,
    [yearKey]: true, // computed property name

    // method lấy thông tin sách
    getBookInfo() {
      return `Sách: ${this.title} - Tác giả: ${this.author} - Năm: ${this.year} - Giá: ${this.price.toLocaleString()}đ`;
    },

    // method tính giá sau khi giảm
    calculateDiscount(discountPercent) {
      const discountedPrice = this.price * (1 - discountPercent / 100);
      return `Giá sau khi giảm ${discountPercent}%: ${discountedPrice.toLocaleString()}đ`;
    },
  };
}

// Ví dụ sử dụng
const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));
