# Marketing Agency Website Template

A fully customizable marketing agency website template built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

1. **Clone the template**
2. **Install dependencies**: `npm install`
3. **Customize your content** in `template-config.ts`
4. **Run the development server**: `npm run dev`
5. **Deploy** your customized website

## 📁 Template Structure

```
├── template-config.ts          # Main configuration file
├── components/
│   ├── sections/              # Reusable page sections
│   │   ├── HeroSection.tsx    # Hero section with CTA
│   │   ├── StatsSection.tsx   # Statistics display
│   │   ├── ServicesSection.tsx # Services showcase
│   │   ├── TestimonialsSection.tsx # Client testimonials
│   │   └── CTASection.tsx     # Call-to-action sections
│   ├── ui/                    # UI components (buttons, cards, etc.)
│   │   └── icon.tsx           # Icon system
│   ├── Header.tsx             # Navigation header
│   ├── Footer.tsx             # Site footer
│   └── [Page].tsx             # Page components
└── styles/
    └── globals.css            # Global styles and theme
```

## ⚙️ Configuration

### 1. Company Information

Edit `template-config.ts` to customize your company details:

```typescript
company: {
  name: "Your Agency Name",
  tagline: "Your unique value proposition",
  description: "Brief description of your services",
  email: "contact@yourcompany.com",
  phone: "+1 (555) 123-4567",
  address: {
    street: "123 Business Ave",
    city: "Your City",
    state: "State",
    zip: "12345"
  }
}
```

### 2. Services Configuration

Customize your services offering:

```typescript
services: [
  {
    icon: "chart-line",          // Icon name from icon.tsx
    title: "Service Name",
    description: "Service description",
    features: ["Feature 1", "Feature 2"],
    color: "blue"                // Color theme
  }
]
```

**Available Icons:**
- `chart-line`, `users`, `target`, `zap`, `code`, `analytics`
- `lightbulb`, `handshake`, `trophy`, `phone`, `mail`, `map-pin`
- `arrow-right`, `check-circle`, `star`, `help-circle`, `external-link`
- And many more in `components/ui/icon.tsx`

**Available Colors:**
- `blue`, `green`, `purple`, `orange`

### 3. Hero Section

Customize your homepage hero:

```typescript
hero: {
  badge: "Your unique badge",
  title: "Main headline",
  titleHighlight: "Highlighted part",
  subtitle: "Supporting description",
  primaryCTA: "Primary button text",
  secondaryCTA: "Secondary button text"
}
```

### 4. Statistics

Update your achievement numbers:

```typescript
stats: [
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  // Add more stats...
]
```

### 5. Team Members

Add your team:

```typescript
team: [
  {
    name: "Team Member Name",
    role: "Position",
    description: "Brief bio",
    avatar: "https://your-image-url.jpg"
  }
]
```

### 6. Testimonials

Showcase client feedback:

```typescript
testimonials: [
  {
    name: "Client Name",
    company: "Company Name",
    role: "Client Title",
    content: "Testimonial text",
    rating: 5,
    avatar: "https://client-photo-url.jpg"
  }
]
```

## 🎨 Theming

### CSS Variables

Customize colors in `styles/globals.css`:

```css
:root {
  --primary: #030213;        /* Primary brand color */
  --secondary: #f3f3f5;      /* Secondary color */
  --accent: #3b82f6;         /* Accent color */
  /* ... other colors */
}
```

### Template Theme Override

You can also override theme colors in `template-config.ts`:

```typescript
theme: {
  primary: "#your-primary-color",
  secondary: "#your-secondary-color",
  accent: "#your-accent-color"
}
```

## 📱 Responsive Design

The template is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)  
- Mobile (up to 767px)

All sections automatically adapt to different screen sizes.

## 🔧 Customization Examples

### Adding a New Service

```typescript
// In template-config.ts
services: [
  // ... existing services
  {
    icon: "analytics",
    title: "Data Analytics",
    description: "Transform data into actionable insights",
    features: ["Data Visualization", "Reporting", "Insights"],
    color: "purple"
  }
]
```

### Changing Color Scheme

```css
/* In styles/globals.css */
:root {
  --primary: #7c3aed;        /* Purple primary */
  --accent: #06b6d4;         /* Cyan accent */
}
```

### Adding New Navigation Item

```typescript
// In template-config.ts
navigation: [
  // ... existing items
  { label: "Portfolio", href: "portfolio" }
]
```

### Custom CTA Section

```typescript
// Use CTASection component with custom props
<CTASection 
  title="Custom CTA Title"
  subtitle="Custom description"
  primaryCTA="Custom Button"
  backgroundColor="bg-purple-600"
  onPrimaryCTA={() => {/* custom action */}}
/>
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`  
2. Deploy `dist` folder

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder to your server

## 📦 Built With

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## 🎯 Template Features

### ✅ Included Pages
- Homepage with hero, services, testimonials
- About page with team and values
- Blog/News system
- FAQ section
- Contact form
- Admin dashboard

### ✅ Components
- Responsive navigation
- Hero sections
- Service cards
- Testimonial cards
- Statistics display
- Call-to-action sections
- Contact forms
- Team member cards

### ✅ Admin Features
- Blog post management
- Contact form submissions
- FAQ management
- Analytics dashboard
- User authentication

## 🔒 Security Notes

For production use:
- Change default admin credentials
- Use environment variables for sensitive data
- Implement proper authentication
- Add rate limiting
- Use HTTPS

## 📞 Support

Need help customizing your template?
- Check the configuration examples above
- Review component props in the code
- Test changes in development mode
- Refer to React and Tailwind documentation

## 📄 License

This template is provided as-is for commercial and personal use.

---

**Happy building! 🎉**

Transform this template into your unique marketing agency website by customizing the `template-config.ts` file and adding your own content and branding.