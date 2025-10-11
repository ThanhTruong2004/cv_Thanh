# CV Portfolio - Trương Công Thành

## Cấu trúc dự án

Dự án CV Portfolio đã được tách thành các file riêng biệt để dễ bảo trì và phát triển:

### File chính:
- **`index.html`** - File HTML chính chứa cấu trúc và nội dung website
- **`styles.css`** - File CSS chứa tất cả styles và animations
- **`script.js`** - File JavaScript chứa tất cả logic và tương tác

### File backup:
- **`index_old.html`** - File HTML gốc với CSS và JS nhúng (để tham khảo)

## Tính năng

### Giao diện
- ✨ Thiết kế hiện đại với Glass morphism
- 🎨 Gradient background animation
- 📱 Responsive design cho mọi thiết bị
- 🌟 Smooth animations và transitions

### Chức năng
- 🚀 Page loader với animation
- 📜 Smooth scrolling navigation
- ⌨️ Typing animation cho tiêu đề
- 👁️ Parallax effects
- 📊 Animated skill progress bars
- 🎯 Intersection Observer cho animations
- 📱 Mobile-friendly navigation

### Hiệu suất
- ⚡ Debounced scroll events
- 🔄 Preloading critical resources
- 🎪 Staggered animations
- 📈 Performance optimizations

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

## Development

### File Structure
```
cv_Thanh/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # All JavaScript
├── index_old.html      # Original file (backup)
└── README.md           # This file
```

### Best Practices
- Tất cả CSS đã được tách ra file riêng
- JavaScript được modularized
- Code được comment và format đúng chuẩn
- Performance optimizations được áp dụng

## License

© 2025 Trương Công Thành. All rights reserved.