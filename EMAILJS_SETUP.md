# 📧 Hướng dẫn Setup EmailJS cho Contact Form

## Bước 1: Đăng ký tài khoản EmailJS (MIỄN PHÍ)

1. Truy cập: https://www.emailjs.com/
2. Click **Sign Up** (Free plan: 200 emails/tháng)
3. Xác nhận email

---

## Bước 2: Thêm Email Service

1. Vào **Email Services** (menu bên trái)
2. Click **Add New Service**
3. Chọn **Gmail** (hoặc email provider của bạn)
4. Đăng nhập Gmail và cho phép quyền truy cập
5. ✅ **QUAN TRỌNG:** Tick vào ☑️ **"Send test email to verify configuration"**
6. Click **"Create Service"** (nút xanh)
7. Sau khi tạo xong, copy **Service ID** (VD: `service_abc123`)

> ⚠️ **Lưu ý:** Cần cho phép "Send email on your behalf" permission khi kết nối Gmail!

---

## Bước 3: Tạo Email Template

1. Vào **Email Templates**
2. Click **Create New Template**
3. Paste template này:

```
Subject: 📬 Portfolio Contact: {{subject}}

Hi Thành,

Bạn có một tin nhắn mới từ portfolio website!

-----------------------------------
👤 Thông tin người gửi:
-----------------------------------
Tên: {{user_name}}
Email: {{user_email}}
SĐT: {{user_phone}}

-----------------------------------
📝 Nội dung:
-----------------------------------
Tiêu đề: {{subject}}

{{message}}

-----------------------------------
🕐 Thời gian: {{timestamp}}
-----------------------------------

Trả lời ngay tại: {{user_email}}
```

4. Click **Save**
5. Copy **Template ID** (VD: `template_xyz789`)

---

## Bước 4: Lấy Public Key

1. Vào **Account** → **General**
2. Tìm **Public Key**
3. Copy **Public Key** (VD: `AbCdEfGhIjKlMnOp`)

---

## Bước 5: Cập nhật vào Code

Mở file `script.js` và tìm dòng ~485, thay đổi:

```javascript
const EMAILJS_PUBLIC_KEY = 'AbCdEfGhIjKlMnOp';     // 👈 Paste Public Key
const EMAILJS_SERVICE_ID = 'service_abc123';       // 👈 Paste Service ID  
const EMAILJS_TEMPLATE_ID = 'template_xyz789';     // 👈 Paste Template ID
```

---

## ✅ Xong! Test thử:

1. Refresh website
2. Scroll xuống phần **Contact**
3. Điền form và gửi thử
4. Check email của bạn!

---

## 📊 Xem Contacts đã nhận:

```javascript
// Mở Console (F12) và chạy:
JSON.parse(localStorage.getItem('portfolioContacts'))
```

---

## 🚀 Nâng cao:

- **Custom design:** Chỉnh template trong EmailJS dashboard
- **Auto-reply:** Tạo template thứ 2 gửi lại cho người liên hệ
- **Analytics:** EmailJS dashboard có thống kê số email đã gửi

---

## ⚠️ Lưu ý:

- Free plan: **200 emails/tháng**
- Không chia sẻ Public Key công khai trên GitHub
- Có thể dùng .env file để bảo mật hơn

---

## 🆘 Cần trợ giúp?

- EmailJS Docs: https://www.emailjs.com/docs/
- Video tutorial: https://www.youtube.com/watch?v=x7Ewtay0Q78
