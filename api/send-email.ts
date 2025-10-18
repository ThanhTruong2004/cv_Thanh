// Vercel Serverless Function - Send Email
// File này sẽ chạy trên server, bảo vệ EmailJS credentials

// @ts-nocheck
export default async function handler(req, res) {
  // Chỉ cho phép POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { user_name, user_email, user_phone, subject, message, timestamp } = req.body;

    // Validate input
    if (!user_name || !user_email || !subject || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['user_name', 'user_email', 'subject', 'message']
      });
    }

    // Get EmailJS credentials từ environment variables
    const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
    const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;

    // Check if credentials exist
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      console.error('EmailJS credentials not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    // Send email via EmailJS REST API
    const emailJsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          user_name,
          user_email,
          user_phone: user_phone || 'Không cung cấp',
          subject,
          message,
          timestamp: timestamp || new Date().toLocaleString('vi-VN')
        }
      })
    });

    if (!emailJsResponse.ok) {
      const errorText = await emailJsResponse.text();
      console.error('EmailJS error:', errorText);
      return res.status(500).json({ 
        error: 'Failed to send email',
        details: errorText 
      });
    }

    // Success
    return res.status(200).json({ 
      success: true,
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
