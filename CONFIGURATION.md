# OHCON Website Configuration Guide

## 🔧 Environment Setup

### 1. EmailJS Configuration

1. **Create EmailJS Account**
   - Visit [EmailJS.com](https://www.emailjs.com/)
   - Create a free account
   - Create a new service (Gmail, Outlook, etc.)

2. **Create Email Templates**

   **Contact Form Template ID: `template_contact_form`**
   ```
   Subject: New Contact - {{contact_reason}}
   
   Hello OHCON Team,
   
   You have received a new contact form submission:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Reason: {{contact_reason}}
   
   Message:
   {{message}}
   
   Please respond within 24 hours.
   ```

   **Volunteer Form Template ID: `template_volunteer_form`**
   ```
   Subject: New Volunteer Application - {{position}}
   
   Hello OHCON Team,
   
   New volunteer application received:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Position: {{position}}
   
   Experience:
   {{experience}}
   
   Availability:
   {{availability}}
   
   Motivation:
   {{motivation}}
   ```

3. **Update Environment Files**
   ```typescript
   // src/environments/environment.prod.ts
   export const environment = {
     production: true,
     emailjs: {
       serviceId: 'service_xxxxxxx',      // Your EmailJS service ID
       templateId: 'template_contact_form', // Contact form template
       publicKey: 'xxxxxxxxxxxxxxxx'      // Your EmailJS public key
     },
     analytics: {
       googleAnalyticsId: 'G-XXXXXXXXXX'  // Your GA4 Measurement ID
     }
   };
   ```

### 2. Google Analytics Setup

1. **Create GA4 Property**
   - Visit [Google Analytics](https://analytics.google.com/)
   - Create new property for ohconmw.org
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Update Environment**
   - Replace `GA_MEASUREMENT_ID` with your actual ID
   - Analytics will only load in production

### 3. Domain Configuration

1. **Custom Domain (ohconmw.org)**
   ```bash
   # Create CNAME file
   echo "ohconmw.org" > docs/CNAME
   ```

2. **SSL Certificate**
   - Most hosting providers offer free SSL
   - Ensure HTTPS is enabled

## 🚀 Deployment Options

### Option 1: GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to `docs` folder
4. Configure custom domain

### Option 2: Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `docs`
4. Configure environment variables

### Option 3: Vercel
1. Import GitHub repository
2. Framework preset: Angular
3. Build command: `npm run build`
4. Output directory: `docs`

## 📧 Email Configuration

### SMTP Settings (Alternative to EmailJS)
If you prefer server-side email handling:

```typescript
// Backend configuration
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'info@ohconmw.org',
    pass: 'your-app-password'
  }
});
```

## 🔍 SEO Configuration

### Google Search Console
1. Add property for ohconmw.org
2. Verify ownership
3. Submit sitemap: `https://ohconmw.org/sitemap.xml`

### Meta Tags Verification
- Facebook: Add `fb:app_id` meta tag
- Twitter: Add `twitter:site` meta tag
- LinkedIn: Verify Open Graph tags

## 📊 Analytics Events

The website tracks these events:
- `page_view` - All page visits
- `form_submit` - Contact and volunteer forms
- `click` - Important button clicks

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit real API keys to repository
   - Use environment-specific configurations

2. **Form Validation**
   - Client-side validation implemented
   - Consider server-side validation for production

3. **Rate Limiting**
   - Consider implementing rate limiting for forms
   - Use CAPTCHA for high-traffic sites

## 📱 Performance Optimization

1. **Image Optimization**
   - Compress images before deployment
   - Use WebP format where possible
   - Implement lazy loading

2. **Bundle Analysis**
   ```bash
   npm install -g webpack-bundle-analyzer
   ng build --stats-json
   webpack-bundle-analyzer dist/stats.json
   ```

## 🧪 Testing Checklist

- [ ] All forms submit successfully
- [ ] Email notifications received
- [ ] Analytics tracking works
- [ ] SEO meta tags display correctly
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility
- [ ] Page load speed < 3 seconds
- [ ] All links work correctly

## 📞 Support

For technical support:
- Email: tech@ohconmw.org
- Documentation: See SETUP.md
- Issues: Create GitHub issue