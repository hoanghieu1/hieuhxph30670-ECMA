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

