import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Team } from '../models/team.model';

const API = '/api';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${API}/teams`);
  }

  getTeamById(id: string): Observable<Team | null> {
    return this.http.get<Team>(`${API}/teams/${id}`).pipe(
      catchError(() => of(null))
    );
  }
}
