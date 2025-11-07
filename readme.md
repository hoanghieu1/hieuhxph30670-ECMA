Hướng Dẫn Sử Dụng Git cơ bản
1. Cài đặt Git
Trên Windows:
Tải Git từ trang chính thức: https://git-scm.com/downloads Cài đặt theo hướng dẫn mặc định.

2. Cấu hình git lần đầu
Tại Command Prompt(cmd)

  git config --global user.name "Tên của bạn"
  git config --global user.email "email@example.com"
Kiểm tra cấu hình:

  git config --list


3. CÁC LỆNH CƠ BẢN
Khởi tạo git:

  git init
Sao chép (clone) một dự án từ GitHub:

  git clone https://github.com/tai-khoan/ten-repo.git
Kiểm tra trạng thái:

  git status
Làm việc với nhánh
Tạo nhánh mới:

  git branch ten-nhanh
Chuyển sang nhánh khác

  git checkout ten-nhanh
Tạo và chuyển sang nhánh mới

  git checkout -b ten-nhanh
Gộp nhánh

  git checkout main
  git merge ten-nhanh
Push code (Đẩy code lên github)
  git add .
  git commit -m "mô tả commit làm cái gì"
  git push origin ten-nhanh
Pull code (Lấy code từ main)
  git pull origin main

sau khi sửa code và đẩy lại lên git
git add .
git commit -m "mô tả"
git push
