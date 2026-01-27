import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Stub for Task 2. Replace with:
 * - Resolve team id from route params
 * - Fetch team (TeamsService.getTeamById) and members (MembersService.getMembersByTeamId)
 * - Display team info and members list
 * - "Add member" form that POSTs via MembersService.addMember and refreshes the list
 */
@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css',
})
export class TeamDetailComponent {}
