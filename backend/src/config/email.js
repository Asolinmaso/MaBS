const nodemailer = require('nodemailer');
require('dotenv').config();

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Email template for career applications
const createCareerEmailTemplate = (data) => {
  return {
    from: `"MaBS Career Portal" <${process.env.EMAIL_FROM}>`,
    to: 'hiring@manvian.com',
    subject: `Career Application: ${data.jobTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #19BDE8; border-bottom: 2px solid #19BDE8; padding-bottom: 10px;">
          New Career Application
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Application Details</h3>
          <p><strong>Job Position:</strong> ${data.jobTitle}</p>
          <p><strong>Applied Date:</strong> ${new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</p>
        </div>
        
        <div style="background-color: #fff; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message from Applicant</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
        </div>
        
        <div style="background-color: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #0c5460;">
            <strong>Note:</strong> Resume file has been attached to this email.
          </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e9ecef; margin: 30px 0;">
        
        <div style="text-align: center; color: #6c757d; font-size: 12px;">
          <p>This email was sent from the MaBS Career Portal</p>
          <p>Please do not reply directly to this email</p>
        </div>
      </div>
    `,
    attachments: [
      {
        filename: data.resumeFileName,
        content: data.resumeBase64,
        encoding: 'base64'
      }
    ]
  };
};

module.exports = {
  createTransporter,
  createCareerEmailTemplate
};
