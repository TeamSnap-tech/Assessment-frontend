/**
 * API type for member. Matches backend GET /api/members?teamId= and POST /api/members
 */
export interface Member {
  id: string;
  teamId: string;
  name: string;
  email: string;
  role: string;
}

export interface AddMemberRequest {
  teamId: string;
  name: string;
  email: string;
  role?: string;
}
