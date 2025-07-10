# Replit.md

## Overview

This is a modern e-commerce application built with a full-stack TypeScript architecture featuring a React frontend and Express backend. The application implements a virtual store with product categories, shopping cart functionality, and a responsive design using shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: React Context for cart and theme state
- **Data Fetching**: TanStack Query (React Query) for server state management

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules (type: "module")
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server bundling
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: PostgreSQL session store with connect-pg-simple

## Key Components

### Frontend Components
- **Layout Components**: Navbar, Footer with responsive design
- **Product Components**: ProductCard, ProductCarousel with auto-scroll
- **Shopping Cart**: BagSideMenu with slide-out functionality
- **Navigation**: CategoryCard for category browsing
- **Theme System**: ThemeToggle with dark/light mode support

### Data Management
- **Categories Data**: Static data structure in `/client/src/data/categories.ts`
- **Cart Context**: Persistent shopping cart with localStorage
- **Theme Context**: System preference detection with manual override

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Routes**: Placeholder API structure for future backend integration
- **Development Server**: Integrated Vite dev server with HMR

## Data Flow

### Product Browsing
1. Homepage displays category grid and featured product carousel
2. Category selection navigates to filtered product list
3. Product selection shows detailed product page with size selection
4. Add to cart functionality updates global cart state

### Shopping Cart
1. Cart items stored in React Context with localStorage persistence
2. Side menu shows cart contents with quantity controls
3. Real-time total calculation and item management

### Theme Management
1. System preference detection on initial load
2. Manual theme toggle with localStorage persistence
3. CSS custom properties for consistent theming

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

### Development Tools
- **Vite**: Build tool with React plugin
- **TypeScript**: Type safety and development experience
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing with autoprefixer

### Backend Dependencies
- **Drizzle Kit**: Database schema management and migrations
- **Neon Database**: Serverless PostgreSQL provider
- **Express**: Web framework for API routes
- **Zod**: Runtime type validation

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `/dist/public`
- **Backend**: esbuild bundles server code to `/dist/index.js`
- **Database**: Drizzle migrations in `/migrations` directory

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Development**: Hot reload with Vite dev server integration
- **Production**: Static file serving from Express server

### File Structure
- **Client**: React application in `/client` directory
- **Server**: Express backend in `/server` directory  
- **Shared**: Common types and schemas in `/shared` directory
- **Database**: Schema definitions and migrations

The application follows a monorepo structure with clear separation of concerns between frontend, backend, and shared utilities. The build system supports both development and production deployments with optimized bundling and asset management.