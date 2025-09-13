# Production Deployment Configuration

## Environment Variables for Production

For secure deployment, consider using environment variables instead of hardcoded values:

### Option 1: Environment Variables (Recommended for Docker/Cloud)
```bash
# Set these in your production environment
EMAILJS_SERVICE_ID=service_your_id_here
EMAILJS_TEMPLATE_ID=template_your_id_here  
EMAILJS_PUBLIC_KEY=your_public_key_here
PRODUCTION_DOMAIN=https://ohconmw.org
```

### Option 2: Build-time Configuration
Create `src/environments/environment.prod.ts` with your actual values before building:

```typescript
export const environment = {
  production: true,
  emailjs: {
    serviceId: 'service_actual_id',
    templateId: 'template_actual_id', 
    publicKey: 'actual_public_key'
  },
  api: {
    baseUrl: 'https://ohconmw.org'
  }
};
```

## Build Commands

### Development Build
```bash
ng serve
# or
npm start
```

### Production Build
```bash
ng build --configuration=production
# Output will be in docs/ folder for GitHub Pages
```

### Production Build with Environment Check
```bash
# Build and verify environment configuration
ng build --configuration=production && echo "Build complete - check docs/ folder"
```

## Hosting Configuration

### GitHub Pages (Current Setup)
- Build output: `docs/` folder
- Domain: Configure in repository settings
- SSL: Automatically provided by GitHub

### Alternative Hosting Options
1. **Netlify**: Drag & drop `docs/` folder
2. **Vercel**: Connect GitHub repository  
3. **Firebase Hosting**: `firebase deploy`
4. **AWS S3**: Upload `docs/` contents

## Security Considerations for Production

1. **HTTPS Required**: EmailJS requires HTTPS in production
2. **Domain Verification**: Configure allowed domains in EmailJS dashboard
3. **Rate Limiting**: Monitor EmailJS usage to prevent abuse
4. **Form Validation**: Client and server-side validation implemented

## Performance Optimization

1. **Lazy Loading**: Implemented for route-based code splitting
2. **Image Optimization**: Compress images in `src/assets/images/`
3. **Font Loading**: Optimized Google Fonts loading
4. **Bundle Analysis**: Use `ng build --stats-json` and webpack-bundle-analyzer

## Production Checklist

### Before Deployment:
- [ ] EmailJS credentials configured
- [ ] Contact form tested
- [ ] All links working
- [ ] Images loading correctly
- [ ] Mobile responsiveness verified
- [ ] SSL certificate configured
- [ ] Domain pointed to hosting
- [ ] Analytics configured (if needed)

### After Deployment:
- [ ] Contact form working on live site
- [ ] Email delivery confirmed
- [ ] All pages loading correctly
- [ ] SEO meta tags verified
- [ ] Performance tested
- [ ] Mobile testing completed

## Monitoring and Maintenance

1. **EmailJS Dashboard**: Monitor email usage and delivery
2. **Google Analytics**: Track website performance (optional)
3. **Regular Testing**: Test contact form monthly
4. **SSL Certificate**: Auto-renewed by hosting provider
5. **Content Updates**: Update content via GitHub repository

## Contact Form Error Handling

The contact form includes comprehensive error handling:
- Form validation errors
- EmailJS service errors  
- Network connectivity errors
- User-friendly error messages
- Fallback contact information

## Backup Contact Methods

If EmailJS fails, users can contact OHCON via:
- Direct email: info@ohconmw.org
- Alternative email: message@ohconmw.org
- Social media links (if configured)
- Phone numbers listed on contact page