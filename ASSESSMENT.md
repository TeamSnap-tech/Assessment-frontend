# Frontend Assessment – Angular (4–5 hours)

This repo is used to evaluate Frontend Engineer candidates. The **backend is implemented**; your work is **frontend-only** in the Angular app under `frontend/`.

## Setup

1. **Backend** (Terminal 1):
   ```bash
   cd backend && npm install && npm start
   ```
   API runs at `http://localhost:3000`. Endpoints:
   - `GET /api/teams` – list teams  
   - `GET /api/teams/:id` – team by id  
   - `GET /api/members?teamId=<id>` – members for a team  
   - `POST /api/members` – body: `{ teamId, name, email, role? }`

2. **Frontend** (Terminal 2):
   ```bash
   cd frontend && npm install && npm start
   ```
   App runs at `http://localhost:4200` and proxies `/api` to the backend.

## Your Tasks

Complete **all 2–3** tasks. Total suggested time: **4–5 hours**.

---

### Task 1: Teams list – backend integration, loading, error, layout (≈1.5–2 h)

The teams list at `/teams` displays teams from the backend.

**Integrate with the backend and implement:**

1. **Backend integration** – Fetch teams via `GET /api/teams` using `TeamsService`. Ensure data flows from the API into the UI correctly. Use existing models/types.
2. **Loading state** – Show a clear loading indicator (e.g. spinner or skeleton) while the request is in progress. Avoid showing the list until data has loaded.
3. **Error state** – If the request fails (e.g. backend off, network error), show a user-friendly error message and, optionally, a retry action.
4. **Responsive layout** – Make the list responsive:
   - **Desktop:** card-based grid (e.g. 2–3 columns).
   - **Mobile:** single column, readable touch targets.

Use the existing `TeamsService` and `TeamsListComponent`. Improve the template and styles; refactor the component if it helps.

---

### Task 2: Team detail, members list, “Add member” (≈2–2.5 h)

The route `/teams/:id` exists and currently shows a stub.

**Implement the team detail page with full backend integration:**

1. **Backend integration** – Call `GET /api/teams/:id` and `GET /api/members?teamId=<id>` via `TeamsService` and `MembersService`. Handle invalid/unknown `id` (e.g. 404).
2. **Display** – Show:
   - Team name, sport, member count.
   - List of members (name, email, role) from the API.
3. **“Add member” form** – A form with:
   - Name (required)
   - Email (required)
   - Role (optional; default “Player”)
   - Submit calls `POST /api/members` via `MembersService.addMember({ teamId, name, email, role })`.
   - On success: refresh the members list (or update local state) and clear the form. On error: show a short error message.

Use the existing `MembersService` and types in `core/models`. Implement in the existing `TeamDetailComponent` (or split into smaller components if you prefer).

---

### Task 3: Search/filter **or** unit tests (≈1 h)

Choose **one** of the two options below.

**Option A – Search/filter**

- Add a search or filter on the **teams list** (e.g. by team name or sport).
- Filtering can be client-side (filter the loaded list) or, if you have time, server-side (document the intended API if backend does not support it).
- Typing in the field should update the visible list without a separate “Search” button (or with one, if you prefer and document it).

**Option B – Unit tests**

- Add unit tests for **at least one** of:
  - `TeamsService` (e.g. `getTeams()` returns data from HttpClient, or error handling).
  - `TeamsListComponent` (e.g. shows loading, then teams, or shows error when request fails).
- Use Jasmine + TestBed; mock `HttpClient` (e.g. `HttpClientTestingModule`). Run with `npm test` in the frontend folder.

---

## What we care about

- **Correctness** – Data comes from the API; loading/error and 404 are handled.
- **Angular practices** – Standalone components, RxJS, type-safe use of the API (existing models).
- **UX** – Clear loading and error states; responsive, readable layout.
- **Code quality** – Readable components and services; consistent style and structure.
- **Scope** – All 2–3 tasks done, without over-building (no need for auth, micro-frontends, etc.).

## Deliverables

1. Code in this repo (commit your changes).
2. A short note (e.g. in a `NOTES.md` or in the PR description) with:
   - How long you spent (per task if possible).
   - Any assumptions or shortcuts.
   - If you chose Task 3 Option B: how to run the tests.

## Time guideline

| Task | Suggested time |
|------|------------------|
| Task 1 – Backend integration, loading, error, responsive list | 1.5–2 h |
| Task 2 – Team detail, members, Add member (backend integration) | 2–2.5 h |
| Task 3 – Search/filter **or** unit tests | ~1 h |
| **Total** | **4–5 h** |

Focus on completing all 2–3 tasks in a maintainable way rather than perfecting one area.
