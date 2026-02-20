// api/contact.js - Vercel Serverless Function
// This handles form submissions and sends emails

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed. Use POST.' 
    });
  }

  // Get form data
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill all required fields.'
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  // Create nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });

  try {
    // EMAIL #1: Send notification to YOU
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🔔 New Contact from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px;">📧 New Contact</h1>
                      <p style="color: #ffffff; margin: 10px 0 0 0; opacity: 0.9;">Someone filled out your contact form!</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      
                      <h2 style="color: #333; margin: 0 0 20px 0; font-size: 20px;">Contact Details:</h2>
                      
                      <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 12px; background-color: #f8f9fa; border-left: 4px solid #667eea;">
                            <strong style="color: #667eea;">Name:</strong><br>
                            <span style="color: #333; font-size: 16px;">${name}</span>
                          </td>
                        </tr>
                        <tr><td style="height: 10px;"></td></tr>
                        <tr>
                          <td style="padding: 12px; background-color: #f8f9fa; border-left: 4px solid #667eea;">
                            <strong style="color: #667eea;">Email:</strong><br>
                            <a href="mailto:${email}" style="color: #333; font-size: 16px; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                        <tr><td style="height: 10px;"></td></tr>
                        <tr>
                          <td style="padding: 12px; background-color: #f8f9fa; border-left: 4px solid #667eea;">
                            <strong style="color: #667eea;">Message:</strong><br>
                            <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 8px 0 0 0; white-space: pre-wrap;">${message}</p>
                          </td>
                        </tr>
                      </table>
                      
                      <div style="margin-top: 30px; padding: 20px; background-color: #f0f4ff; border-radius: 8px; text-align: center;">
                        <a href="mailto:${email}?subject=Re: Your message to Sanket Ghogare" 
                           style="display: inline-block; padding: 12px 30px; background-color: #667eea; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">
                          Reply to ${name}
                        </a>
                      </div>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
                      <p style="color: #666; font-size: 12px; margin: 0;">
                        Received: ${new Date().toLocaleString('en-US', { 
                          dateStyle: 'full', 
                          timeStyle: 'short' 
                        })}
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    });

    // EMAIL #2: Send auto-reply to CLIENT
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: '✓ Thank you for contacting me!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px 40px; text-align: center;">
                      <div style="font-size: 48px; margin-bottom: 10px;">✓</div>
                      <h1 style="color: #ffffff; margin: 0; font-size: 32px;">Thank You!</h1>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      
                      <p style="color: #333; font-size: 18px; line-height: 1.6; margin: 0 0 20px 0;">
                        Hi <strong>${name}</strong>,
                      </p>
                      
                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        Thank you for reaching out to me! I've received your message and really appreciate you taking the time to contact me.
                      </p>
                      
                      <div style="background-color: #f8f9fa; padding: 25px; border-left: 4px solid #667eea; border-radius: 5px; margin: 30px 0;">
                        <h3 style="color: #667eea; margin: 0 0 15px 0; font-size: 18px;">📝 Your Message:</h3>
                        <p style="color: #555; line-height: 1.6; margin: 0; white-space: pre-wrap; font-size: 15px;">${message}</p>
                      </div>
                      
                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 20px 0;">
                        I'll review your message and get back to you as soon as possible, typically within <strong>24-48 hours</strong>.
                      </p>
                      
                      <div style="margin: 30px 0; padding: 25px; background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); border-radius: 8px;">
                        <p style="margin: 0; color: #666; font-size: 14px; text-align: center;">
                          In the meantime, feel free to check out my portfolio or connect with me on social media!
                        </p>
                      </div>
                      
                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 20px 0 10px 0;">
                        Best regards,<br>
                        <strong style="color: #667eea; font-size: 20px;">Sanket Ghogare</strong>
                      </p>
                      
                    </td>
                  </tr>
                  
                  <!-- Contact Info -->
                  <tr>
                    <td style="padding: 30px 40px; background-color: #f8f9fa; border-top: 1px solid #e0e0e0;">
                      <h3 style="color: #333; margin: 0 0 15px 0; font-size: 16px;">📞 Contact Information:</h3>
                      <table style="width: 100%;">
                        <tr>
                          <td style="padding: 5px 0; color: #666; font-size: 14px;">
                            📧 <strong>Email:</strong> <a href="mailto:sanketvghogare@gmail.com" style="color: #667eea; text-decoration: none;">sanketvghogare@gmail.com</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 5px 0; color: #666; font-size: 14px;">
                            📱 <strong>Phone:</strong> <a href="tel:7057505656" style="color: #667eea; text-decoration: none;">7057505656</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 5px 0; color: #666; font-size: 14px;">
                            📍 <strong>Location:</strong> At-Ganeshwadi Po-Pimpri Tal-Indapur Dist-Pune
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px; text-align: center; background-color: #ffffff;">
                      <p style="color: #999; font-size: 12px; margin: 0;">
                        This is an automated response. Please do not reply to this email directly.
                      </p>
                      <p style="color: #999; font-size: 12px; margin: 5px 0 0 0;">
                        © ${new Date().getFullYear()} Sanket Ghogare. All rights reserved.
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    });

    // Success response
    return res.status(200).json({ 
      success: true, 
      message: 'Emails sent successfully!' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}