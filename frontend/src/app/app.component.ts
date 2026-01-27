import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav>
      <a routerLink="/teams" routerLinkActive="active">Teams</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      nav {
        padding: 12px 24px;
        border-bottom: 1px solid var(--color-border);
        background: #f8fafc;
      }
      nav a {
        margin-right: 16px;
      }
      nav a.active {
        font-weight: 600;
      }
      main {
        min-height: 60vh;
      }
    `,
  ],
})
export class AppComponent {}
