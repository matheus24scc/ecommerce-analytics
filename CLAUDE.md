# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commonly Used Commands

### Development
- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run serve`
- Lint code: `npm run lint`

### Development Workflow
1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make changes and commit: `git commit -m "feat: your feature description"`
3. Push to remote: `git push origin feature/your-feature-name`
4. Open a pull request

## Code Architecture and Structure

### Overview
This is a React e-commerce analytics dashboard built with:
- React 18 + TypeScript
- Vite as build tool
- Redux Toolkit for state management
- Material-UI (MUI) for UI components
- React Router for navigation
- Recharts for data visualization

### Directory Structure
```
src/
├── components/       # Reusable UI components (Header, Sidebar, etc.)
├── pages/            # Page-level components (Dashboard, Products, Sales)
├── services/         # API service definitions
├── store/            # Redux store configuration and slices
├── theme/            # MUI theme configuration
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
├── constants/        # Application constants
├── styles/           # Global styles
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```
