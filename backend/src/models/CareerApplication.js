const mongoose = require('mongoose');

const careerApplicationSchema = new mongoose.Schema({
  // Personal Information
  name: {
    type: String,
    required: false, // Optional as it's not in current form
    trim: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: false, // Optional as it's not in current form
    trim: true,
    lowercase: true,
    maxlength: 100
  },
  phone: {
    type: String,
    required: false, // Optional as it's not in current form
    trim: true,
    maxlength: 20
  },
  
  // Application Details
  jobTitle: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
    index: true
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 2000
  },
  
  // File Information
  resumeFileName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255
  },
  resumeSize: {
    type: Number,
    required: true,
    min: 0,
    max: 5242880 // 5MB in bytes
  },
  
  // Email Information
  emailSent: {
    type: Boolean,
    default: false
  },
  emailMessageId: {
    type: String,
    trim: true
  },
  emailSentAt: {
    type: Date
  },
  
  // Status and Tracking
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'shortlisted', 'rejected', 'hired'],
    default: 'pending'
  },
  
  // Timestamps
  appliedAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  reviewedAt: {
    type: Date
  },
  reviewedBy: {
    type: String,
    trim: true
  },
  
  // Additional Notes (for HR team)
  notes: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  
  // IP Address for tracking
  ipAddress: {
    type: String,
    trim: true
  },
  
  // User Agent for tracking
  userAgent: {
    type: String,
    trim: true
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt automatically
  versionKey: false
});

// Indexes for better query performance
careerApplicationSchema.index({ jobTitle: 1, appliedAt: -1 });
careerApplicationSchema.index({ status: 1, appliedAt: -1 });
careerApplicationSchema.index({ emailSent: 1 });
careerApplicationSchema.index({ appliedAt: -1 });

// Virtual for formatted application date
careerApplicationSchema.virtual('formattedAppliedAt').get(function() {
  return this.appliedAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
});

// Method to mark email as sent
careerApplicationSchema.methods.markEmailSent = function(messageId) {
  this.emailSent = true;
  this.emailMessageId = messageId;
  this.emailSentAt = new Date();
  return this.save();
};

// Method to update status
careerApplicationSchema.methods.updateStatus = function(status, reviewedBy = null, notes = null) {
  this.status = status;
  if (reviewedBy) this.reviewedBy = reviewedBy;
  if (notes) this.notes = notes;
  this.reviewedAt = new Date();
  return this.save();
};

// Static method to get applications by status
careerApplicationSchema.statics.getByStatus = function(status, limit = 50, skip = 0) {
  return this.find({ status })
    .sort({ appliedAt: -1 })
    .limit(limit)
    .skip(skip);
};

// Static method to get applications by job title
careerApplicationSchema.statics.getByJobTitle = function(jobTitle, limit = 50, skip = 0) {
  return this.find({ jobTitle })
    .sort({ appliedAt: -1 })
    .limit(limit)
    .skip(skip);
};

// Static method to get recent applications
careerApplicationSchema.statics.getRecent = function(limit = 20) {
  return this.find()
    .sort({ appliedAt: -1 })
    .limit(limit);
};

// Static method to get application statistics
careerApplicationSchema.statics.getStats = async function() {
  const stats = await this.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 }
      }
    }
  ]);
  
  const total = await this.countDocuments();
  const emailSent = await this.countDocuments({ emailSent: true });
  
  return {
    total,
    emailSent,
    statusBreakdown: stats.reduce((acc, stat) => {
      acc[stat._id] = stat.count;
      return acc;
    }, {}),
    emailSuccessRate: total > 0 ? (emailSent / total * 100).toFixed(2) : 0
  };
};

module.exports = mongoose.model('CareerApplication', careerApplicationSchema);
