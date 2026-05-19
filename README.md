# Portfolio Website

A modern, responsive portfolio website built with React and Vite. Showcase your projects, skills, and testimonials with smooth animations and an engaging user experience.

## Features

- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **Smooth Animations** - Interactive animations powered by Framer Motion
- **Multiple Sections** - Header, About, Projects, Testimonials, Contact, and Footer
- **Contact Notifications** - Toast notifications for form submissions using React Toastify
- **Smooth Scrolling** - Custom hook for seamless page navigation
- **Fast Development** - Vite for rapid development and hot module replacement
- **Code Quality** - ESLint configuration for code consistency

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Notifications**: React Toastify
- **Code Quality**: ESLint

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd webdev
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── component/        # React components (About, Contact, Header, etc.)
├── hooks/           # Custom React hooks (useSmoothScroll)
├── assets/          # Static assets
├── App.jsx          # Main application component
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

## Sections

- **Header** - Welcome section with introduction
- **About** - About you and your background
- **Projects** - Showcase your portfolio projects
- **Testimonials** - Client or peer testimonials
- **Contact** - Get in touch section with form
- **Footer** - Navigation and links

## Customization

Edit the component files in `src/component/` to customize each section with your own content, images, and information.

## License

This project is open source and available under the MIT License.
