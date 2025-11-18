# Mavaliy Digital Marketing Portfolio

A modern, responsive portfolio website for Mavaliy Digital Marketing built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Next.js 14** with App Router
- **Responsive Design** - Mobile-first approach
- **Dark/Light Mode** toggle
- **SEO Optimized** - Metadata, sitemap, structured data
- **Contact Form** with API integration
- **Smooth Animations** with Framer Motion
- **Professional Design** with custom branding
- **Google Analytics** ready
- **Performance Optimized**

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Theme:** next-themes
- **Deployment:** Vercel

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd mavaliy-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel:**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Deploy automatically

2. **Environment Variables:**
   Set the following in your Vercel dashboard:
   ```
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   ```

### Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
mavaliy-portfolio/
├── app/
│   ├── api/contact/
│   │   └── route.js          # Contact form API
│   ├── contact/
│   │   └── page.jsx          # Contact page
│   ├── globals.css           # Global styles
│   ├── layout.jsx            # Root layout
│   ├── page.jsx              # Home page
│   └── sitemap.js            # Sitemap generation
├── components/
│   ├── About.js              # About section
│   ├── ContactForm.js        # Contact form component
│   ├── Footer.jsx            # Footer component
│   ├── Hero.js               # Hero section
│   ├── Navbar.jsx            # Navigation component
│   ├── Portfolio.js          # Portfolio section
│   ├── Services.js           # Services section
│   └── Testimonials.js       # Testimonials section
├── public/
│   ├── images/               # Static images
│   └── robots.txt            # SEO robots file
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json
```

## 🎨 Customization

### Colors & Branding

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  navy: {
    50: '#f0f4f8',
    100: '#d9e2ec',
    200: '#bcccdc',
    300: '#9fb3c8',
    400: '#829ab1',
    500: '#627d98',
    600: '#486581',
    700: '#334e68',
    800: '#243b53',
    900: '#0a1a2f', // Primary navy
  },
  teal: {
    50: '#e6fffa',
    100: '#b2f5ea',
    200: '#81e6d9',
    300: '#4fd1c5',
    400: '#38b2ac',
    500: '#319795',
    600: '#2c7a7b',
    700: '#285e61',
    800: '#234e52',
    900: '#1a202c',
  }
}
```

### Content Updates

1. **Personal Information:** Update name, bio, and contact details in components
2. **Services:** Modify services array in `Services.js`
3. **Portfolio:** Update projects in `Portfolio.js`
4. **Testimonials:** Add client testimonials in `Testimonials.js`

### SEO Configuration

1. **Update metadata** in `app/layout.jsx` and individual pages
2. **Replace domain** in `app/sitemap.js`
3. **Add Google Analytics ID** in environment variables

## 📊 Analytics Setup

### Google Analytics (GA4)

1. Create a GA4 property
2. Get your measurement ID (G-XXXXXXXXXX)
3. Add to environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Google Search Console

1. Add your sitemap: `https://yourdomain.com/sitemap.xml`
2. Verify ownership
3. Submit sitemap for indexing

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- Uses ESLint for code linting
- Prettier for code formatting
- TypeScript-ready structure

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌟 Performance

- **Image Optimization** with Next.js Image component
- **Code Splitting** automatic
- **Lazy Loading** for components and images
- **SEO Optimized** with proper metadata
- **Fast Loading** with optimized assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, contact:
- Email: hello@mavaliy.com
- Website: https://mavaliy.com

---

**Built with ❤️ by Mavaliy Digital Marketing**
