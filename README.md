# Chethan Kodenkiri - React Portfolio

This is a React TypeScript version of Chethan Kodenkiri's portfolio website, converted from the original Vue.js implementation.

## Features

- **Modern React with TypeScript**: Built using Create React App with TypeScript support
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Interactive Components**: Skill bars, project cards, and navigation
- **Accessibility**: Semantic HTML and keyboard navigation support

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Chethan-kodenkiri-react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── Home.tsx      # Main portfolio component
│   └── ChethanKodenkiriAvatar.tsx
├── lib/
│   ├── utils.ts      # Utility functions
│   └── Strings.ts    # String constants
├── assets/           # Images and static assets
├── App.tsx           # Root component
└── index.tsx         # Entry point
```

## Features Overview

### Sections
- **Hero**: Introduction with animated background and social links
- **About**: Personal description and background
- **Skills**: Interactive skill bars with animations
- **Experience**: Professional work history
- **Projects**: Featured projects with tech stacks
- **Certifications**: Professional certifications

### Interactive Elements
- Dark/light mode toggle
- Mobile-responsive navigation
- Smooth scrolling
- Animated skill progress bars
- Hover effects on cards and buttons

## Customization

### Colors and Theming
The color scheme is defined in `src/index.css` using CSS custom properties. The dark mode is handled through Tailwind's dark mode classes.

### Content
Update the content in `src/lib/Strings.ts` and the data arrays in `src/components/Home.tsx` to customize the portfolio information.

## Deployment

The app can be deployed to any static hosting service:

1. Build the production version:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service.

## License

This project is for portfolio purposes. All rights reserved.
