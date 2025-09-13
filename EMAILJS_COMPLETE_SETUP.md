# Complete EmailJS Configuration Guide for OHCON

## Overview
This guide provides step-by-step instructions to configure EmailJS for the OHCON contact form.

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## 2. Set Up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for simplicity)
   - **Outlook/Hotmail**
   - **Custom SMTP**
4. Follow the setup instructions for your chosen provider
5. **IMPORTANT**: Note down your **Service ID** (e.g., `service_ohcon123`)

## 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Set the template as follows:

### Template Settings:
- **Template Name**: OHCON Contact Form
- **Template ID**: Note this down (e.g., `template_contact123`)

### Email Subject:
```
New Contact Form Submission - {{contact_reason}}
```

### Email Content:
```
Hello OHCON Team,

You have received a new message through the website contact form.

Contact Details:
- Name: {{full_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Reason: {{contact_reason}}

Message:
{{message}}

---
This message was sent automatically from the OHCON website contact form.
Reply directly to {{from_email}} to respond to this inquiry.

Best regards,
OHCON Website System
```

### Template Variables (Auto-filled):
The following variables are automatically sent from the contact form:
- `full_name` - Combined first and last name
- `from_email` - Sender's email address
- `phone` - Phone number
- `contact_reason` - Reason for contact (formatted)
- `message` - Message content
- `from_name` - Full name (duplicate for compatibility)
- `reply_to` - Reply-to email address

## 4. Get Your Public Key
1. Go to "Account" → "General" in EmailJS dashboard
2. Find your **Public Key** (starts with something like `user_...` or newer format)
3. Copy this key

## 5. Configure Environment Files

### For Development (src/environments/environment.ts):
```typescript
export const environment = {
  production: false,
  emailjs: {
    serviceId: 'YOUR_SERVICE_ID_HERE',        // From step 2
    templateId: 'YOUR_TEMPLATE_ID_HERE',      // From step 3  
    publicKey: 'YOUR_PUBLIC_KEY_HERE'         // From step 4
  },
  api: {
    baseUrl: 'http://localhost:4200'
  }
};
```

### For Production (src/environments/environment.prod.ts):
```typescript
export const environment = {
  production: true,
  emailjs: {
    serviceId: 'YOUR_SERVICE_ID_HERE',        // Same as development
    templateId: 'YOUR_TEMPLATE_ID_HERE',      // Same as development
    publicKey: 'YOUR_PUBLIC_KEY_HERE'         // Same as development
  },
  api: {
    baseUrl: 'https://ohconmw.org'           // Your production domain
  }
};
```

## 6. Set Up Destination Email
Configure the email address where contact form submissions should be sent:

1. In your EmailJS template, set the destination email in the "To Email" field
2. Use: `info@ohconmw.org` or your preferred OHCON email address
3. Make sure this email address can receive messages

## 7. Test the Configuration

### Development Testing:
1. Run `ng serve`
2. Go to contact page
3. Fill out and submit the form
4. Check your destination email for the message
5. Check browser console for any errors

### Production Testing:
1. Build for production: `ng build`
2. Deploy to your hosting platform
3. Test the contact form on the live site

## 8. Security Notes
- The public key is safe to expose in frontend code
- EmailJS handles email sending securely
- No sensitive credentials are stored in your frontend
- All email processing happens on EmailJS servers

## 9. Email Plan Limits
- **Free Plan**: 200 emails/month
- **Personal Plan**: $5/month for 1,000 emails
- **Team Plan**: $15/month for 5,000 emails

## 10. Troubleshooting

### Common Issues:
1. **"EmailJS not configured" warning**: Update environment files with real credentials
2. **Form submission fails**: Check service ID, template ID, and public key
3. **Email not received**: Verify destination email and template settings
4. **Console errors**: Check network tab for EmailJS API responses

### Debug Steps:
1. Open browser developer tools
2. Go to Console tab
3. Submit contact form
4. Look for any error messages
5. Check Network tab for failed requests

### Support:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available through their dashboard

## 11. Production Deployment Checklist
- [ ] EmailJS account created and verified
- [ ] Email service configured
- [ ] Email template created with proper content
- [ ] Public key obtained
- [ ] Environment files updated with real credentials
- [ ] Contact form tested in development
- [ ] Production build tested
- [ ] Destination email verified
- [ ] Email sending limits understood

---

**Note**: Keep your EmailJS credentials secure and never commit them to public repositories. Consider using environment variables for sensitive deployment configurations.