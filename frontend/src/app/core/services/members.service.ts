import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member, AddMemberRequest } from '../models/member.model';

const API = '/api';

@Injectable({ providedIn: 'root' })
export class MembersService {
  constructor(private http: HttpClient) {}

  getMembersByTeamId(teamId: string): Observable<Member[]> {
    return this.http.get<Member[]>(`${API}/members`, {
      params: { teamId },
    });
  }

  addMember(request: AddMemberRequest): Observable<Member> {
    return this.http.post<Member>(`${API}/members`, request);
  }
}
