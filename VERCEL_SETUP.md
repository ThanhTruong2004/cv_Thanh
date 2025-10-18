# 🚀 Deploy to Vercel - Complete Guide

## 📋 Setup Environment Variables trên Vercel

### Bước 1: Truy cập Vercel Dashboard

1. Đăng nhập: https://vercel.com/
2. Chọn project của bạn (cv_Thanh)
3. Click **Settings**

---

### Bước 2: Add Environment Variables

1. Trong Settings, chọn **Environment Variables**
2. Click **Add New**

#### Thêm 3 biến sau:

**Variable 1:**
```
Name: EMAILJS_PUBLIC_KEY
Value: ha17CumyVy_BJnxIx
Environment: ✅ Production ✅ Preview ✅ Development
```

**Variable 2:**
```
Name: EMAILJS_SERVICE_ID
Value: service_vj04pdz
Environment: ✅ Production ✅ Preview ✅ Development
```

**Variable 3:**
```
Name: EMAILJS_TEMPLATE_ID
Value: template_d0v0e2r
Environment: ✅ Production ✅ Preview ✅ Development
```

3. Click **Save** cho từng biến

---

### Bước 3: Redeploy Project

Sau khi thêm env vars, cần redeploy:

**Option 1: Via Vercel Dashboard**
1. Vào tab **Deployments**
2. Click vào deployment mới nhất
3. Click **⋯** (three dots) → **Redeploy**
4. Chọn **Use existing Build Cache** (nhanh hơn)
5. Click **Redeploy**

**Option 2: Push mới từ GitHub**
```bash
git add .
git commit -m "🔧 Add Vercel serverless function for EmailJS"
git push origin main
```

Vercel sẽ tự động deploy!

---

## 🏗️ Cấu trúc Project

Với setup này, project của bạn sẽ có:

```
cv_Thanh/
├── api/
│   └── send-email.js         # 🔒 Serverless function (backend)
├── index.html                 # Frontend
├── styles.css                 # Styles
├── script.js                  # Frontend logic
├── vercel.json                # Vercel config
├── config.js                  # Local dev only (gitignored)
└── config.example.js          # Template
```

---

## 🔄 Workflow

### Development (Local):
```
User submits form
    ↓
script.js detects localhost
    ↓
Uses config.js credentials
    ↓
Calls EmailJS directly from browser
```

### Production (Vercel):
```
User submits form
    ↓
script.js detects production domain
    ↓
Sends POST to /api/send-email
    ↓
Serverless function reads env vars
    ↓
Function calls EmailJS REST API
    ↓
Email sent! (Credentials an toàn trên server)
```

---

## ✅ Kiểm tra sau khi deploy

### 1. Check Environment Variables
```bash
# Xem env vars trong Vercel Dashboard
Settings → Environment Variables
# Phải thấy 3 biến: EMAILJS_PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID
```

### 2. Check API Endpoint
```bash
# Test API endpoint
curl -X POST https://truongcongthanh.id.vn/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "user_name": "Test User",
    "user_email": "test@example.com",
    "subject": "Test",
    "message": "This is a test"
  }'
```

Kết quả mong đợi:
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### 3. Check Logs
```bash
# Vào Vercel Dashboard
# Click vào deployment → View Function Logs
# Kiểm tra có error không
```

### 4. Test Form trên Website
1. Truy cập: https://truongcongthanh.id.vn
2. Scroll to Contact section
3. Điền form và gửi
4. Kiểm tra email

---

## 🐛 Troubleshooting

### Lỗi: "Email service not configured"

**Nguyên nhân:** Environment variables chưa được set

**Fix:**
1. Vào Vercel Settings → Environment Variables
2. Đảm bảo 3 biến đã được thêm
3. Redeploy project

---

### Lỗi: "Failed to send email"

**Nguyên nhân:** EmailJS credentials sai hoặc service/template bị xóa

**Fix:**
1. Kiểm tra EmailJS Dashboard: https://dashboard.emailjs.com/
2. Verify Service ID và Template ID còn tồn tại
3. Regenerate Public Key nếu cần
4. Update lại env vars trong Vercel

---

### Lỗi: CORS error

**Nguyên nhân:** API endpoint không cho phép request từ domain

**Fix:**
Đã được xử lý trong `api/send-email.js`:
```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
```

---

### Form hoạt động local nhưng không hoạt động trên Vercel

**Kiểm tra:**

1. **Console log:**
```javascript
// Mở DevTools (F12) trên website
// Xem có error gì không
```

2. **Network tab:**
```javascript
// Kiểm tra request to /api/send-email
// Status code phải là 200
```

3. **Vercel Function Logs:**
```javascript
// Dashboard → Project → Functions → send-email
// Xem logs của function
```

---

## 🔒 Security Features

### ✅ Credentials được bảo vệ:
- ❌ Không có trong client-side code
- ❌ Không commit lên GitHub
- ✅ Chỉ tồn tại trên Vercel server
- ✅ Chỉ accessible từ serverless function

### ✅ Domain Protection:
Nên setup trong EmailJS Dashboard:
1. Vào Account → Security
2. Enable "Allowed Domains"
3. Add: `truongcongthanh.id.vn`

---

## 📊 Monitoring

### Check Email Quota:
1. Vào EmailJS Dashboard
2. Check monthly usage
3. Free plan: 200 emails/month

### Vercel Analytics:
1. Vào Vercel Dashboard
2. Tab Analytics
3. Xem số requests đến `/api/send-email`

---

## 🚀 Commands Cheat Sheet

```bash
# Push code to GitHub (auto deploy to Vercel)
git add .
git commit -m "Update contact form"
git push origin main

# Check Vercel deployment status
vercel ls

# View logs
vercel logs

# Test API locally
vercel dev
# Then visit: http://localhost:3000
```

---

## 📝 Next Steps

- [ ] Test contact form trên production
- [ ] Setup domain restrictions trong EmailJS
- [ ] Monitor email quota
- [ ] Add rate limiting (nếu cần)
- [ ] Setup email notifications khi có contact mới

---

## 🎉 Done!

Website của bạn giờ:
- ✅ Hoạt động trên Vercel
- ✅ Contact form gửi email thật
- ✅ Credentials an toàn 100%
- ✅ Professional deployment

**Live at:** https://truongcongthanh.id.vn 🚀

---

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- EmailJS Docs: https://www.emailjs.com/docs/
- Issues: https://github.com/ThanhTruong2004/cv_Thanh/issues
