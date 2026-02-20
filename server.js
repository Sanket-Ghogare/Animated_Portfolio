// server.js - Backend server for local testing
// Place this file in your project root (same level as package.json)

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill all required fields.'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });

  try {
    console.log('📧 Sending emails...');

    // EMAIL #1: Notification to YOU
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
        </head>
        <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0;">📧 New Contact</h1>
            </div>
            
            <h2 style="color: #333;">Contact Details:</h2>
            
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #667eea; margin: 15px 0;">
              <strong style="color: #667eea;">Name:</strong><br>
              <span style="color: #333; font-size: 16px;">${name}</span>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #667eea; margin: 15px 0;">
              <strong style="color: #667eea;">Email:</strong><br>
              <a href="mailto:${email}" style="color: #333; font-size: 16px;">${email}</a>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #667eea; margin: 15px 0;">
              <strong style="color: #667eea;">Message:</strong><br>
              <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}?subject=Re: Your message" 
                 style="display: inline-block; padding: 12px 30px; background-color: #667eea; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Reply to ${name}
              </a>
            </div>
            
          </div>
        </body>
        </html>
      `
    });

    console.log('✅ Notification email sent to you!');

    // EMAIL #2: Auto-reply to CLIENT
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: '✓ Thank you for contacting me!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
        </head>
        <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden;">
            
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center;">
              <div style="font-size: 48px; margin-bottom: 10px;">✓</div>
              <h1 style="color: white; margin: 0;">Thank You!</h1>
            </div>
            
            <div style="padding: 30px;">
              <p style="color: #333; font-size: 18px; margin-bottom: 20px;">
                Hi <strong>${name}</strong>,
              </p>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                Thank you for reaching out to me! I've received your message and really appreciate you taking the time to contact me.
              </p>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; margin: 25px 0; border-radius: 5px;">
                <h3 style="color: #667eea; margin-top: 0;">📝 Your Message:</h3>
                <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                I'll review your message and get back to you as soon as possible, typically within <strong>24-48 hours</strong>.
              </p>
              
              <div style="background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); padding: 20px; border-radius: 8px; margin: 25px 0;">
                <p style="margin: 0; color: #666; font-size: 14px; text-align: center;">
                  In the meantime, feel free to check out my portfolio or connect with me on social media!
                </p>
              </div>
              
              <p style="color: #333; font-size: 16px;">
                Best regards,<br>
                <strong style="color: #667eea; font-size: 20px;">Sanket Ghogare</strong>
              </p>
            </div>
            
            <div style="padding: 25px 30px; background-color: #f8f9fa; border-top: 1px solid #e0e0e0;">
              <h3 style="color: #333; margin: 0 0 15px 0; font-size: 16px;">📞 Contact Information:</h3>
              <p style="margin: 5px 0; color: #666; font-size: 14px;">
                📧 <strong>Email:</strong> <a href="mailto:sanketvghogare@gmail.com" style="color: #667eea;">sanketvghogare@gmail.com</a>
              </p>
              <p style="margin: 5px 0; color: #666; font-size: 14px;">
                📱 <strong>Phone:</strong> <a href="tel:7057505656" style="color: #667eea;">7057505656</a>
              </p>
              <p style="margin: 5px 0; color: #666; font-size: 14px;">
                📍 <strong>Location:</strong> At-Ganeshwadi Po-Pimpri Tal-Indapur Dist-Pune
              </p>
            </div>
            
            <div style="padding: 15px; text-align: center; background-color: white;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                This is an automated response. Please do not reply to this email directly.
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `
    });

    console.log('✅ Auto-reply email sent to client!');
    console.log('✅ All emails sent successfully!');

    res.status(200).json({ 
      success: true, 
      message: 'Emails sent successfully!' 
    });

  } catch (error) {
    console.error('❌ Error sending emails:', error);
    
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again.',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('\n🚀 Backend server running!');
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`📧 Email: ${process.env.EMAIL_USER || 'NOT SET - Check .env file'}`);
  console.log('\n✅ Ready to handle contact form submissions!\n');
});