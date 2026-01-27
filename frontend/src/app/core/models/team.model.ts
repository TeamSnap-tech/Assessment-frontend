/**
 * API type for team. Matches backend GET /api/teams and GET /api/teams/:id
 */
export interface Team {
  id: string;
  name: string;
  sport: string;
  memberCount: number;
}
