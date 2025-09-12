const Joi = require('joi');

// Validation middleware for career applications
const validateCareerApplication = (req, res, next) => {
  const schema = Joi.object({
    jobTitle: Joi.string().min(1).max(200).required(),
    message: Joi.string().min(10).max(2000).required(),
    resumeFileName: Joi.string().min(1).max(255).required(),
    resumeBase64: Joi.string().required(),
    to: Joi.string().email().required()
  });

  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: error.details[0].message
    });
  }
  
  next();
};

// Sanitize input data
const sanitizeInput = (req, res, next) => {
  if (req.body.message) {
    req.body.message = req.body.message.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  }
  
  if (req.body.jobTitle) {
    req.body.jobTitle = req.body.jobTitle.trim();
  }
  
  if (req.body.resumeFileName) {
    req.body.resumeFileName = req.body.resumeFileName.trim();
  }
  
  next();
};

// Rate limiting middleware (basic implementation)
const createRateLimiter = (windowMs, maxRequests) => {
  const requests = new Map();
  
  return (req, res, next) => {
    const clientIp = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    const windowStart = now - windowMs;
    
    // Clean old entries
    for (const [ip, timestamps] of requests.entries()) {
      requests.set(ip, timestamps.filter(time => time > windowStart));
    }
    
    const clientRequests = requests.get(clientIp) || [];
    
    if (clientRequests.length >= maxRequests) {
      return res.status(429).json({
        success: false,
        error: 'Too many requests',
        message: 'Please try again later'
      });
    }
    
    clientRequests.push(now);
    requests.set(clientIp, clientRequests);
    
    next();
  };
};

module.exports = {
  validateCareerApplication,
  sanitizeInput,
  createRateLimiter
};
