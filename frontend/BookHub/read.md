# BookHub Frontend

This is the Angular frontend for the BookHub application.

## Overview

- Angular 20 application
- Uses Bootstrap 5 for styling
- Uses Font Awesome for icons
- Uses a JWT-based auth flow
- Includes pages for books, quotes, login, and sign-up
- Contains a theme toggle service for light/dark mode
- Uses route guarding so protected pages require login

## Important files

- `src/app/app.routes.ts` - client-side route definitions
- `src/app/app.config.ts` - Angular providers and HTTP interceptor registration
- `src/app/services/auth.ts` - auth service for login/register and token storage
- `src/app/interceptors/auth-interceptor.ts` - attaches bearer token on API requests
- `src/app/guards/auth-guard.ts` - blocks protected routes when unauthenticated
- `src/app/services/theme.ts` - theme toggle and persistence logic
- `src/app/component/navbar/navbar.ts` - app navbar and login/logout display logic
- `src/app/pages/books` - book list, add, edit pages
- `src/app/pages/quotes` - quote list, add, edit pages
- `src/styles.css` - global theme styles and dark-mode CSS


The current environment file points to this API URL:

- `environment.ts`






