import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'teams', pathMatch: 'full' },
  {
    path: 'teams',
    loadComponent: () =>
      import('./features/teams/teams-list/teams-list.component').then(
        (m) => m.TeamsListComponent
      ),
  },
  {
    path: 'teams/:id',
    loadComponent: () =>
      import('./features/teams/team-detail/team-detail.component').then(
        (m) => m.TeamDetailComponent
      ),
  },
];
