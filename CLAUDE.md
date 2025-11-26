# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Workout Diary** application built with **Next.js 16**, using modern React patterns and TypeScript. It's currently a starter template that needs to be developed into a full workout tracking application.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono (via next/font)
- **Authentication**: Clerk (@clerk/nextjs)
- **Build Tool**: Next.js with TypeScript compilation

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

The development server runs on `http://localhost:3000`.

## Project Structure

- **`app/`** - Next.js App Router directory
  - `layout.tsx` - Root layout with ClerkProvider and font configuration
  - `page.tsx` - Homepage component (currently starter template)
  - `globals.css` - Global CSS styles
- **`middleware.ts`** - Clerk middleware for authentication (to be created)
- **`.env.local`** - Environment variables for Clerk keys (to be created)
- **`public/`** - Static assets (images, icons)
- **`components/`** - React components (to be created)
- **`lib/`** - Utility functions and configurations (to be created)
- **`types/`** - TypeScript type definitions (to be created)

## Architecture Notes

- Uses **Next.js App Router** (not Pages Router)
- Implements **Server Components** by default
- **Authentication** via Clerk with `clerkMiddleware()` in middleware.ts
- `<ClerkProvider>` wrapper in app/layout.tsx for authentication context
- Configured for **dark mode** support with Tailwind classes
- Uses **Geist** font family optimized for Vercel
- TypeScript configuration is standard Next.js setup
- ESLint configured with Next.js recommended rules

## Key Configuration Files

- **`next.config.ts`** - Next.js configuration (currently minimal)
- **`tailwindcss`** - Styled with Tailwind v4 (latest version)
- **`tsconfig.json`** - TypeScript configuration for Next.js
- **`eslint.config.mjs`** - ESLint configuration
- **`postcss.config.mjs`** - PostCSS configuration for Tailwind

## Development Guidelines

- This is a fitness/workout tracking application - all components should be built around workout data, exercises, routines, and progress tracking
- Use TypeScript strictly - no JavaScript files
- Leverage Tailwind CSS for all styling needs
- Follow Next.js App Router conventions
- **Authentication**: Use Clerk components (`<SignInButton>`, `<SignUpButton>`, `<UserButton>`) and protect routes as needed
- Implement responsive design patterns
- Consider dark mode support in all UI components

## Clerk Integration Guidelines

### Required Clerk Setup
1. Install `@clerk/nextjs` package
2. Create `.env.local` with Clerk keys (NEVER commit real keys)
3. Create `middleware.ts` with `clerkMiddleware()` from `@clerk/nextjs/server`
4. Wrap app with `<ClerkProvider>` in `app/layout.tsx`
5. Use Clerk React components for authentication UI

### Authentication Patterns
- Use `<SignedIn>` and `<SignedOut>` for conditional rendering
- Import Clerk features from `@clerk/nextjs` (client) and `@clerk/nextjs/server` (server)
- Use `auth()` from `@clerk/nextjs/server` in server components
- NEVER use deprecated patterns like `authMiddleware()` or `_app.tsx`

### Environment Variables (.env.local only)
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_SECRET_KEY
```

## Current State

The application is in **starter template** state with:
- Basic Next.js setup and configuration
- Starter homepage with Next.js branding
- Tailwind CSS configured and working
- Development environment ready for feature development
- **Clerk integration documented** but not yet implemented

The application needs to be developed from scratch into a workout diary system with authentication via Clerk.

## Documentation Reference Guidelines

**CRITICAL**: All code generation by Claude Code MUST follow this workflow:

1. **First**: Always check the `/docs` directory for relevant documentation before writing any code
2. **Reference**: Refer to the appropriate documentation file in `/docs` for implementation guidance
3. **Implement**: Only after checking documentation, proceed with code implementation

The `/docs` directory contains:
- **Architecture documentation** - System design patterns and component relationships
- **API specifications** - Database schemas, API endpoints, and data models
- **Component guides** - Specific component implementation patterns
- **Workflow documentation** - Step-by-step implementation guides

- /docs/ui.md

This ensures consistency, follows established patterns, and maintains architectural integrity throughout the development process.