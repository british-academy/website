# British Language Academy Website

A modern, multilingual website for the British Language Academy - a prestigious language institution based in Morocco offering English language courses and international certifications.

## 🌍 About

British Language Academy is a leading language school with locations across Morocco (Casablanca, Berrechid, and El Jadida). We specialize in English language education, offering internationally recognized certifications including TOEFL, TOEIC, and IELTS. Our programs cater to learners of all ages, from children to professionals.

## 🚀 Features

- **Multilingual Support**: English, French, and Arabic with RTL support
- **Modern Design**: Responsive, accessible design with dark/light theme toggle
- **Content Management**: DecapCMS integration for easy content updates
- **Performance Optimized**: Static site generation with optimized assets
- **SEO Ready**: Built-in sitemap generation and meta tag management
- **Internationalization**: Complete i18n support with proper locale handling

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.7.10
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **Content**: MDX/Markdown with Astro Content Collections
- **Package Manager**: [Bun](https://bun.sh/)
- **Development Environment**: Nix/Devenv
- **Content Management**: [DecapCMS](https://decapcms.org/)
- **TypeScript**: Full type safety throughout the application

## 📁 Project Structure

```
website/
├── public/                 # Static assets and CMS config
│   ├── decapcms/          # Content management system
│   └── _headers           # Netlify headers configuration
├── src/
│   ├── components/        # Reusable UI components
│   ├── content/          # Content collections
│   │   ├── pages/        # Multilingual page content
│   │   └── config.ts     # Content schema definitions
│   ├── layouts/          # Page layouts
│   ├── pages/           # Astro routes
│   ├── utils/           # Utility functions
│   └── assets/          # Static assets (images, videos, fonts)
├── astro.config.ts      # Astro configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- [Nix](https://nixos.org/) (for development environment)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/british-academy/website.git
   cd website
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or with npm
   npm install
   ```

3. **Start development server**

   ```bash
   bun run dev
   # or with npm
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📝 Available Scripts

| Command           | Action                                           |
| ----------------- | ------------------------------------------------ |
| `bun run dev`     | Starts local dev server at `localhost:4321`      |
| `bun run build`   | Build your production site to `./dist/`          |
| `bun run preview` | Preview your build locally, before deploying     |
| `bun run astro`   | Run CLI commands like `astro add`, `astro check` |

## 🌐 Internationalization

The website supports three languages:

- **English** (default) - Left-to-right (LTR)
- **French** - Left-to-right (LTR)
- **Arabic** - Right-to-left (RTL)

### Adding New Content

1. Create content files in `src/content/pages/{locale}/`
2. Use the appropriate frontmatter schema defined in `src/content/config.ts`
3. Add translations to `src/content/translations.ts`

### Content Structure

Each page should include:

```yaml
---
createdDate: "2024-09-11T17:13:30Z"
updatedDate: "2024-09-11T17:13:30Z"
draft: false
name: "Page Name"
title: "Page Title"
description: "Page description for SEO"
image:
  src: "~/assets/images/image.jpg"
  alt: "Image description"
---
```

## 🎨 Design System

The website uses a custom color palette defined in `tailwind.config.ts`:

- **Primary**: Orange (#e69138) - Main brand color
- **Secondary**: Blue (#6fa8dc) - Accent color
- **Dark**: Navy (#073763) - Text and backgrounds
- **Accent**: Green (#87b23f) - Success/highlight color

## 📊 Content Management

The website integrates with DecapCMS for easy content management:

1. Access the CMS at `https://your-domain.com/decapcms/`
2. Authenticate with your GitHub account
3. Edit content directly in the browser
4. Changes are automatically committed to the repository

## 🚀 Deployment

The website is configured for deployment on Netlify with:

- Automatic builds from the `master` branch
- Asset optimization and caching headers
- Content management system integration

### Environment Variables

Set the following environment variables for production:

```bash
SITE_URL=https://british.academy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to British Language Academy.

---

# 🗺️ Roadmap

## 🚨 Critical Issues

### Content Management

- [ ] **Fix DecapCMS configuration** - Current config references non-existent `post` collection
- [ ] **Update CMS schema** to match actual `pages` collection structure
- [ ] **Add media management** for current content structure
- [ ] **Create content editor documentation** for non-technical users

### Content & Localization

- [ ] **Complete missing translations** - Some French and Arabic translations are incomplete
- [ ] **Expand About page content** - Currently only contains an `<h1>` tag
- [ ] **Add content validation** with more specific schemas
- [ ] **Standardize content structure** across all language versions

## 🔧 Technical Improvements

### SEO & Performance

- [ ] **Add structured data (JSON-LD)** for better search engine understanding
- [ ] **Improve image optimization** with better alt texts and responsive images
- [ ] **Add comprehensive robots.txt** content
- [ ] **Implement Open Graph** and Twitter Card meta tags
- [ ] **Add sitemap validation** and testing

### Development Experience

- [ ] **Enable TypeScript strict mode** for better type safety
- [ ] **Add pre-commit hooks** for code quality (linting, formatting)
- [ ] **Set up testing framework** (Vitest + Playwright)
- [ ] **Add ESLint rules** for Astro and TypeScript
- [ ] **Implement code coverage** reporting

### Error Handling & UX

- [ ] **Add proper 404 pages** for each language
- [ ] **Implement error boundaries** and error pages
- [ ] **Add loading states** for dynamic content
- [ ] **Improve accessibility** with ARIA labels and keyboard navigation
- [ ] **Add form validation** for contact forms

## 🚀 Deployment & Operations

### CI/CD Pipeline

- [ ] **Set up automated testing** in CI/CD pipeline
- [ ] **Add automated quality checks** (linting, type checking)
- [ ] **Implement staging environment** for testing before production
- [ ] **Add deployment notifications** (Slack, email)
- [ ] **Set up automated backups** for content

### Monitoring & Analytics

- [ ] **Implement analytics** (Google Analytics, Plausible)
- [ ] **Add performance monitoring** (Core Web Vitals)
- [ ] **Set up error tracking** (Sentry)
- [ ] **Add uptime monitoring** for the website
- [ ] **Implement content performance** tracking

## 📱 Content & Features

### New Content Sections

- [ ] **Add testimonials section** with student reviews
- [ ] **Create course catalog** with detailed program information
- [ ] **Add staff/team page** with instructor profiles
- [ ] **Implement blog/news section** for updates and articles
- [ ] **Add events calendar** for upcoming classes and activities

### Interactive Features

- [ ] **Add contact forms** with proper validation
- [ ] **Implement course registration** system
- [ ] **Add online booking** for consultations
- [ ] **Create student portal** for enrolled students
- [ ] **Add newsletter subscription** functionality

## 🔒 Security & Compliance

### Security Enhancements

- [ ] **Implement Content Security Policy** headers
- [ ] **Add rate limiting** for forms and API endpoints
- [ ] **Set up security monitoring** and alerts
- [ ] **Implement proper CORS** policies
- [ ] **Add input sanitization** for user-generated content

### Privacy & Compliance

- [ ] **Create comprehensive privacy policy** page
- [ ] **Implement GDPR compliance** features
- [ ] **Add cookie consent** management
- [ ] **Create terms of service** page
- [ ] **Add data retention** policies

## 🎨 Design & UX

### Visual Improvements

- [ ] **Add animations** and micro-interactions
- [ ] **Implement progressive image loading**
- [ ] **Add skeleton loading** states
- [ ] **Improve mobile navigation** experience
- [ ] **Add breadcrumb navigation** for better UX

### Accessibility

- [ ] **Conduct accessibility audit** and fix issues
- [ ] **Add skip navigation** links
- [ ] **Improve color contrast** ratios
- [ ] **Add focus indicators** for keyboard navigation
- [ ] **Implement screen reader** optimizations

## 📊 Performance Optimization

### Core Web Vitals

- [ ] **Optimize Largest Contentful Paint (LCP)**
- [ ] **Improve First Input Delay (FID)**
- [ ] **Reduce Cumulative Layout Shift (CLS)**
- [ ] **Implement resource hints** (preload, prefetch)
- [ ] **Add service worker** for offline functionality

### Asset Optimization

- [ ] **Implement WebP/AVIF** image formats
- [ ] **Add image lazy loading** for better performance
- [ ] **Optimize font loading** with font-display
- [ ] **Minimize bundle size** with tree shaking
- [ ] **Implement critical CSS** inlining

## 🔄 Maintenance & Updates

### Regular Maintenance

- [ ] **Set up dependency update** automation
- [ ] **Create maintenance schedule** for content updates
- [ ] **Implement automated backups** for content
- [ ] **Add health check** endpoints
- [ ] **Create disaster recovery** plan

### Documentation

- [ ] **Write comprehensive API** documentation
- [ ] **Create deployment guide** for new team members
- [ ] **Add troubleshooting guide** for common issues
- [ ] **Document content management** workflows
- [ ] **Create style guide** for content creators

---

## 📞 Contact

For questions about this website or the British Language Academy, please contact us through our website or visit one of our locations in Morocco.
