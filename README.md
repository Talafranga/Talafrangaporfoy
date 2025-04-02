# Talafranga Portfolio

This is my personal portfolio website built with [Next.js](https://nextjs.org), showcasing my projects and skills.

## 🚀 Features

- Modern and responsive design
- Dark/light theme toggle with system preference detection
- Project showcase with live demo links
- Blog section with markdown support
- Contact form
- Privacy policy
- Fully responsive layout for all devices
- Interactive UI elements with smooth animations

## 🛠️ Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- ESLint
- PostCSS
- Vercel (for deployment)

## 🏃‍♂️ Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Project Structure

```
├── src/
│   └── app/
│       ├── components/    # Reusable React components
│       │   ├── Header.tsx        # Navigation header
│       │   └── ThemeToggle.tsx   # Theme switcher
│       ├── context/       # React context
│       │   └── ThemeContext.tsx  # Theme state management
│       ├── constants/     # Constant values and configurations
│       ├── blog/          # Blog section
│       ├── projects/      # Projects section
│       ├── contact/       # Contact form
│       ├── privacy/       # Privacy policy
│       ├── globals.css    # Global styles
│       ├── layout.tsx     # Root layout component
│       └── page.tsx       # Home page component
├── public/               # Static assets
├── tailwind.config.js    # Tailwind CSS configuration
├── next.config.js        # Next.js configuration
└── package.json         # Project dependencies and scripts
```

## ✨ Optimizations

- Server-side rendering with Next.js
- Responsive images and lazy loading
- Theme persistence with localStorage
- Optimized for Core Web Vitals
- Smooth page transitions and animations

## 📫 Contact

Feel free to reach out to me for any questions or collaboration opportunities!

## 📄 License

This project is open source and available under the MIT License.
