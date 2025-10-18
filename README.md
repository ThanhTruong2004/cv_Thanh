# 🚀 CV Portfolio - Trương Công Thành

> Modern, interactive portfolio website with dynamic features and beautiful animations

## 📁 Cấu trúc dự án

```
cv_Thanh/
├── index.html              # Main HTML file
├── styles.css              # All styles & animations
├── script.js               # All JavaScript logic
├── config.js               # 🔒 Credentials (NOT in GitHub)
├── config.example.js       # Template for config.js
├── .gitignore              # Git ignore rules
├── EMAILJS_SETUP.md        # EmailJS setup guide
└── data/
    └── projects.json       # Projects data
```

## ⚙️ Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/ThanhTruong2004/cv_Thanh.git
cd cv_Thanh
```

### 2. Setup EmailJS (Required for contact form)
```bash
# Copy config template
copy config.example.js config.js

# Edit config.js and add your credentials
# See EMAILJS_SETUP.md for detailed guide
```

### 3. Open Website
```bash
# Option 1: Use Python
python -m http.server 8000

# Option 2: Use Live Server in VS Code
# Right-click index.html → Open with Live Server
```

### 4. Access
Open browser: `http://localhost:8000`

## ✨ Features

### 🎨 UI/UX
- ✅ Modern design with Glass morphism
- ✅ Dark/Light theme toggle with persistence
- ✅ Status bar with real-time clock
- ✅ Custom animated cursor (desktop only)
- ✅ Particles.js background effects
- ✅ Smooth animations & transitions
- ✅ Fully responsive design

### 🚀 Dynamic Features
- ✅ **Contact Form** with EmailJS integration
- ✅ **Visitor Tracking** (localStorage)
- ✅ **GitHub API** integration (auto-fetch repos)
- ✅ **Dynamic Projects** loading from JSON
- ✅ Email copy to clipboard
- ✅ Form validation & error handling
- ✅ Loading states & notifications

### 🎯 Animations
- ✅ Typing animation effect
- ✅ Skill progress bars animation
- ✅ Scroll-triggered animations (AOS)
- ✅ Parallax effects
- ✅ Smooth page transitions
- ✅ Interactive hover effects

### � Analytics
- ✅ Visit counter
- ✅ Contact form submissions tracking
- ✅ localStorage data persistence

## Cách sử dụng

1. Mở file `index.html` trong trình duyệt web
2. Tất cả file CSS và JS sẽ được load tự động
3. Website sẽ hoạt động với đầy đủ tính năng

## Cấu hình

### Dependencies
- Bootstrap 5.3.0 (CDN)
- Font Awesome 6.4.0 (CDN)
- Google Fonts - Poppins (CDN)

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Tùy chỉnh

### CSS Variables
Trong file `styles.css`, bạn có thể tùy chỉnh màu sắc thông qua CSS variables:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    --text-dark: #333;
    --text-light: #fff;
    --bg-dark: #1a1a2e;
    --bg-light: #f8f9fa;
}
```

### JavaScript Configuration
Trong file `script.js`, bạn có thể tùy chỉnh:
- Typing animation texts
- Animation timing
- Scroll behavior

## 🔒 Security & Privacy

### What's NOT pushed to GitHub:
- ❌ `config.js` - Contains EmailJS credentials
- ❌ `.env` files - Environment variables
- ❌ Personal data in localStorage

### What's SAFE to push:
- ✅ `config.example.js` - Template only
- ✅ All HTML/CSS/JS code
- ✅ Documentation

### Important Files:
```
config.js          🔒 YOUR credentials (gitignored)
config.example.js  ✅ Template for others
.gitignore         ✅ Protects sensitive files
```

## 🛠️ Development

### Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Libraries:** 
  - Bootstrap 5.3.0
  - Font Awesome 6.4.0
  - AOS 2.3.4 (Animate On Scroll)
  - Particles.js 2.0.0
  - EmailJS 3.x
- **APIs:** GitHub API, EmailJS API

### File Structure
```
cv_Thanh/
├── index.html              # Main HTML
├── styles.css              # All styles
├── script.js               # All logic
├── config.js               # 🔒 Credentials (NOT in git)
├── config.example.js       # Config template
├── .gitignore              # Git ignore rules
├── EMAILJS_SETUP.md        # Setup guide
├── README.md               # This file
└── data/
    └── projects.json       # Projects data
```

### Best Practices
- Tất cả CSS đã được tách ra file riêng
- JavaScript được modularized
- Code được comment và format đúng chuẩn
- Performance optimizations được áp dụng

## License

© 2025 Trương Công Thành. All rights reserved.