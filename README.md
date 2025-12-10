# Portfolio - Anotida Expected

A modern, responsive portfolio website built with Next.js, React, and TypeScript showcasing my work as an AWS-Certified Developer, Software Engineer, and AI Researcher.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with dark/light theme support
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance** - Built with Next.js 15 for optimal performance and SEO
- 🎭 **Theme Toggle** - Switch between dark and light modes
- 📊 **Project Showcase** - Detailed project pages with descriptions, architectures, and demos
- 💼 **Experience Timeline** - Visual timeline of professional experience
- 🛠️ **Skills Section** - Comprehensive skills showcase
- 📧 **Contact Form** - Easy way to get in touch

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Lucide React icons
- **Deployment**: Vercel (recommended)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anoexpected/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
my-portfolio/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── projects/          # Dynamic project pages
├── public/                # Static assets
│   └── images/            # Image files
├── src/
│   ├── components/        # React components
│   │   ├── common/        # Shared components (Navbar, Footer)
│   │   ├── sections/      # Page sections
│   │   └── ui/            # Reusable UI components
│   ├── config/            # Configuration files
│   │   ├── colors.ts      # Color palette
│   │   ├── content.ts     # Portfolio content
│   │   └── siteConfig.ts  # Site metadata
│   ├── hooks/             # Custom React hooks
│   ├── providers/         # Context providers
│   ├── styles/            # Global styles and animations
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
└── package.json
```

## 🎨 Customization

### Update Content

All portfolio content is centralized in `src/config/content.ts`. Edit this file to update:

- Personal information
- Projects
- Work experience
- Skills
- Social links

### Update Colors

Edit `src/config/colors.ts` to customize the color scheme.

### Add a New Project

1. Open `src/config/content.ts`
2. Add a new project object to the `projects` array
3. Add project image to `public/images/`
4. The project will automatically appear on the projects page

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This portfolio can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Docker containers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Anotida Expected**

- GitHub: [@anoexpected](https://github.com/anoexpected)
- LinkedIn: [Anotida Expected](https://linkedin.com/in/anoexpected)
- Email: anoexpected@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Icons by [Lucide](https://lucide.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
