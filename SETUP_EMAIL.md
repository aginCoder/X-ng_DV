# 📧 Hướng Dẫn Cấu Hình Gửi Email

Để gửi form liên hệ đến email **phamgiaan545@gmail.com**, bạn cần cấu hình EmailJS.

---

## 📋 Các Bước Cấu Hình

### Bước 1: Đăng Ký EmailJS
1. Truy cập: https://www.emailjs.com/
2. Click **Sign Up** để tạo tài khoản miễn phí
3. Xác nhận email của bạn

### Bước 2: Lấy Public Key
1. Đăng nhập vào EmailJS Dashboard
2. Vào **Account** → **API Keys**
3. Copy **Public Key** (bắt đầu bằng `key_...`)

### Bước 3: Thêm Email Service
1. Vào **Email Services**
2. Click **Add Service**
3. Chọn **Gmail** (hoặc email provider của bạn)
4. Làm theo hướng dẫn để kết nối email **phamgiaan545@gmail.com**
5. Copy **Service ID** (ví dụ: `service_abc123...`)

### Bước 4: Tạo Email Template
1. Vào **Email Templates**
2. Click **Create New Template**
3. Đặt tên template: `contact_form` (hoặc tên khác)
4. Thiết lập template như sau:

**Subject:**
```
Tin nhắn mới từ {{from_name}} - {{subject}}
```

**Email Body:**
```
Từ: {{from_name}} ({{from_email}})

Tin nhắn:
{{message}}

---
Đây là tin nhắn tự động từ website Xưởng Dịch Vụ Phương Đông
```

5. Click **Save** và copy **Template ID** (ví dụ: `template_abc123...`)

### Bước 5: Cập Nhật script.js

Mở file `script.js` và tìm dòng:
```javascript
emailjs.init('YOUR_PUBLIC_KEY'); 
```

Thay đổi thành:
```javascript
emailjs.init('key_xxxxxxxxxxxxxx');
```

### Bước 6: Cập Nhật Email Template ID

Tìm dòng:
```javascript
emailjs.send('service_default', 'template_default', templateParams)
```

Thay đổi thành:
```javascript
emailjs.send('service_xxxxx', 'template_xxxxx', templateParams)
```

Thay `service_xxxxx` bằng **Service ID** của bạn
Thay `template_xxxxx` bằng **Template ID** của bạn

---

## ✅ Kiểm Tra

1. Mở website trong trình duyệt
2. Điền form liên hệ
3. Click **Gửi Tin Nhắn**
4. Kiểm tra email **phamgiaan545@gmail.com** để xác nhận

---

## 🔒 Lưu Ý Bảo Mật

- **KHÔNG** share Public Key công khai (nó có thể bị lạm dụng)
- Giới hạn số lần gửi email trong cài đặt EmailJS (Free plan: 200 email/tháng)
- Nếu bị nghi ngờ, hãy tạo key mới

---

## ❓ Khắc Phục Sự Cố

### "Failed to send email"
- Kiểm tra Public Key & Service ID, Template ID có chính xác không
- Kiểm tra email service đã kết nối thành công không
- Kiểm tra quota (Free plan có giới hạn)

### Email không đến
- Kiểm tra folder Spam/Junk
- Kiểm tra cấu hình SMTP Gmail (bật 2FA và app password)
- Thử gửi email test từ EmailJS dashboard

### CORS Error
- Đảm bảo website mở từ domain thực (không phải localhost mà từ file://)
- Hoặc sử dụng Live Server trong VS Code

---

## 📧 Alternative: Sử dụng Formspree (Đơn Giản Hơn)

Nếu không muốn setup EmailJS, có thể dùng Formspree:

1. Truy cập: https://formspree.io/
2. Đăng ký & tạo form mới
3. Copy endpoint URL
4. Đổi action của form trong HTML:
   ```html
   <form action="https://formspree.io/f/xxxxx" method="POST">
   ```

---

Sau khi cấu hình xong, form liên hệ sẽ gửi email thành công! 🎉
