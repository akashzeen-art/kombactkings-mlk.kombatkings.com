# KombatKings Frontend Deployment Guide

## 📦 Production Build Ready

### Build Information
- **Build Date**: $(date)
- **Build Tool**: Vite 7.3.1
- **Framework**: React 18.3.1 with TypeScript
- **Routing**: React Router DOM (SPA)

### 📁 Deployment Files
The `dist` folder contains all production-ready files:
- `index.html` - Main entry point
- `assets/` - Optimized JS and CSS bundles
- `_redirects` - SPA routing configuration
- Static assets (images, videos)

### 🚀 Deployment Options

#### Option 1: Static Hosting (Netlify, Vercel, AWS S3)
1. Upload entire `dist` folder
2. The `_redirects` file handles all SPA routes automatically
3. Configure custom domain if needed

#### Option 2: Backend Integration (Express, Nginx)

**For Express.js:**
```javascript
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// Handle SPA routing - send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

**For Nginx:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|mp4)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 🔄 SPA Routing Configuration
The `_redirects` file ensures all routes work correctly:
```
/*    /index.html   200
```

This redirects all paths to index.html, allowing React Router to handle routing.

### 📋 Routes Available
- `/` - Home page
- `/arm-wrestling` - Arm Wrestling category
- `/slap-fight` - Slap Fight category
- `/mma-fight` - MMA Fight category
- `/taekwondo` - Taekwondo category
- `/kickboxing` - Kickboxing category

### ⚙️ Environment Variables
No environment variables required for frontend. All API endpoints should be configured in backend.

### 📊 Build Stats
- Total Size: ~520 KB (gzipped: ~152 KB)
- CSS: 65.76 KB (gzipped: 11.63 KB)
- JS: 519.98 KB (gzipped: 152.05 KB)

### 🔧 Rebuild Instructions
To rebuild the production files:
```bash
npm run build
```

### 📦 Compressed Archive
A compressed archive `dist-deployment.tar.gz` has been created for easy transfer.

To extract:
```bash
tar -xzf dist-deployment.tar.gz
```

### ✅ Verification
After deployment, verify:
1. Home page loads correctly
2. All navigation links work
3. Direct URL access to any route works (e.g., /arm-wrestling)
4. Static assets (images, videos) load properly
5. No console errors in browser

### 🆘 Troubleshooting
- **404 on refresh**: Ensure SPA redirect is configured
- **Assets not loading**: Check static file serving path
- **Routing issues**: Verify _redirects or server configuration

### 📞 Support
For deployment issues, contact the development team.
