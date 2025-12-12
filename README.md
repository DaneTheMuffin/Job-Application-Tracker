# Job Application Tracker

A simple full-stack job application tracker built with modern technologies.

## Tech Stack

- **Frontend:** Angular v19
- **Backend:** ASP.NET Core Minimal API (.NET 9)
- **Database:** EF Core InMemory (no external database required)
- **API Documentation:** Swagger UI (Development environment)

> **Note:** Data resets on backend restart due to the in-memory database.

## Project Structure

```
├── frontend/    # Angular application
└── backend/     # ASP.NET Core Web API
```

## Prerequisites

- **Node.js & npm** (Node 18 or higher recommended)
- **.NET SDK 9.0**

## Getting Started

### 1. Start the Backend

From the repository root:

```bash
cd backend
dotnet run
```

The API will start on URLs defined in `backend/Properties/launchSettings.json`:
- HTTPS: `https://localhost:7124`
- HTTP: `http://localhost:5271`

**Swagger UI** (Development only): `https://localhost:7124/swagger`

### 2. Start the Frontend

From the repository root:

```bash
cd frontend
npm install
npm run start | npm run run (to run with the proxy)
```

The Angular app will run on `http://localhost:4200`

The `npm run start` command uses `proxy.conf.json` to proxy API calls during development.

## Proxy Configuration

The Angular development proxy is configured in `frontend/proxy.conf.json`. Ensure the `target` matches your backend's HTTPS URL.

**Example configuration:**

```json
{
  "/api": {
    "target": "https://localhost:7124",
    "secure": false
  }
}
```

Call your API from Angular using the `/api` prefix (e.g., `/api/applications`).

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/applications` | List all applications |
| GET | `/applications/{id}` | Get a specific application |
| POST | `/applications` | Create a new application |
| DELETE | `/applications/{id}` | Delete an application |

## Available Scripts

### Frontend

```bash
npm install          # Install dependencies
npm run start        # Start dev server with proxy
npm run build        # Build for production
npm test             # Run unit tests
```

### Backend

```bash
dotnet run           # Start the API
dotnet build         # Build the project
dotnet test          # Run tests
```

## Development Tips

- The backend must be running before starting the frontend
- Check `proxy.conf.json` if API calls fail during development
- Use Swagger UI to test API endpoints directly
- All data is temporary and will be lost on backend restart
