// 📝 CONFIG TEMPLATE - Đổi tên file này thành config.js và điền thông tin của bạn

const CONFIG = {
    emailjs: {
        // Lấy từ EmailJS Dashboard: https://dashboard.emailjs.com/
        publicKey: 'YOUR_PUBLIC_KEY_HERE',      // Account → General → Public Key
        serviceId: 'YOUR_SERVICE_ID_HERE',      // Email Services → Service ID
        templateId: 'YOUR_TEMPLATE_ID_HERE'     // Email Templates → Template ID
    },
    analytics: {
        // (Optional) Google Analytics ID
        gaId: 'YOUR_GA_ID_HERE'
    }
};

// ⚠️ HƯỚNG DẪN SETUP:
// 1. Copy file này thành config.js
// 2. Đăng ký EmailJS tại: https://www.emailjs.com/
// 3. Lấy credentials và thay thế các giá trị YOUR_XXX_HERE
// 4. File config.js sẽ KHÔNG được push lên GitHub (đã có trong .gitignore)
