# Rodney Roy Gitonga - Portfolio 2025 🚀

A modern, interactive portfolio website built with React, Three.js, and cutting-edge web technologies.

## 🌟 Features

- **3D Interactive Elements** - Three.js powered 3D animations and backgrounds
- **Modern 2025 Design** - Futuristic aesthetics with cyan/purple gradients
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Smooth Animations** - Framer Motion powered transitions
- **Professional Sections** - About, Experience, Projects, Skills, Blog, Contact
- **Real Projects Showcase** - 8+ actual projects with detailed descriptions

## 🛠 Tech Stack

- **Frontend:** React 19, Three.js, React Three Fiber
- **Styling:** Tailwind CSS, Custom CSS animations
- **Animations:** Framer Motion, React Intersection Observer
- **Icons:** Lucide React
- **3D Graphics:** Three.js, React Three Drei

## 📁 Project Structure

```
portfolio-2025/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js          # Main portfolio component
│   ├── App.css         # Custom styles and animations
│   ├── index.js        # React entry point
│   └── index.css       # Global styles
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── craco.config.js     # CRACO configuration
```

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/rodneygitonga/portfolio-2025.git
cd portfolio-2025
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Create environment file:**
```bash
cp .env.example .env
```

4. **Start the development server:**
```bash
npm start
# or
yarn start
```

5. **Open your browser:**
Visit `http://localhost:3000` to see your portfolio!

## 🎨 Customization

### Update Personal Information

Edit the following in `src/App.js`:

- **Hero Section** (lines 148-180): Update name, title, and description
- **About Section** (lines 232-250): Update your professional background
- **Experience Section** (lines 283-320): Add/update your work experience
- **Projects Section** (lines 379-434): Add your actual projects
- **Skills Section** (lines 540-581): Update your technical skills
- **Contact Section** (lines 838-865): Update your contact information

### Update Social Links

Replace the placeholder links with your actual profiles:
- LinkedIn: `https://www.linkedin.com/in/your-profile`
- GitHub: `https://github.com/your-username`
- Email: `your-email@domain.com`

### Customize Colors and Styling

The main color scheme uses:
- **Primary:** Cyan (#00f5ff)
- **Secondary:** Purple (#8b5cf6)
- **Accent:** Pink (#ec4899)

Update these in `src/App.css` to change the color scheme.

## 📱 Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build folder will contain the optimized production files.

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically on every push

### Netlify
1. Build your project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repo for automatic deployments

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

## 🔧 Available Scripts

- `npm start` - Runs the development server
- `npm run build` - Creates production build
- `npm test` - Runs test suite
- `npm run eject` - Ejects from Create React App (irreversible)

## 📦 Dependencies

### Core Dependencies
- `react` - UI framework
- `react-dom` - React DOM bindings
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Three.js helpers
- `three` - 3D graphics library
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `react-intersection-observer` - Scroll detection

### Dev Dependencies
- `@craco/craco` - Override Create React App configuration
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - CSS vendor prefixing
- `postcss` - CSS post-processing

## 🎯 Performance Optimization

The portfolio is optimized for performance with:
- **Code Splitting** - React.lazy and Suspense
- **Image Optimization** - Responsive images with proper sizing
- **GPU Acceleration** - Hardware-accelerated animations
- **Efficient Animations** - Optimized Three.js rendering
- **Bundle Optimization** - Tree shaking and minification

## 🔍 SEO & Accessibility

- **Semantic HTML** - Proper heading structure and landmarks
- **Alt Text** - All images have descriptive alt text
- **Focus Management** - Keyboard navigation support
- **Reduced Motion** - Respects user motion preferences
- **Meta Tags** - SEO-friendly meta descriptions

## 🐛 Troubleshooting

### Common Issues

1. **Three.js not rendering:**
   - Check browser WebGL support
   - Ensure graphics drivers are updated

2. **Animations not smooth:**
   - Reduce motion in browser/OS settings
   - Check GPU acceleration is enabled

3. **Build errors:**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Rodney Roy Gitonga**
- Email: rodneyroygitonga@gmail.com
- Phone: +254 705 762 775
- LinkedIn: [Rodney Gitonga](https://www.linkedin.com/in/rodney-gitonga)
- GitHub: [rodneygitonga](https://github.com/rodneygitonga)
- Location: Nairobi, Kenya

---

Built with ❤️ using React, Three.js, and modern web technologies.