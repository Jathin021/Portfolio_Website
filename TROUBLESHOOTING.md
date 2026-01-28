# Troubleshooting Guide

## NPM Deprecation Warnings

If you see warnings like:
```
npm warn deprecated whatwg-encoding@2.0.0
npm warn deprecated abab@2.0.6
npm warn deprecated domexception@4.0.0
```

### What They Mean

These are **deprecation warnings** (not errors) from transitive dependencies. They come from `jsdom`, which is used for testing.

### Are They a Problem?

**No!** These warnings are:
- ✅ Safe to ignore
- ✅ Only affect dev dependencies (testing)
- ✅ Not included in production builds
- ✅ Will be fixed when `jsdom` updates

### Solutions

#### Option 1: Ignore Them (Recommended)
These warnings don't affect your application. You can safely ignore them.

#### Option 2: Update Dependencies
Try updating your dependencies:
```bash
npm update
```

#### Option 3: Suppress Warnings (Optional)
If the warnings are annoying, you can suppress them:

Create `.npmrc` file in project root:
```
loglevel=warn
```

Or run commands with:
```bash
npm install --loglevel=warn
```

#### Option 4: Check for Updates
Check if newer versions of `jsdom` are available:
```bash
npm outdated jsdom
```

If a newer version exists, update it:
```bash
npm install --save-dev jsdom@latest
```

---

## Other Common Issues

### Build Fails

**Error**: `vite is not recognized`

**Solution**:
```bash
npm install
```

### Port Already in Use

**Error**: `Port 8080 is already in use`

**Solution**: Change port in `vite.config.ts`:
```typescript
server: {
  port: 3000, // or any other available port
}
```

### TypeScript Errors

**Solution**:
```bash
npm run build
```

Check the output for specific TypeScript errors and fix them.

### Module Not Found

**Error**: `Cannot find module`

**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

On Windows:
```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

---

## Getting Help

If you encounter other issues:
1. Check the error message carefully
2. Search for the error on Stack Overflow
3. Check the official documentation:
   - [Vite Docs](https://vitejs.dev)
   - [React Docs](https://react.dev)
   - [TypeScript Docs](https://www.typescriptlang.org)
