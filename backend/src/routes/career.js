const express = require('express');
const router = express.Router();
const emailService = require('../services/emailService');
const { validateCareerApplication, sanitizeInput, createRateLimiter } = require('../middleware/validation');

// Apply rate limiting (5 requests per 15 minutes)
const rateLimiter = createRateLimiter(15 * 60 * 1000, 5);

// POST /api/career/apply - Submit career application
router.post('/apply', rateLimiter, sanitizeInput, validateCareerApplication, async (req, res) => {
  try {
    const { jobTitle, message, resumeFileName, resumeBase64, to } = req.body;
    
    // Validate file type
    if (!emailService.isValidFileType(resumeFileName)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid file type',
        message: 'Only PDF, DOC, and DOCX files are allowed'
      });
    }
    
    // Send email
    const result = await emailService.sendCareerApplication({
      jobTitle,
      message,
      resumeFileName,
      resumeBase64,
      to
    }, req);
    
    res.status(200).json(result);
    
  } catch (error) {
    console.error('Career application error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
});

// GET /api/career/health - Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Career API is healthy',
    timestamp: new Date().toISOString()
  });
});

// GET /api/career/file-types - Get allowed file types
router.get('/file-types', (req, res) => {
  const allowedTypes = emailService.getAllowedFileTypes();
  const fileExtensions = ['pdf', 'doc', 'docx'];
  
  res.status(200).json({
    success: true,
    data: {
      allowedMimeTypes: allowedTypes,
      allowedExtensions: fileExtensions,
      maxFileSize: '5MB'
    }
  });
});

// POST /api/career/test-email - Test email configuration (admin only)
router.post('/test-email', async (req, res) => {
  try {
    const result = await emailService.testEmailConnection();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Email configuration test failed',
      message: error.message
    });
  }
});

// GET /api/career/applications - Get all applications (admin only)
router.get('/applications', async (req, res) => {
  try {
    const { page = 1, limit = 20, status, jobTitle } = req.query;
    const result = await emailService.getApplications(
      parseInt(page),
      parseInt(limit),
      status,
      jobTitle
    );
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch applications',
      message: error.message
    });
  }
});

// GET /api/career/applications/:id - Get specific application (admin only)
router.get('/applications/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await emailService.getApplicationById(id);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching application:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch application',
      message: error.message
    });
  }
});

// PUT /api/career/applications/:id/status - Update application status (admin only)
router.put('/applications/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status, reviewedBy, notes } = req.body;
    
    if (!status) {
      return res.status(400).json({
        success: false,
        error: 'Status is required'
      });
    }
    
    const result = await emailService.updateApplicationStatus(id, status, reviewedBy, notes);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error updating application status:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update application status',
      message: error.message
    });
  }
});

// GET /api/career/stats - Get application statistics (admin only)
router.get('/stats', async (req, res) => {
  try {
    const result = await emailService.getApplicationStats();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch statistics',
      message: error.message
    });
  }
});

module.exports = router;
