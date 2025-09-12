# MaBS Backend - Career Application Email Service

A Node.js backend service for handling career application emails from the MaBS website.

## Features

- ✅ Email sending for career applications
- ✅ File attachment support (PDF, DOC, DOCX)
- ✅ Input validation and sanitization
- ✅ Rate limiting protection
- ✅ CORS configuration
- ✅ Security middleware (Helmet)
- ✅ Professional email templates
- ✅ Error handling and logging

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure your settings:

```bash
cp env.example .env
```

Edit the `.env` file with your email configuration:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Email Configuration (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Recipients
CAREER_EMAIL=hiring@manvian.com
FROM_EMAIL=noreply@manvian.com

# CORS Configuration
FRONTEND_URL=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

### 3. Gmail Setup (if using Gmail)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `SMTP_PASS`

### 4. Start the Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### POST `/api/career/apply`
Submit a career application with resume attachment.

**Request Body:**
```json
{
  "jobTitle": "Front End Developer (Internship)",
  "message": "I am interested in this position...",
  "resumeFileName": "resume.pdf",
  "resumeBase64": "base64-encoded-file-content",
  "to": "hiring@manvian.com"
}
```

**Response:**
```json
{
  "success": true,
  "messageId": "email-message-id",
  "message": "Career application submitted successfully"
}
```

### GET `/api/career/health`
Health check endpoint.

### GET `/api/career/file-types`
Get allowed file types and size limits.

### POST `/api/career/test-email`
Test email configuration (for debugging).

## Frontend Integration

Update your frontend to use the new backend endpoint:

```javascript
// Replace the Google Apps Script URL with:
const response = await fetch("http://localhost:3001/api/career/apply", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});
```

## Security Features

- **Rate Limiting**: 5 requests per 15 minutes per IP for career applications
- **Input Validation**: Joi schema validation for all inputs
- **File Type Validation**: Only PDF, DOC, DOCX files allowed
- **File Size Limit**: 5MB maximum file size
- **CORS Protection**: Configured for specific frontend URL
- **Helmet Security**: Security headers and protections
- **Input Sanitization**: XSS protection and input cleaning

## File Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── email.js
│   ├── middleware/
│   │   └── validation.js
│   ├── routes/
│   │   └── career.js
│   ├── services/
│   │   └── emailService.js
│   └── server.js
├── package.json
├── env.example
└── README.md
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3001 |
| `NODE_ENV` | Environment | development |
| `SMTP_HOST` | SMTP server host | - |
| `SMTP_PORT` | SMTP server port | - |
| `SMTP_USER` | SMTP username | - |
| `SMTP_PASS` | SMTP password | - |
| `CAREER_EMAIL` | Career application recipient | - |
| `FROM_EMAIL` | Sender email address | - |
| `FRONTEND_URL` | Frontend URL for CORS | http://localhost:5173 |

## Troubleshooting

### Email Not Sending
1. Check SMTP credentials in `.env`
2. Verify Gmail app password is correct
3. Check firewall/network restrictions
4. Test email configuration with `/api/career/test-email`

### CORS Issues
1. Verify `FRONTEND_URL` in `.env` matches your frontend URL
2. Check browser console for CORS errors
3. Ensure backend is running on correct port

### File Upload Issues
1. Verify file type is allowed (PDF, DOC, DOCX)
2. Check file size is under 5MB
3. Ensure base64 encoding is correct

## License

MIT License - see package.json for details.
