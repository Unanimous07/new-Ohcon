# EmailJS Setup Instructions for OHCON Contact Form

## Overview
The contact form is now integrated with EmailJS to send messages to `message@ohconmw.org`.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID** (e.g., `service_ohcon`)

### 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{contact_reason}}

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
```

4. Set template variables:
   - `from_name`: {{full_name}}
   - `from_email`: {{from_email}}
   - `phone`: {{phone}}
   - `reason`: {{contact_reason}}
   - `message`: {{message}}
   - `to_email`: message@ohconmw.org

5. Note down your **Template ID** (e.g., `template_contact`)

### 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**
3. Copy this key

### 5. Update Configuration
1. Open `src/app/shared/services/email.service.ts`
2. Replace these values:
   ```typescript
   private readonly serviceId = 'YOUR_SERVICE_ID'; // From step 2
   private readonly templateId = 'YOUR_TEMPLATE_ID'; // From step 3
   private readonly publicKey = 'YOUR_PUBLIC_KEY'; // From step 4
   ```

### 6. Configure Email Destination
The service is already configured to send emails to `message@ohconmw.org`. Make sure this email:
- Exists and is accessible
- Can receive emails from EmailJS
- Is monitored regularly for new contact form submissions

## Testing
1. Fill out the contact form on your website
2. Submit the form
3. Check the `message@ohconmw.org` inbox
4. Verify the email contains all form data correctly

## Free Plan Limits
- EmailJS free plan allows 200 emails per month
- For higher volume, consider upgrading to a paid plan

## Security Notes
- The public key is safe to expose in frontend code
- EmailJS handles the actual email sending securely
- No sensitive email credentials are stored in your frontend

## Troubleshooting
- Check browser console for error messages
- Verify all IDs and keys are correct
- Ensure the destination email is valid
- Check EmailJS dashboard for sending logs
