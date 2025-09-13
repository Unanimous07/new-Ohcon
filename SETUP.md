# OHCON Website Setup Guide

## Environment Configuration

### 1. EmailJS Setup
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service and templates
3. Update environment files:

```typescript
// src/environments/environment.ts & environment.prod.ts
emailjs: {
  serviceId: 'your_service_id',
  templateId: 'your_template_id', 
  publicKey: 'your_public_key'
}
```

### 2. Google Analytics Setup
1. Create GA4 property at [Google Analytics](https://analytics.google.com/)
2. Get Measurement ID
3. Update environment files:

```typescript
analytics: {
  googleAnalyticsId: 'G-XXXXXXXXXX'
}
```

### 3. Email Templates Required

#### Contact Form Template (template_contact_form)
```
Subject: New Contact Form Submission - {{contact_reason}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Reason: {{contact_reason}}

Message:
{{message}}
```

#### Volunteer Form Template (template_volunteer_form)
```
Subject: New Volunteer Application - {{position}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Position: {{position}}

Experience:
{{experience}}

Availability:
{{availability}}

Motivation:
{{motivation}}
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve SSR
npm run serve:ssr:Ohcoma
```

## Deployment Checklist

- [ ] Update EmailJS configuration
- [ ] Set up Google Analytics
- [ ] Configure email templates
- [ ] Test contact forms
- [ ] Verify SEO meta tags
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Validate form submissions