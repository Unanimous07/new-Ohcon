#!/bin/bash

# OHCON Website Deployment Script

echo "🚀 Starting OHCON Website Deployment..."

# Build the application
echo "📦 Building application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Copy additional files
echo "📋 Copying additional files..."
cp CNAME docs/ 2>/dev/null || echo "No CNAME file found"
cp .nojekyll docs/ 2>/dev/null || echo "No .nojekyll file found"

# Create .nojekyll file for GitHub Pages
echo "" > docs/.nojekyll

echo "🎉 Deployment preparation complete!"
echo "📁 Files are ready in the 'docs' directory"
echo ""
echo "Next steps:"
echo "1. Configure EmailJS with your credentials"
echo "2. Set up Google Analytics"
echo "3. Upload to your hosting provider"
echo "4. Configure custom domain (if applicable)"