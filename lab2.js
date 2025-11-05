// var - function scoped
function varExample() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 - vẫn truy cập được
}

constExample();