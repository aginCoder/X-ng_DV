
# 🚗 Xưởng Dịch Vụ Ô Tô Phương Đông - Website

Đây là một website hoàn chỉnh cho xưởng dịch vụ ô tô Phương Đông với tính năng quản lý nội dung và responsive design.

---

## 📋 Tính Năng

### 👥 Cho Khách Truy Cập (Public)
- ✅ Trang chủ với logo và thông tin về công ty
- ✅ Danh sách các dịch vụ được cung cấp
- ✅ Thư viện ảnh các dự án hoàn thành
- ✅ Thông tin liên hệ (điện thoại, địa chỉ, email)
- ✅ Form liên hệ để gửi tin nhắn
- ✅ Giao diện responsive (điện thoại, tablet, máy tính)
- ✅ Lightbox để xem ảnh phóng to

### 🔐 Cho Người Quản Lý (Admin)
- ✅ Hệ thống đăng nhập bảo mật
- ✅ Bảng điều khiển quản lý (Dashboard)
- ✅ Chỉnh sửa nội dung trang (tiêu đề, mô tả)
- ✅ Quản lý thư viện ảnh (thêm/xóa ảnh)
- ✅ Cập nhật thông tin liên hệ
- ✅ Lưu dữ liệu vào browser (LocalStorage)

---

## 🚀 Cách Sử Dụng

### Mở Website
1. Mở file `index.html` trong trình duyệt web
2. Hoặc sử dụng Live Server (nếu dùng VS Code)
   - Cài đặt extension "Live Server"
   - Click chuột phải vào `index.html` → "Open with Live Server"

### 📝 Đăng Nhập Quản Lý
1. Click vào nút "Quản Lý" ở thanh điều hướng
2. Nhập thông tin:
   - **Username:** `admin`
   - **Password:** `123456`
3. Click "Đăng Nhập"

### ⚙️ Quản Lý Nội Dung (Admin)

#### Tab 1: Nội Dung Trang
- Chỉnh sửa tiêu đề chính
- Cập nhật mô tả trang chủ
- Thay đổi mô tả dịch vụ
- Sửa mô tả thư viện ảnh
- Click "Lưu Nội Dung" để lưu thay đổi

#### Tab 2: Thư Viện Ảnh
- **Tải ảnh mới:** Chọn file từ máy tính
- **Xem ảnh hiện tại:** Danh sách các ảnh đã tải
- **Xóa ảnh:** Click nút "×" trên từng ảnh

#### Tab 3: Thông Tin Liên Hệ
- Cập nhật số điện thoại
- Thay đổi địa chỉ
- Sửa email
- Click "Lưu Thông Tin" để lưu thay đổi

### 🔓 Đăng Xuất
- Click nút "Đăng Xuất" ở bảng điều khiển quản lý

---

## 📁 Cấu Trúc Thư Mục

```
Web_Phương_Đông - Copy/
├── index.html          # File HTML chính
├── styles.css          # File CSS (giao diện)
├── script.js           # File JavaScript (tương tác)
└── image/              # Thư mục chứa hình ảnh
    ├── logo.png        # Logo công ty
    ├── 1.jpg
    ├── 2.jpg
    ├── 3.jpg
    ├── 4.jpg
    └── 5.jpg
```

---

## 🎨 Responsive Design

Website được thiết kế để hoạt động tốt trên:
- 📱 Điện thoại di động (320px trở lên)
- 📱 Tablet (600px trở lên)
- 💻 Máy tính để bàn (1200px)

---

## 💾 Lưu Trữ Dữ Liệu

- **Phương thức:** Browser LocalStorage & SessionStorage
- **Lợi ích:** Không cần database, dữ liệu được lưu trên máy tính người dùng
- **Lưu ý:** Xóa dữ liệu trình duyệt sẽ xóa toàn bộ nội dung đã chỉnh sửa

### Làm sao để xóa dữ liệu?
1. Mở trình duyệt → Nhấn **F12** để mở DevTools
2. Đi tới tab **Application** hoặc **Storage**
3. Chọn **Local Storage** → Chọn website
4. Xóa các item `websiteData` và `galleryImages`

---

## 🔧 Tùy Chỉnh

### Thay đổi màu sắc
Chỉnh sửa file `styles.css`, tìm phần `:root` và thay đổi các giá trị màu:

```css
:root {
    --primary-color: #dc143c;  /* Màu đỏ chính */
    --secondary-color: #1a1a1a;  /* Màu tối */
    --accent-color: #f39c12;  /* Màu nhấn */
}
```

### Thay đổi thông tin liên hệ mặc định
Chỉnh sửa file `script.js`, tìm phần `DEFAULT_DATA`:

```javascript
const DEFAULT_DATA = {
    contactPhone: '0123 456 789',
    contactAddress: '123 Đường Phương Đông, TP. HCM',
    contactEmail: 'phuongdong@email.com'
};
```

### Thay đổi mật khẩu admin
Chỉnh sửa file `script.js`, tìm phần `ADMIN_CREDENTIALS`:

```javascript
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: '123456'  // Thay đổi mật khẩu ở đây
};
```

---

## 📞 Liên Hệ

Nếu có vấn đề hoặc cần hỗ trợ, vui lòng liên hệ:
- **Điện thoại:** Cập nhật trong quản lý
- **Email:** Cập nhật trong quản lý
- **Địa chỉ:** Cập nhật trong quản lý

---

## 📄 Ghi Chú

- Website này sử dụng HTML5, CSS3 và JavaScript vanilla (không cần framework)
- Hình ảnh phải nằm trong thư mục `image/`
- Để sử dụng trực tuyến, cần upload lên hosting và có database để lưu dữ liệu
- Hiện tại dữ liệu chỉ lưu trên trình duyệt của khách hàng

---

**Phiên bản:** 1.0  
**Cập nhật lần cuối:** 29/01/2026

