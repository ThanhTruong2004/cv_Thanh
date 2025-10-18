# 🔒 Security & Privacy Guidelines

## Overview

Dự án này sử dụng **EmailJS** để gửi email từ contact form. Credentials được lưu trong file `config.js` và **KHÔNG được push lên GitHub**.

---

## 🚫 Files KHÔNG được commit

### `config.js` - Credentials file
```javascript
const CONFIG = {
    emailjs: {
        publicKey: 'YOUR_ACTUAL_KEY',      // ❌ KHÔNG push
        serviceId: 'YOUR_ACTUAL_ID',       // ❌ KHÔNG push
        templateId: 'YOUR_ACTUAL_ID'       // ❌ KHÔNG push
    }
};
```

**Tại sao?**
- Chứa thông tin nhạy cảm (API keys)
- Có thể bị lạm dụng nếu public
- EmailJS giới hạn 200 emails/tháng (free plan)

---

## ✅ Files AN TOÀN để commit

### `config.example.js` - Template file
```javascript
const CONFIG = {
    emailjs: {
        publicKey: 'YOUR_PUBLIC_KEY_HERE',    // ✅ Placeholder
        serviceId: 'YOUR_SERVICE_ID_HERE',    // ✅ Placeholder
        templateId: 'YOUR_TEMPLATE_ID_HERE'   // ✅ Placeholder
    }
};
```

**Mục đích:**
- Template cho người khác setup
- Không chứa credentials thật
- Hướng dẫn format cần điền

---

## 🛡️ .gitignore Protection

File `.gitignore` đảm bảo credentials không bị commit:

```gitignore
# EmailJS Credentials
config.js

# Environment variables
.env
.env.local

# Backup files
*.backup
*_backup.*
```

**Kiểm tra:**
```bash
# Xem files sẽ được commit
git status

# config.js KHÔNG được xuất hiện trong danh sách!
```

---

## 📝 Setup cho người mới

### Bước 1: Clone repo
```bash
git clone https://github.com/ThanhTruong2004/cv_Thanh.git
cd cv_Thanh
```

### Bước 2: Tạo config.js
```bash
# Windows
copy config.example.js config.js

# Linux/Mac
cp config.example.js config.js
```

### Bước 3: Điền credentials
1. Đăng ký EmailJS: https://www.emailjs.com/
2. Lấy Public Key, Service ID, Template ID
3. Mở `config.js` và điền thông tin
4. Save file

### Bước 4: Test
```bash
# Chạy local server
python -m http.server 8000

# Mở browser: http://localhost:8000
# Test contact form
```

---

## ⚠️ Best Practices

### ✅ DO:
- Luôn check `.gitignore` trước khi commit
- Dùng `config.example.js` làm template
- Document rõ ràng các bước setup
- Sử dụng environment variables cho production

### ❌ DON'T:
- Commit `config.js` lên GitHub
- Share credentials công khai
- Hardcode API keys trong code
- Push backup files có chứa credentials

---

## 🚨 Nếu Bị Lộ Credentials

### Hành động ngay lập tức:

1. **Xóa credentials cũ:**
   - Vào EmailJS Dashboard
   - Regenerate Public Key mới
   - Tạo Service/Template mới

2. **Remove từ Git history:**
```bash
# Xóa file khỏi git history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch config.js" \
  --prune-empty --tag-name-filter cat -- --all

# Force push
git push origin --force --all
```

3. **Update credentials mới:**
   - Cập nhật `config.js` với keys mới
   - Verify `.gitignore` hoạt động
   - Test lại tất cả

---

## 📊 Data Storage

### LocalStorage Data
Dự án lưu một số data trong localStorage:

```javascript
// Visitor stats
localStorage.getItem('visitorStats')

// Contact form submissions (backup)
localStorage.getItem('portfolioContacts')

// Theme preference
localStorage.getItem('theme')
```

**Lưu ý:**
- Data này CHỈ lưu local trên máy user
- Không đồng bộ lên server
- Xóa cache sẽ mất data

---

## 🔐 Production Deployment

### Các platform khuyên dùng:

#### GitHub Pages (FREE)
- ✅ Miễn phí
- ✅ HTTPS tự động
- ⚠️ Phải commit `config.js` (hoặc dùng GitHub Secrets)

#### Vercel (FREE)
- ✅ Environment variables support
- ✅ Automatic deployments
- ✅ Không cần commit credentials

```bash
# Vercel deployment
vercel --prod

# Set environment variables
vercel env add EMAILJS_PUBLIC_KEY
vercel env add EMAILJS_SERVICE_ID
vercel env add EMAILJS_TEMPLATE_ID
```

#### Netlify (FREE)
- ✅ Environment variables support
- ✅ Form handling built-in
- ✅ Không cần EmailJS (có thể dùng Netlify Forms)

---

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [OWASP Security Guidelines](https://owasp.org/)

---

## 📧 Contact

Nếu phát hiện vấn đề bảo mật, vui lòng liên hệ:
- Email: truongcongthanh4976@gmail.com
- GitHub: [@ThanhTruong2004](https://github.com/ThanhTruong2004)

---

**⚠️ Remember: Security is not a feature, it's a requirement!**
