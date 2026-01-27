import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamsService } from '../../../core/services/teams.service';
import { Team } from '../../../core/models/team.model';

@Component({
  selector: 'app-teams-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './teams-list.component.html',
  styleUrl: './teams-list.component.css',
})
export class TeamsListComponent {
  teams: Team[] = [];
  loaded = false;
  error: string | null = null;

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService.getTeams().subscribe({
      next: (data) => {
        this.teams = data;
        this.loaded = true;
        this.error = null;
      },
      error: () => {
        this.loaded = true;
        this.error = 'Failed to load teams.';
      },
    });
  }
}
