# Modern PG Website

A modern PG (Paying Guest) website with a frontend landing page and a backend API for room details, pricing, and visiting card info.

## Features

- Modern responsive UI with rooms, amenities, and eligibility highlights
- Backend API endpoints for PG details and visiting card data
- Prepaid electricity billing at ₹8.68 per unit
- Fully furnished rooms with dedicated kitchen area

## Project Structure

- `server.js` – Express server serving API + static frontend
- `src/app.js` – Shared Express app (used by Vercel serverless function)
- `src/data.js` – PG data used by the API
- `public/` – Frontend (HTML/CSS/JS + images)
- `tests/` – Node test suite

## Run locally

Install dependencies, then run the API server and React dev server.

```bash
npm install
```

Terminal 1 (API server):

```bash
npm run dev:api
```

Terminal 2 (React dev server):

```bash
npm run dev
```

Then open `http://localhost:5173` in a browser.

## API endpoints

- `GET /api/pg` – Full PG data
- `GET /api/visiting-card` – Visiting card information
- `GET /health` – Health check

## Tests

```bash
npm test
```

## Vercel deployment

This project deploys a React frontend (Vite build) alongside the serverless API at `api/index.js`.

1. Push the repo to GitHub.
2. In Vercel, import the repo and deploy.
3. The frontend is built from Vite and the API endpoints are available at `/api/pg`, `/api/visiting-card`, and `/health`.
