# TeamSnap Frontend Assessment

Assessment repository for **Staff-level Frontend Engineer (Angular)** candidates. The focus is on frontend work; the backend is provided and already implemented.

## Structure

```
TeamSnap/
├── ASSESSMENT.md    ← Instructions and tasks for candidates (read this first)
├── backend/         ← Node/Express API (implemented; run as-is)
└── frontend/        ← Angular app (candidates complete tasks here)
```

## Quick start (for candidates)

### 1. Backend

```bash
cd backend
npm install
npm start
```

Runs at **http://localhost:3000**. Endpoints:

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/teams` | List all teams |
| GET | `/api/teams/:id` | Team by id |
| GET | `/api/members?teamId=<id>` | Members for a team |
| POST | `/api/members` | Add member – body: `{ teamId, name, email, role? }` |

### 2. Frontend

```bash
cd frontend
npm install
npm start
```

Runs at **http://localhost:4200**. The dev server proxies `/api` to the backend, so both must be running for full functionality.

### 3. Tasks

Open **[ASSESSMENT.md](./ASSESSMENT.md)** and complete all three tasks there. Expected total time: **4–5 hours**.

## Tech stack

- **Backend:** Node 18+, Express, CORS, in-memory data (resets on restart).
- **Frontend:** Angular 18, standalone components, RxJS, CSS. TypeScript strict mode.

## Evaluators

- Backend is ready; do not change it unless needed for assessment logistics.
- Candidate work is in `frontend/` and any `NOTES.md` (or similar) they add.
- See **ASSESSMENT.md** for task descriptions and evaluation focus.
