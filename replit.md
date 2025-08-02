# Branding Diagnosis Tool for Law Firms

## Overview

This is a comprehensive branding diagnosis tool specifically designed for law firms operating in the Brazilian legal market. The application provides a structured questionnaire that analyzes four key branding dimensions (Identity, Positioning, Communication, and Client Experience) and generates personalized reports with actionable recommendations. Built as a full-stack web application, it features a modern React frontend with an Express.js backend, utilizing PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built with **React 18** using TypeScript and employs a component-based architecture. The UI leverages **shadcn/ui** components built on top of **Radix UI** primitives for accessibility and consistency. State management is handled through React's built-in hooks and **TanStack Query** for server state management. The application uses **Wouter** for lightweight client-side routing and **Tailwind CSS** for styling with a custom dark theme optimized for professional branding tools.

### Backend Architecture
The server follows a **RESTful API** design pattern using **Express.js** with TypeScript. The architecture separates concerns through distinct layers:
- **Route handlers** in `server/routes.ts` manage HTTP endpoints
- **Storage abstraction** in `server/storage.ts` provides a clean interface for data operations
- **Schema validation** using **Zod** ensures type safety across the full stack

The backend currently implements an in-memory storage solution (`MemStorage`) with a defined interface (`IStorage`) that allows for easy migration to database persistence.

### Data Storage Solutions
The application is configured for **PostgreSQL** integration using **Drizzle ORM** with the Neon serverless adapter. Database schemas are defined in `shared/schema.ts` using Zod for both runtime validation and TypeScript type inference. The current implementation uses memory storage for development but includes complete database migration setup through Drizzle Kit.

### Build and Development Tools
The project uses **Vite** as the build tool with custom configuration for development and production environments. **esbuild** handles server-side bundling for production deployment. The setup includes TypeScript compilation, CSS processing through PostCSS, and asset management optimized for both development and production workflows.

### Quiz Engine and Scoring System
The application implements a sophisticated scoring algorithm that analyzes user responses across multiple dimensions. The quiz now features 21 questions including digital marketing channels evaluation. The data structure supports categorized questions with weighted scoring, archetype determination based on response patterns, and personalized recommendation generation. Results include radar chart visualizations, color palette suggestions, and prioritized action items tailored to the law firm's profile.

### Lead Generation System
The application includes a Canvas Marketing Digital lead capture system that appears both on the welcome screen and results page. Users can request access to a specialized marketing canvas by providing their email and WhatsApp contact information. The system stores lead data in memory storage with timestamp tracking and validation through Zod schemas.

## External Dependencies

- **Neon Database**: Serverless PostgreSQL hosting platform for production data storage
- **Drizzle ORM**: Type-safe ORM for database operations and schema management
- **Replit Platform**: Development environment integration with specific plugins and banners
- **Font Awesome**: Icon library for consistent visual elements throughout the application
- **Google Fonts**: Inter font family for professional typography
- **Chart.js**: Data visualization library for generating radar charts and analytics displays
- **shadcn/ui Component Library**: Pre-built accessible UI components based on Radix UI primitives