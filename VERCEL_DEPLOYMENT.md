# Vercel Deployment Guide

This guide will help you solve the "Internal Server Error" issue when deploying this Express Pug application to Vercel.

## Configuration Steps

### 1. Vercel Configuration

The `vercel.json` file has been updated to point directly to your TypeScript entry point and include all necessary files:

```json
{
    "version": 2,
    "builds": [
      {
        "src": "index.ts",
        "use": "@vercel/node",
        "config": {
          "includeFiles": ["views/**/*", "public/**/*"]
        }
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "/"
      }
    ]
}
```

This configuration tells Vercel to:
1. Use the Node.js runtime for your TypeScript file
2. Include all files in your views and public directories
3. Route all requests to your main application file

### 2. Pre-deployment Checklist

Before deploying to Vercel, make sure to:

1. Build your CSS files:
   ```bash
   npm run build:css
   ```

2. Verify your project structure:
   - All templates should be in the `views` folder
   - All static assets should be in the `public` folder
   - CSS should be properly compiled at `public/styles/global.css`

3. Make sure all path references use `path.join(__dirname, ...)` for proper resolution

### 3. Deployment Process

1. Push your changes to your Git repository
2. Connect your repository to Vercel
3. Deploy your application

### 4. Troubleshooting

If you still encounter "Internal Server Error" issues:

1. Check Vercel's deployment logs for specific error messages
2. Verify that your `package.json` includes all necessary dependencies
3. Make sure TypeScript configurations are correct and compatible with Vercel
4. Test locally with `npm run build` followed by `npm start` to catch any build-time errors

### 5. Environment Considerations

- Vercel's serverless environment differs from traditional Node.js hosting
- Make sure your application doesn't rely on local file system operations that might not work in a serverless context
- For persistent storage, consider using a database instead of the file system
