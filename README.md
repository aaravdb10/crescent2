# Crescent

Crescent is a web experience built to showcase the diverse cultures, traditions, heritage, food, and history of different cities across India. The objective of this project is to present each city's unique identity through an immersive, highly tailored presentation. 

Rather than using a generic template, every city on the website is treated as its own individual experience. This means that each page features its own specific design, custom typography, layout structure, and curated color scheme reflecting the spirit of that city.

It took two to three days to name this project. The name Crescent is inspired by the phases of the moon, representing a stage when only a small portion of the moon is visible. Similarly, this project showcases only a small part of the vast culture and heritage of India.


For the initial version, the following 12 cities are featured:

- Ahmedabad
- Amritsar
- Bhubaneswar
- Delhi
- Hyderabad
- Jaipur
- Kochi
- Kolkata
- Madurai
- Mumbai
- Mysuru
- Varanasi

---

> **Important Notice**
>
> This repository is an incomplete showcase designed exclusively for demonstration purposes. It contains the folder architecture, build configurations, and stubbed source code representing the layout of the project. The actual fully functioning codebase, visual graphics, customized scrollytelling components, database schemas, and proprietary logic are kept in a separate private repository.

---

## Technical Project Details

| Metric | Detail |
|---|---|
| Start Date | 8 May 2026 |
| End Date | 21 May 2026 |
| Duration | Approximately 2 weeks |
| Total Commits | 24 commits |

---

## Repository Structure

Below is an overview of how the files and directories are organized in the original private repository:

```
crescent/
├── backend/                  # Laravel API server
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/  # Route controllers (City & State)
│   │   │   └── Middleware/   # CORS and custom middleware
│   │   ├── Models/           # MongoDB Eloquent models
│   │   └── Providers/        # Bootstrapping service providers
│   ├── database/
│   │   ├── migrations/       # Schema files
│   │   └── seeders/          # Database seeding scripts
│   ├── routes/               # API route declarations
│   ├── Dockerfile            # Container builder file
│   └── composer.json         # PHP dependencies list
│
└── frontend/                 # React frontend
    ├── src/
    │   ├── pages/            # Page layouts
    │   ├── components/       # UI building blocks (Map, Scrollytelling, Layouts)
    │   ├── hooks/            # Custom application hooks
    │   ├── utils/            # Helper functions
    │   ├── App.jsx           # Router wrapper
    │   └── main.jsx          # JS root mount
    ├── package.json          # Node dependencies list
    └── vite.config.js        # Bundler configuration file
```

---

## Tech Stack

### Backend

| Layer | Technology |
|---|---|
| Framework | Laravel 12 (PHP 8.2) |
| Database | MongoDB (via laravel-mongodb integration) |
| API Architecture | RESTful API endpoints |
| Runtime | PHP-FPM with Docker |
| Testing | PHPUnit 11 |

### Frontend

| Layer | Technology |
|---|---|
| Framework | React 19 (Vite build system) |
| Routing | React Router DOM 7 |
| Animations | GSAP (GreenSock Animation Platform) and Framer Motion |
| Localization | i18next translation suite (EN / DE) |
| HTTP client | Axios |
| Deployment | Vercel |

### Infrastructure

| Layer | Technology |
|---|---|
| Containerization | Docker |
| Edge Config | Vercel Edge Config (maintenance mode check) |

---

## Technical Optimizations and Improvements

The codebase underwent multiple rounds of optimization to ensure high performance, security, and a seamless user experience.

### 1. Performance and Rendering Optimizations
- **Dynamic Lazy Loading**: Enabled code-splitting for scrollytelling pages and the interactive map component to prevent heavy initial assets from blocking the main thread.
- **Vite Bundler Adjustments**: Implemented manual vendor code splitting and adjusted asset chunk size limits to optimize dependency loading.
- **Image Optimization**: Migrated raster images to WebP format to decrease load times without sacrificing visual clarity.
- **GSAP Animation Tuning**: Resolved delay warnings and render overheads to guarantee smooth, hardware-accelerated animations across all devices.

### 2. Backend and Data Optimizations
- **Payload Reduction**: Scaled down API payloads by returning only necessary data fields.
- **Caching Headers**: Configured custom HTTP cache headers to decrease server requests for static cultural information.
- **Validation**: Added slug validation on request inputs to handle API errors cleanly.
- **Database Connection Flex**: Refactored MongoDB configuration to support dynamic DSN database connection strings.

### 3. Localization and Global Support
- **Internationalization**: Configured multi-language routing for English (EN) and German (DE) languages using the i18next library.

### 4. Infrastructure and Deployment
- **Edge-Based Maintenance Mode**: Built a zero-downtime, no-redeploy maintenance mode. It checks a site-lock variable using Vercel Edge Config inside an edge middleware function before loading the page.
- **Vercel Rewrites**: Configured custom URL redirect rules to prevent 404 errors during page refreshes on single-page routes.

### 5. SEO and Accessibility Audits
- **Metadata Management**: Wrapped the application context inside React Helmet Async to handle unique page titles and meta descriptions dynamically.
- **Semantic Structure**: Refactored page layouts using proper HTML5 tags to ensure full accessibility and SEO crawler compliance.

---

## Backend API Specification

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/cities` | GET | Returns a collection of all cities with basic details. |
| `/api/cities/{slug}` | GET | Returns a single city's cultural, architectural, and historical data. |
| `/api/states` | GET | Returns a collection of states mapping to the cities. |
<h2 align="center">Thank you for reading till here.</h2>
