# TemplateArca - Angular Dashboard Template

A modern dashboard template built with Angular 19 and Tailwind CSS 4, featuring dark mode support, data visualization with ApexCharts, and a responsive layout.

## Project Overview

*   **Framework**: [Angular 19](https://angular.dev/) (Standalone Components).
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (configured via `@tailwindcss/postcss`).
*   **Theming**: Custom theme with dark mode support managed by `ThemeService` using Angular Signals.
*   **Charts**: [ApexCharts](https://apexcharts.com/) via `ng-apexcharts`.
*   **Icons**: Likely standard SVG or font-based (not explicitly identified, but often used in dashboard templates).

## Building and Running

### Development Server
Run `npm start` (or `ng serve`) to start the development server. The application is typically served at `http://localhost:4200/`.

### Production Build
Run `npm run build` (or `ng build`) to create a production-ready build in the `dist/` directory.

### Running Tests
Run `npm test` (or `ng test`) to execute unit tests via Karma and Jasmine.

## Architecture and Structure

*   `src/app/layout`: Contains structural components like `MainLayoutComponent`, `HeaderComponent`, and `SidebarComponent`.
*   `src/app/pages`: Feature-specific pages such as `Dashboard`, `Funnels`, `Contacts`, `Chat`, `Charts`, `Tables`, and `Auth`.
*   `src/app/components`: Reusable UI components (e.g., `ProductCard`, `RevenueCard`, `StatsCard`).
*   `src/app/services`: Application-wide services, including `ThemeService` for theme management.
*   `src/styles.scss`: Global styles and Tailwind CSS v4 theme configuration (colors, fonts).

## Development Conventions

*   **Standalone Components**: The project uses the modern Angular standalone component pattern (no `NgModule`).
*   **Signals**: Angular Signals are used for state management where appropriate (e.g., `ThemeService.isDark`).
*   **Lazy Loading**: Route-level lazy loading is used for all major pages in `app.routes.ts`.
*   **Theming**: Dark mode is implemented by adding the `.dark` class to the `html` element.
*   **Styling**: Prefer Tailwind utility classes. Custom theme variables are defined in `@theme` block within `src/styles.scss`.

## Key Dependencies

*   `@angular/core`, `@angular/router`, etc. (v19.1+)
*   `apexcharts`, `ng-apexcharts`
*   `tailwindcss` (v4.0+), `@tailwindcss/postcss`
