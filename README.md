# Crescent

Crescent is a web portal built to showcase the culture, traditions, and heritage of different cities across India. The goal of the project is to present each city's identity through a structured, data-driven experience, covering aspects such as food, festivals, language, art, architecture, and history.

For the initial version, the following cities were included:

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

Each city is represented through its own dedicated page with cultural content sourced and structured from the backend.

---

## Note

This repository is a partial showcase of the project. It contains the folder structure, configuration files, and architectural overview of the codebase. The actual implementation files, UI components, visual design, and data logic are kept in a private repository.

The full project is private and not publicly available.

---

## Project Details

| Detail         | Value                        |
|----------------|------------------------------|
| Start Date     | 8 May 2026                   |
| End Date       | 21 May 2026                  |
| Duration       | Approximately 2 weeks        |
| Total Commits  | 24                           |

---

## Tech Stack

### Backend

| Layer          | Technology                        |
|----------------|-----------------------------------|
| Framework      | Laravel 12 (PHP 8.2)              |
| Database       | MongoDB (via laravel-mongodb 5.x) |
| API            | RESTful API                       |
| Runtime        | PHP-FPM with Docker               |
| Testing        | PHPUnit 11                        |

### Frontend

| Layer          | Technology                        |
|----------------|-----------------------------------|
| Framework      | React 19 (with Vite)              |
| Routing        | React Router DOM 7                |
| Animation      | GSAP 3, Framer Motion 12          |
| Localization   | i18next (EN / DE)                 |
| HTTP Client    | Axios                             |
| Deployment     | Vercel                            |

### Infrastructure

| Layer          | Technology                        |
|----------------|-----------------------------------|
| Containerization | Docker                          |
| Edge Config    | Vercel Edge Config (maintenance mode) |

---

## Repository Structure

```
crescent/
├── backend/                  # Laravel API server
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/  # API route handlers
│   │   │   └── Middleware/   # Request middleware
│   │   ├── Models/           # Eloquent/MongoDB models
│   │   └── Providers/        # Service providers
│   ├── database/
│   │   ├── migrations/       # Database schema migrations
│   │   ├── seeders/          # Seed data for cities and states
│   │   └── factories/        # Model factories for testing
│   ├── routes/               # API and web route definitions
│   ├── config/               # Laravel configuration files
│   ├── Dockerfile            # Backend container definition
│   └── composer.json         # PHP dependencies
│
└── frontend/                 # React SPA
    ├── src/
    │   ├── pages/            # Page-level components (one per route)
    │   ├── components/       # Reusable UI components
    │   ├── hooks/            # Custom React hooks
    │   ├── utils/            # Utility functions
    │   ├── data/             # Static data files
    │   ├── App.jsx           # Root component with routing
    │   └── main.jsx          # Application entry point
    ├── public/               # Static assets
    ├── index.html            # HTML entry point
    ├── package.json          # JS dependencies
    └── vite.config.js        # Vite build configuration
```

---

## Architecture Overview

The project follows a decoupled architecture where the frontend and backend are independent services.

The backend exposes a REST API built with Laravel. It connects to a MongoDB database that stores cultural content for each city and state. Data is served through dedicated controllers for cities and states, with CORS handled via middleware.

The frontend is a React single-page application. It fetches data from the API at runtime and renders it through page components. Each city has a dedicated page that displays cultural details. The application supports two languages, English and German, using i18next. Animations across the portal use GSAP and Framer Motion. The site is deployed on Vercel.

Maintenance mode is managed without redeployment using Vercel Edge Config, which allows toggling site availability through a remote flag.

---

## Backend API Endpoints

| Method | Endpoint            | Description                        |
|--------|---------------------|------------------------------------|
| GET    | /api/cities         | Returns a list of all cities       |
| GET    | /api/cities/{slug}  | Returns details for a single city  |
| GET    | /api/states         | Returns a list of all states       |

---

## Contact

This project is part of a personal portfolio. For any questions or collaboration, please reach out through the repository profile.
