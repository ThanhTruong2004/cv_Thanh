// Production Config - Load từ environment variables
const CONFIG = {
    emailjs: {
        // Lấy từ environment variables hoặc fallback
        publicKey: (typeof process !== 'undefined' && process.env.EMAILJS_PUBLIC_KEY) || 'ha17CumyVy_BJnxIx',
        serviceId: (typeof process !== 'undefined' && process.env.EMAILJS_SERVICE_ID) || 'service_vj04pdz',
        templateId: (typeof process !== 'undefined' && process.env.EMAILJS_TEMPLATE_ID) || 'template_d0v0e2r'
    }
};
