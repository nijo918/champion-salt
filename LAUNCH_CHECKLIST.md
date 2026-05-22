# Champion Salt Launch Checklist

## 1. Site Structure
- [ ] Home page: `/champion-salt/`
- [ ] Products page: `/champion-salt/products/`
- [ ] Services page: `/champion-salt/services/`
- [ ] Contact page: `/champion-salt/contact/`
- [ ] 404 / not-found page handles missing routes

## 2. Content & Branding
- [ ] Slogan updated to **Quality in Every Crystal.**
- [ ] Homepage hero messaging clear and customer-focused
- [ ] Logo image exists at `/champion-salt/assets/logo.jpeg`
- [ ] Favicon and manifest are configured for GitHub Pages
- [ ] Contact details visible and correct across all pages
- [ ] All CTA buttons use correct `/champion-salt/...` links
- [ ] No placeholder text or temporary copy remains

## 3. SEO & Metadata
- [ ] Unique page title and description set in `app/layout.tsx`
- [ ] Open Graph metadata configured for social sharing
- [ ] Twitter card metadata configured
- [ ] All asset references use repo base path `/champion-salt`
- [ ] `next.config.mjs` includes `basePath` and `assetPrefix`
- [ ] `robots.txt` and sitemap generation planned or added

## 4. Mobile & Performance
- [ ] Responsive layout verified for mobile, tablet, desktop
- [ ] No horizontal scroll on small screens
- [ ] Touch targets are large enough to tap
- [ ] Images served from `/champion-salt/assets/`
- [ ] CSS and JS assets load correctly on GitHub Pages
- [ ] Build output is static export-friendly for GitHub Pages

## 5. Accessibility
- [ ] Alt text present for all hero and product images
- [ ] Navigation links are keyboard-accessible
- [ ] Contrast and readability checked for text and buttons
- [ ] Forms and CTA controls use accessible labels

## 6. Security & Deployment
- [ ] `.nojekyll` present for GitHub Pages
- [ ] Site deployed from `gh-pages` or GitHub Pages source branch
- [ ] HTTPS is enforced via GitHub Pages
- [ ] Domain paths are correct for repo pages deployment

## 7. Launch Tasks
- [ ] Push latest `main` changes to GitHub
- [ ] Confirm GitHub Actions workflow completes successfully
- [ ] Verify live site loads CSS/JS from `/champion-salt/_next/static/`
- [ ] Hard refresh and validate latest live deployment
- [ ] Submit sitemap and request indexing after launch

## 8. Optional Legal Pages
- [ ] Privacy Policy page created
- [ ] Terms & Conditions page created
- [ ] Cookie Policy page created if cookies are used

## 9. Final Pre-Launch Review
- [ ] Remove any test content or developer notes
- [ ] Confirm analytics/tracking tags are ready
- [ ] Check contact form / email / WhatsApp links
- [ ] Test the site on Chrome, Safari, Firefox, and Edge
