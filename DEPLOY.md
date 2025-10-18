# 🚀 Hướng dẫn Deploy lên GitHub

## ✅ Checklist trước khi push

- [ ] File `config.js` KHÔNG xuất hiện trong `git status`
- [ ] File `.gitignore` đã có `config.js`
- [ ] File `config.example.js` đã tạo (template)
- [ ] README.md đã cập nhật hướng dẫn setup
- [ ] Code đã test kỹ trên local

---

## 📤 Các bước deploy

### 1. Kiểm tra Git status
```bash
git status
```

**Đảm bảo `config.js` KHÔNG có trong danh sách!**

---

### 2. Add files
```bash
# Add tất cả files (trừ những file trong .gitignore)
git add .

# Hoặc add từng file:
git add index.html
git add styles.css
git add script.js
git add .gitignore
git add config.example.js
git add README.md
git add EMAILJS_SETUP.md
git add SECURITY.md
git add data/projects.json
```

---

### 3. Commit changes
```bash
git commit -m "🚀 Add dynamic features: Contact form, Particles.js, GitHub API"
```

---

### 4. Push lên GitHub
```bash
git push origin main
```

---

## 🌐 Enable GitHub Pages

### Option 1: Via GitHub Website
1. Vào repository: https://github.com/ThanhTruong2004/cv_Thanh
2. Click **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** → **/ (root)**
5. Click **Save**
6. Đợi 1-2 phút → Website live tại: `https://thanhtruong2004.github.io/cv_Thanh/`

### Option 2: Via Command Line
```bash
# Push lên GitHub
git push origin main

# GitHub Pages tự động deploy
```

---

## ⚙️ Setup cho người clone repo

Người khác clone repo của bạn cần làm:

### 1. Clone repo
```bash
git clone https://github.com/ThanhTruong2004/cv_Thanh.git
cd cv_Thanh
```

### 2. Setup config
```bash
# Copy template
copy config.example.js config.js

# Edit config.js và điền EmailJS credentials
```

### 3. Run local
```bash
# Option 1: Python
python -m http.server 8000

# Option 2: VS Code Live Server
# Right-click index.html → Open with Live Server
```

---

## 🚨 Troubleshooting

### Vấn đề: `config.js` vẫn xuất hiện trong git status

**Giải pháp:**
```bash
# Remove từ Git cache
git rm --cached config.js

# Add lại .gitignore
git add .gitignore

# Commit
git commit -m "🔒 Add config.js to .gitignore"

# Push
git push origin main
```

---

### Vấn đề: GitHub Pages không hoạt động

**Kiểm tra:**
1. Repository phải **public** (không phải private)
2. GitHub Pages enabled trong Settings
3. Branch phải là `main` hoặc `gh-pages`
4. File `index.html` phải ở root folder

**Fix:**
```bash
# Đảm bảo index.html ở root
ls -la index.html

# Push lại
git push origin main --force
```

---

### Vấn đề: Contact form không hoạt động trên GitHub Pages

**Nguyên nhân:**
- GitHub Pages không có `config.js` (đã bị gitignore)
- EmailJS credentials không có

**Giải pháp 1: Commit config.js (NOT RECOMMENDED)**
```bash
# Remove khỏi .gitignore
# Edit .gitignore, xóa dòng "config.js"

git add config.js
git commit -m "Add config for GitHub Pages"
git push origin main
```

⚠️ **Lưu ý:** Credentials sẽ PUBLIC!

**Giải pháp 2: Use environment variables (RECOMMENDED)**

Deploy lên **Vercel** hoặc **Netlify** thay vì GitHub Pages:

#### Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
EMAILJS_PUBLIC_KEY=your_key
EMAILJS_SERVICE_ID=your_id
EMAILJS_TEMPLATE_ID=your_id
```

#### Netlify:
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod

# Add environment variables in Netlify dashboard
```

---

## 📊 Git Commands Cheat Sheet

```bash
# Check status
git status

# Add specific files
git add <filename>

# Add all files
git add .

# Commit with message
git commit -m "Your message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

---

## 🎉 Xong!

Website của bạn giờ đã live tại:
- **GitHub Pages:** https://thanhtruong2004.github.io/cv_Thanh/
- **Custom domain:** (nếu setup)

Chia sẻ link này với mọi người! 🚀

---

## 📝 Next Steps

- [ ] Add custom domain (nếu có)
- [ ] Setup Google Analytics
- [ ] Add SEO meta tags
- [ ] Optimize images
- [ ] Add Open Graph tags cho social sharing
- [ ] Setup CDN cho tốc độ tốt hơn

---

## 📧 Need Help?

- GitHub Docs: https://docs.github.com/en/pages
- EmailJS Docs: https://www.emailjs.com/docs/
- Contact: truongcongthanh4976@gmail.com
