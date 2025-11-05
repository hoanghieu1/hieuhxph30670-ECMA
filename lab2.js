// bai 1
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Kết quả: 0, 1, 2
  }, 100);
}


//bai 2
const student = {
  name: "ThuyTien",
  age: 20,
};

// 1. Thêm thuộc tính grade
student.grade = "A";

// 2. Thay đổi tuổi
student.age = 21;

// 3. In ra toàn bộ thông tin
console.log(student);



// Bài 1: Tạo email template
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName},

Cảm ơn bạn đã đặt hàng sản phẩm: ${user.product}.
Giá trị đơn hàng: ${user.price.toLocaleString()}₫
Ngày đặt hàng: ${user.orderDate}

Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đơn hàng.

Trân trọng,
Đội ngũ bán hàng FPT Shop
`;

console.log(emailTemplate);


// Bài 2: Tạo HTML template cho card sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `
<div class="product-card">
  <h2>${product.name}</h2>
  <p>Giá gốc: <s>${product.price.toLocaleString()}₫</s></p>
  <p>Giảm giá: ${product.discount}%</p>
  <p><strong>Giá sau giảm:</strong> ${finalPrice.toLocaleString()}₫</p>
  <p>Trạng thái: ${
    product.inStock ? "<span style='color:green'>Còn hàng</span>" : "<span style='color:red'>Hết hàng</span>"
  }</p>
</div>
`;

console.log(productCard);



// Bài 1: Sử dụng property và method shorthand
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width,
  height,
  color,


  calculateArea() {
    return this.width * this.height;
  },

  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};


console.log(rectangle.describe());
console.log("Diện tích:", rectangle.calculateArea());




// Bài 2: Sử dụng computed properties
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

const config = {
 
  [`api_${env}_${version}`]: `https://api.example.com/${env}/${version}`,

  ...features.reduce((acc, feature) => {
    acc[`feature_${feature}`] = true;
    return acc;
  }, {}),


  [`get${env.charAt(0).toUpperCase() + env.slice(1)}Config`]() {
    return `Cấu hình môi trường: ${env}, version: ${version}`;
  },
};

console.log(config);
console.log(config.getProductionConfig());



