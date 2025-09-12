const { createTransporter, createCareerEmailTemplate } = require('../config/email');
const CareerApplication = require('../models/CareerApplication');
const Joi = require('joi');

// Validation schema for career application
const careerApplicationSchema = Joi.object({
  jobTitle: Joi.string().min(1).max(200).required(),
  message: Joi.string().min(10).max(2000).required(),
  resumeFileName: Joi.string().min(1).max(255).required(),
  resumeBase64: Joi.string().required(),
  to: Joi.string().email().required()
});

class EmailService {
  constructor() {
    this.transporter = createTransporter();
  }

  // Send career application email
  async sendCareerApplication(data, req) {
    try {
      // Validate input data
      const { error, value } = careerApplicationSchema.validate(data);
      if (error) {
        throw new Error(`Validation error: ${error.details[0].message}`);
      }

      // Validate base64 data
      if (!this.isValidBase64(value.resumeBase64)) {
        throw new Error('Invalid resume file format');
      }

      // Validate file size (5MB limit)
      const fileSizeInBytes = (value.resumeBase64.length * 3) / 4;
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
      
      if (fileSizeInBytes > maxSizeInBytes) {
        throw new Error('Resume file size exceeds 5MB limit');
      }

      // Create career application record in database
      const applicationData = {
        jobTitle: value.jobTitle,
        message: value.message,
        resumeFileName: value.resumeFileName,
        resumeSize: fileSizeInBytes,
        ipAddress: req.ip || req.connection.remoteAddress,
        userAgent: req.get('User-Agent')
      };

      // Save application to database
      const careerApplication = new CareerApplication(applicationData);
      await careerApplication.save();

      // Create email template
      const emailTemplate = createCareerEmailTemplate(value);

      // Send email
      const result = await this.transporter.sendMail(emailTemplate);
      
      // Mark email as sent in database
      await careerApplication.markEmailSent(result.messageId);
      
      console.log('Career application email sent successfully:', result.messageId);
      return {
        success: true,
        messageId: result.messageId,
        applicationId: careerApplication._id,
        message: 'Career application submitted successfully'
      };

    } catch (error) {
      console.error('Error sending career application email:', error);
      throw new Error(`Failed to send career application: ${error.message}`);
    }
  }

  // Validate base64 string
  isValidBase64(str) {
    try {
      const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
      return base64Regex.test(str) && str.length > 0;
    } catch (error) {
      return false;
    }
  }

  // Test email configuration
  async testEmailConnection() {
    try {
      await this.transporter.verify();
      return { success: true, message: 'Email configuration is valid' };
    } catch (error) {
      console.error('Email configuration test failed:', error);
      throw new Error(`Email configuration error: ${error.message}`);
    }
  }

  // Get allowed file types
  getAllowedFileTypes() {
    return ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  }

  // Validate file type
  isValidFileType(fileName) {
    const allowedTypes = this.getAllowedFileTypes();
    const fileExtension = fileName.toLowerCase().split('.').pop();
    const mimeTypes = {
      'pdf': 'application/pdf',
      'doc': 'application/msword',
      'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    };
    
    return mimeTypes[fileExtension] && allowedTypes.includes(mimeTypes[fileExtension]);
  }

  // Get all career applications with pagination
  async getApplications(page = 1, limit = 20, status = null, jobTitle = null) {
    try {
      const skip = (page - 1) * limit;
      let query = {};
      
      if (status) query.status = status;
      if (jobTitle) query.jobTitle = new RegExp(jobTitle, 'i');
      
      const applications = await CareerApplication.find(query)
        .sort({ appliedAt: -1 })
        .limit(limit)
        .skip(skip)
        .select('-resumeBase64'); // Don't include resume data in list
      
      const total = await CareerApplication.countDocuments(query);
      
      return {
        success: true,
        data: applications,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      };
    } catch (error) {
      console.error('Error fetching applications:', error);
      throw new Error(`Failed to fetch applications: ${error.message}`);
    }
  }

  // Get application by ID
  async getApplicationById(id) {
    try {
      const application = await CareerApplication.findById(id);
      if (!application) {
        throw new Error('Application not found');
      }
      return {
        success: true,
        data: application
      };
    } catch (error) {
      console.error('Error fetching application:', error);
      throw new Error(`Failed to fetch application: ${error.message}`);
    }
  }

  // Update application status
  async updateApplicationStatus(id, status, reviewedBy = null, notes = null) {
    try {
      const application = await CareerApplication.findById(id);
      if (!application) {
        throw new Error('Application not found');
      }
      
      await application.updateStatus(status, reviewedBy, notes);
      
      return {
        success: true,
        message: 'Application status updated successfully',
        data: application
      };
    } catch (error) {
      console.error('Error updating application status:', error);
      throw new Error(`Failed to update application status: ${error.message}`);
    }
  }

  // Get application statistics
  async getApplicationStats() {
    try {
      const stats = await CareerApplication.getStats();
      return {
        success: true,
        data: stats
      };
    } catch (error) {
      console.error('Error fetching application stats:', error);
      throw new Error(`Failed to fetch application statistics: ${error.message}`);
    }
  }
}

module.exports = new EmailService();
