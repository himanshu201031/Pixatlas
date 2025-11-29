# Pixatlas SaaS Agency

A premium, high-performance SaaS agency website built with modern web technologies.

## 🚀 Overview

Pixatlas is a cutting-edge landing page designed for SaaS agencies, featuring a sleek dark mode aesthetic, smooth animations, and a responsive layout. It showcases services, pricing, testimonials, and more with a focus on user experience and visual appeal.

## ✨ Features

-   **Modern Design**: Dark mode interface with vibrant accent colors and glassmorphism effects.
-   **Smooth Animations**: Powered by `framer-motion` and `GSAP` for scroll-triggered reveals and interactive elements.
-   **Responsive Layout**: Fully optimized for desktops, tablets, and mobile devices.
-   **Interactive Components**:
    -   **Hero Section**: 3D-like tilt effects and dynamic text.
    -   **Dashboard Mockup**: Animated charts and widgets.
    -   **Feature Showcase**: Tabbed navigation with dynamic visualizers.
    -   **Testimonials**: Infinite scroll marquee.
    -   **Custom Cursor**: Interactive cursor with hover states.
-   **Performance**: Lazy loading implemented for optimal initial load time.

## 🛠️ Tech Stack

-   **Framework**: [React](https://react.dev/) (v19)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**:
    -   [Framer Motion](https://www.framer.com/motion/)
    -   [GSAP](https://gsap.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Charts**: [Recharts](https://recharts.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/pixatlas-saas-agency.git
    cd pixatlas-saas-agency
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
pixatlas-saas-agency/
├── components/         # React components
│   ├── ui/             # Reusable UI elements (Buttons, Sections, etc.)
│   ├── Features.tsx    # Services & About sections
│   ├── Hero.tsx        # Hero section with dashboard mockup
│   ├── Navbar.tsx      # Responsive navigation
│   ├── ...
├── App.tsx             # Main application entry with routing logic
├── index.css           # Global styles and Tailwind directives
├── index.html          # HTML entry point
├── tailwind.config.js  # Tailwind configuration
└── vite.config.ts      # Vite configuration
```

## 🎨 Customization

-   **Colors**: The primary accent color is defined in `tailwind.config.js` (default: `#ccff00`).
-   **Fonts**: Uses `Inter` and `Outfit` via Google Fonts.

## 📄 License

This project is licensed under the MIT License.
